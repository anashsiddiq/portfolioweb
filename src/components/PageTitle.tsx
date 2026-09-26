import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Home | Anash Siddiqui",
  "/about": "About Me | Anash Siddiqui",
  "/services": "Services | Anash Siddiqui",
  "/projects": "Projects | Anash Siddiqui",
  "/contact": "Contact Us | Anash Siddiqui",
  "/skills": "Skills | Anash Siddiqui",
  "/Process": "Process | Anash Siddiqui",
  "/testimonials": "Testimonials | Anash Siddiqui",
  "/pricing": "Pricing | Anash Siddiqui",
  "/Blog": "Blog | Anash Siddiqui",

  



};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[pathname] || "Anash Siddiqui | Web Developer";
  }, [pathname]);

  return null;
}