    import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPaperPlane,
  faXmark,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi 👋 I'm your AI assistant. How can I help you with your website project?",
    },
  ]);

  const sendMessage = async () => {
    const message = input.trim();

    if (!message || isTyping) {
      return;
    }

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            data.reply ||
            "Sorry, I could not understand your message.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999]">

      {/* =========================================================
          CHAT WINDOW
      ========================================================= */}
      {open && (
        <div
          className="
            mb-4
            w-[370px]
            max-w-[calc(100vw-32px)]
            overflow-hidden
            rounded-2xl
            border
            border-black/10
            bg-white
            shadow-[0_20px_70px_rgba(0,0,0,0.25)]
            animate-[chatOpen_0.25s_ease-out]
          "
        >

          {/* ================= HEADER ================= */}
          <div className="relative overflow-hidden bg-ink px-4 py-4 text-white">

            {/* Background glow */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-ember/20
                blur-2xl
              "
            />

            <div className="relative flex items-center justify-between">

              <div className="flex items-center gap-3">

                {/* Robot Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-ember
                    shadow-lg
                  "
                >
                  <FontAwesomeIcon
                    icon={faRobot}
                    className="text-lg"
                  />
                </div>

                <div>
                  <h3 className="font-display text-[16px] font-bold">
                    AI Assistant
                  </h3>

                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

                    <p className="font-mono text-[9px] tracking-[0.12em] text-white/60 uppercase">
                      Online
                    </p>
                  </div>
                </div>

              </div>

              {/* Close */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close AI chatbot"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:text-white
                  hover:rotate-90
                "
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-lg"
                />
              </button>

            </div>
          </div>

          {/* ================= MESSAGES ================= */}
          <div
            className="
              h-[360px]
              overflow-y-auto
              bg-[#f6f6f6]
              p-4
              scrollbar-thin
            "
          >

            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {/* BOT */}
                {message.role === "bot" && (
                  <div
                    className="
                      mr-2
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-ink
                      text-white
                    "
                  >
                    <FontAwesomeIcon
                      icon={faRobot}
                      className="text-xs"
                    />
                  </div>
                )}

                <div
                  className={`
                    max-w-[78%]
                    rounded-2xl
                    px-4
                    py-3
                    text-[13px]
                    leading-relaxed
                    ${
                      message.role === "user"
                        ? `
                          rounded-br-sm
                          bg-ember
                          text-white
                          shadow-sm
                        `
                        : `
                          rounded-bl-sm
                          bg-white
                          text-gray-800
                          shadow-sm
                        `
                    }
                  `}
                >
                  {message.text}
                </div>

              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="mb-4 flex items-center">

                <div
                  className="
                    mr-2
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-ink
                    text-white
                  "
                >
                  <FontAwesomeIcon
                    icon={faRobot}
                    className="text-xs"
                  />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    rounded-2xl
                    rounded-bl-sm
                    bg-white
                    px-4
                    py-3
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" />

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{
                      animationDelay: "150ms",
                    }}
                  />

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{
                      animationDelay: "300ms",
                    }}
                  />
                </div>

              </div>
            )}

          </div>

          {/* ================= QUICK QUESTIONS ================= */}
          <div className="border-t border-gray-100 bg-white px-3 pt-3">

            <div className="mb-2 flex gap-2 overflow-x-auto pb-1">

              <button
                type="button"
                onClick={() => {
                  setInput("I need a business website");
                }}
                className="
                  whitespace-nowrap
                  rounded-full
                  border
                  border-gray-200
                  px-3
                  py-1.5
                  text-[10px]
                  text-gray-600
                  transition
                  hover:border-ember
                  hover:text-ember
                "
              >
                Business Website
              </button>

              <button
                type="button"
                onClick={() => {
                  setInput("I need a Laravel website");
                }}
                className="
                  whitespace-nowrap
                  rounded-full
                  border
                  border-gray-200
                  px-3
                  py-1.5
                  text-[10px]
                  text-gray-600
                  transition
                  hover:border-ember
                  hover:text-ember
                "
              >
                Laravel
              </button>

              <button
                type="button"
                onClick={() => {
                  setInput("I need a React website");
                }}
                className="
                  whitespace-nowrap
                  rounded-full
                  border
                  border-gray-200
                  px-3
                  py-1.5
                  text-[10px]
                  text-gray-600
                  transition
                  hover:border-ember
                  hover:text-ember
                "
              >
                React.js
              </button>

            </div>

          </div>

          {/* ================= INPUT ================= */}
          <div className="border-t border-gray-100 bg-white p-3">

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-2
                py-1.5
                transition
                focus-within:border-ember
                focus-within:ring-2
                focus-within:ring-ember/10
              "
            >

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                placeholder="Type your message..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  py-2
                  text-[13px]
                  text-gray-800
                  outline-none
                  placeholder:text-gray-400
                  disabled:opacity-50
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-ember
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-sm"
                />
              </button>

            </div>

            <p className="mt-2 text-center font-mono text-[8px] tracking-[0.1em] text-gray-400 uppercase">
              AI Assistant
            </p>

          </div>

        </div>
      )}

      {/* =========================================================
          FLOATING AI BUTTON
      ========================================================= */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open AI chatbot"
          className="
            chatbot-float
            group
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-ink
            text-white
            shadow-[0_10px_35px_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >

          {/* Outer pulse */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-ember
              opacity-30
              animate-ping
            "
          />

          {/* Icon circle */}
          <span
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-ember
              shadow-lg
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          >
            <FontAwesomeIcon
              icon={faComments}
              className="text-xl"
            />
          </span>

          {/* Notification dot */}
          <span
            className="
              absolute
              right-0
              top-0
              h-4
              w-4
              rounded-full
              border-2
              border-ink
              bg-green-400
            "
          />

          {/* Tooltip */}
          <span
            className="
              pointer-events-none
              absolute
              right-[76px]
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
              rounded-lg
              bg-ink
              px-3
              py-2
              font-mono
              text-[10px]
              tracking-[0.08em]
              text-white
              uppercase
              opacity-0
              shadow-lg
              transition-all
              duration-300
              group-hover:translate-x-[-4px]
              group-hover:opacity-100
            "
          >
            Chat with AI
          </span>

        </button>
      )}

    </div>
  );
}