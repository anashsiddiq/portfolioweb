export const profile = {
  name: "Anash Siddiqui",
  role: "PHP & Laravel Developer",
  tagline: "React.js · MySQL · JavaScript",
  location: "India",
  email: "anashsiddiqui1998@gmail.com",
  phone: "+91 6266247887",
  whatsapp: "+91 6266247887",
  /** Replace with the real number (country code, digits only) — wa.me / tel links use this. */
  phoneRaw: "6266247887",
  github: "https://github.com/anashsiddiq",
  linkedin: "https://www.linkedin.com/in/anashsiddiq/",
  availability: "Available for freelance & contract projects",
  responseTime: "Usually replies within 24 hours",
  years: 3,
  headline: ["BUILDING DIGITAL", "EXPERIENCES", "THAT WORK"],
  intro:
    "I build responsive business websites, custom web applications, admin dashboards and API-integrated solutions — with code that stays easy to maintain after launch.",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Process", to: "/process" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export const moreLinks = [
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

export const trustPoints = [
  "3+ Years Experience",
  "PHP & Laravel",
  "React.js",
  "MySQL",
  "Responsive Design",
];

export const heroStats = [
  { value: 3, suffix: "+", label: "Years writing production PHP" },
  { value: 20, suffix: "+", label: "Websites & modules shipped" },
  { value: 6, suffix: "", label: "Core technologies, used daily" },
  { value: 24, suffix: "h", label: "Typical reply time" },
];

export const marqueeItems = [
  "PHP 8",
  "Laravel",
  "React.js",
  "MySQL",
  "JavaScript (ES6+)",
  "Bootstrap 5",
  "REST APIs",
  "HTML5 / CSS3",
  "jQuery",
  "Git & GitHub",
  "cPanel",
  "Blade",
  "Eloquent ORM",
];

/* ---------------------------------- services --------------------------------- */

export type Service = {
  id: string;
  no: string;
  title: string;
  short: string;
  blurb: string;
  deliverables: string[];
  bestFor: string;
  timeline: string;
  icon: "site" | "code" | "react" | "dashboard" | "wrench" | "api";
};

export const services: Service[] = [
  {
    id: "business-website",
    no: "01",
    title: "Business Website",
    short: "A professional online presence that actually brings enquiries.",
    blurb:
      "A modern, mobile-first website for clinics, shops, agencies, schools and service businesses — built so customers can find you, trust you and contact you in two taps.",
    deliverables: [
      "Modern responsive business website",
      "Mobile-friendly design tested on real devices",
      "Contact form with email notification",
      "WhatsApp click-to-chat integration",
      "Google Maps location embed",
      "SEO-friendly structure, meta & clean URLs",
      "Speed optimisation (compressed assets, lazy loading)",
      "Basic on-page SEO setup & sitemap",
    ],
    bestFor: "Clinics, retailers, coaches, local service businesses",
    timeline: "1–3 weeks",
    icon: "site",
  },
  {
    id: "laravel-development",
    no: "02",
    title: "Laravel Development",
    short: "Custom applications where your business logic lives.",
    blurb:
      "When a template can't do the job, I build the real thing in Laravel — proper structure, migrations, validation, relationships and secure authentication instead of one giant PHP file.",
    deliverables: [
      "Custom Laravel applications from scratch",
      "Admin panels & internal tools",
      "Authentication, sessions & password reset",
      "CRUD systems with validation & error handling",
      "Database design, migrations & seeders",
      "REST APIs (built or consumed)",
      "Role & permission based access",
      "File uploads, exports (CSV/Excel) & reports",
    ],
    bestFor: "Operations teams, portals, booking & management systems",
    timeline: "3–8 weeks",
    icon: "code",
  },
  {
    id: "react-development",
    no: "03",
    title: "React.js Development",
    short: "Fast, component-driven interfaces on top of your API.",
    blurb:
      "React frontends that stay organised as the product grows — reusable components, clean state handling, and API integration that behaves well on slow connections.",
    deliverables: [
      "React.js frontend (Vite based, no page reloads)",
      "Reusable component library",
      "REST API integration with loading & error states",
      "Responsive UI for mobile, tablet and desktop",
      "Dashboard interfaces with charts & data tables",
      "Forms with client-side validation",
      "Routing, protected routes & code splitting",
    ],
    bestFor: "Dashboards, SaaS-style products, API-driven frontends",
    timeline: "2–6 weeks",
    icon: "react",
  },
  {
    id: "admin-dashboard",
    no: "04",
    title: "Admin Dashboard",
    short: "One place to run the business instead of ten spreadsheets.",
    blurb:
      "A control panel your team can use without training — manage users, orders, content and reports, with permissions so everyone only sees what they should.",
    deliverables: [
      "User management (add, edit, block, reset)",
      "Orders / bookings / enquiry management",
      "Reports with date filters & export",
      "Charts for daily, weekly and monthly trends",
      "Data tables with search, sort & pagination",
      "Role-based access (Admin, Manager, Staff)",
      "Activity log of important actions",
    ],
    bestFor: "Growing teams replacing Excel with a real system",
    timeline: "3–7 weeks",
    icon: "dashboard",
  },
  {
    id: "api-integration",
    no: "05",
    title: "REST API Integration",
    short: "Connect your site to payments, SMS, WhatsApp and third parties.",
    blurb:
      "Payment gateways, SMS/OTP, WhatsApp Business, shipping providers, CRMs or your own backend — integrated properly with error handling, retries and logging.",
    deliverables: [
      "Payment gateway integration (Razorpay / others)",
      "SMS & OTP service integration",
      "WhatsApp Business API / cloud API",
      "Third-party & CRM data sync",
      "Secure API key handling with .env",
      "Request logging, retries & failure handling",
      "API documentation for your team",
    ],
    bestFor: "Products that need to talk to other systems",
    timeline: "1–3 weeks",
    icon: "api",
  },
  {
    id: "maintenance",
    no: "06",
    title: "Website Maintenance",
    short: "Keep the site you already have alive, fast and secure.",
    blurb:
      "Existing website giving trouble? I take over, fix what's broken, keep it updated and make sure a small issue never turns into downtime.",
    deliverables: [
      "Bug fixing (PHP, Laravel, JS, CSS)",
      "Content, image & page updates",
      "Security updates and vulnerability checks",
      "Database fixes, cleanup & backups",
      "Performance improvements & caching",
      "SSL, domain and hosting support",
      "Monthly health report",
    ],
    bestFor: "Websites built by someone else, or left unattended",
    timeline: "Ongoing / per task",
    icon: "wrench",
  },
];

/* ---------------------------------- projects --------------------------------- */

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  categoryLabel: string;
  year: string;
  industry: string;
  duration: string;
  image: string;
  domain: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  result: string;
  development: {
    frontend: string;
    backend: string;
    database: string;
  };
  highlights: { label: string; value: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "dental-clinic-website",
    name: "Dental Clinic Website",
    client: "SmileCare Dental Clinic",
    category: "business",
    categoryLabel: "Business Website",
    year: "2024",
    industry: "Healthcare",
    duration: "2–3 weeks",
    image:
      "https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "smilecare-dental.in",
    summary:
      "A responsive clinic website with service pages, doctor profiles, online appointment enquiry, WhatsApp chat and Google Maps directions.",
    problem:
      "The clinic had no professional online presence. Patients could not see the treatments offered, timings or fees range, and the only way to reach the clinic was a phone call during working hours. Most enquiries came from walk-ins and word of mouth, and the clinic had no way to know how many people were actually looking for them online.",
    solution:
      "I built a responsive website with separate pages for each treatment, a doctors section with qualifications, an appointment enquiry form that emails the front desk, a floating WhatsApp button for instant chat, and an embedded Google Map with directions. Content was structured with proper headings, meta titles and descriptions so each treatment page could rank for its own search terms.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
    features: [
      "Fully responsive design (mobile-first)",
      "Appointment enquiry form with email alert",
      "WhatsApp click-to-chat floating button",
      "Google Maps location & directions",
      "Individual treatment pages for SEO",
      "Doctor profile & qualification section",
      "Photo gallery of the clinic",
      "Admin page to update timings & notices",
    ],
    result:
      "Created a mobile-friendly website with online appointment enquiry and WhatsApp contact functionality, so patients can reach the clinic outside working hours without calling. Each treatment now has its own indexable page.",
    development: {
      frontend:
        "Bootstrap 5 grid with a custom colour system, sticky header, lazy-loaded gallery images and form validation in vanilla JavaScript so nothing breaks when JS is unavailable.",
      backend:
        "PHP handles the enquiry form: server-side validation, sanitisation, honeypot spam protection, storing enquiries in MySQL and sending an email to the front desk.",
      database:
        "Three tables — treatments, doctors and enquiries — with indexed columns for the admin listing and a status field so staff can mark an enquiry as contacted.",
    },
    highlights: [
      { label: "Pages built", value: "9" },
      { label: "Delivery", value: "18 days" },
      { label: "Mobile score", value: "Fast load" },
    ],
    featured: true,
  },
  {
    slug: "property-listing-portal",
    name: "Property Listing Portal",
    client: "UrbanNest Realty",
    category: "laravel",
    categoryLabel: "Laravel Application",
    year: "2024",
    industry: "Real Estate",
    duration: "6 weeks",
    image:
      "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "urbannest.example.com",
    summary:
      "A Laravel portal where agents publish property listings with photos, and buyers filter by city, budget, BHK and type — plus an admin panel to approve every listing.",
    problem:
      "The brokerage tracked properties in a shared spreadsheet. Photos lived in random WhatsApp groups, two agents often advertised the same flat, and there was no public page they could share with a buyer. Searching for '2BHK under 45 lakh in Indore' meant scrolling hundreds of rows.",
    solution:
      "I built a Laravel application with an agent dashboard for adding and editing listings, multi-image upload with thumbnails, a public search page with filters (city, locality, budget range, BHK, property type, furnishing), individual listing pages with a photo gallery and an enquiry form routed to the assigned agent. An admin role approves or rejects listings before they go live and can see which agent is performing.",
    tech: ["Laravel", "PHP 8", "Blade", "MySQL", "Bootstrap 5", "JavaScript", "jQuery"],
    features: [
      "Role-based access (Admin, Agent, Viewer)",
      "Property CRUD with multi-image upload",
      "Advanced search with 7 filter types",
      "Public listing pages with gallery & map",
      "Enquiry form routed to the assigned agent",
      "Admin approval workflow before publish",
      "Featured / sold / rented status management",
      "Monthly report of listings & enquiries per agent",
    ],
    result:
      "Replaced the shared spreadsheet with a searchable property database and a public listing page that agents can share directly with buyers. Every listing now belongs to one agent, and enquiries land in a dashboard instead of a phone call.",
    development: {
      frontend:
        "Blade templates with Bootstrap 5, an AJAX filter panel that updates results without reloading, and a lightbox gallery built with jQuery.",
      backend:
        "Laravel routing, Eloquent models with relationships (User → Listings → Enquiries), form request validation, policies for role permissions, and image handling via the Storage facade.",
      database:
        "Normalised schema: users, properties, property_images, localities, enquiries and approvals — with composite indexes on city + budget to keep filtered queries fast.",
    },
    highlights: [
      { label: "Modules", value: "5" },
      { label: "DB tables", value: "11" },
      { label: "Filters", value: "7" },
    ],
    featured: true,
  },
  {
    slug: "restaurant-ordering-dashboard",
    name: "Restaurant Site + Order Dashboard",
    client: "Spice Route Kitchen",
    category: "dashboard",
    categoryLabel: "Admin Dashboard",
    year: "2025",
    industry: "Food & Hospitality",
    duration: "5 weeks",
    image:
      "https://images.pexels.com/photos/34206671/pexels-photo-34206671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "spiceroute.example.com",
    summary:
      "Menu website for customers plus an admin dashboard where the kitchen updates the menu, tracks table orders and sees daily revenue reports.",
    problem:
      "The menu was printed, so a price change meant reprinting. Orders were written on paper slips that got lost during rush hours, and the owner had no idea which dishes were profitable until month end when the accountant sent a summary.",
    solution:
      "A two-part build: a public menu website (categories, dishes, prices, photos, veg/non-veg tags) that the kitchen can update from the dashboard in real time, and an admin panel with table-wise order entry, order status flow (New → Preparing → Served → Paid), daily and monthly revenue reports with charts, and a dish-level sales report so the owner can see what to promote.",
    tech: ["Laravel", "PHP", "MySQL", "Chart.js", "Bootstrap 5", "JavaScript"],
    features: [
      "Live menu website editable from admin",
      "Table-wise order entry with item modifiers",
      "Order status pipeline (New → Preparing → Served → Paid)",
      "Daily, weekly and monthly revenue charts",
      "Dish-wise sales report & best sellers",
      "Staff login with role-based access",
      "Bill printing / PDF generation",
      "Inventory alerts for stocked-out dishes",
    ],
    result:
      "Menu changes now go live instantly without reprinting, orders are tracked in one place instead of paper slips, and the owner can see daily revenue and top-selling dishes from the dashboard.",
    development: {
      frontend:
        "Blade + Bootstrap for the public menu, Chart.js for revenue and dish-performance graphs, and a fast keyboard-friendly order entry screen for staff.",
      backend:
        "Laravel controllers for menu, orders and reports; queued PDF bill generation; scheduled daily summary report; middleware to restrict cashier and manager actions.",
      database:
        "categories, dishes, modifiers, tables, orders, order_items and payments — with soft deletes on dishes so historical orders never break.",
    },
    highlights: [
      { label: "Screens", value: "12" },
      { label: "Reports", value: "4" },
      { label: "Roles", value: "3" },
    ],
    featured: true,
  },
  {
    slug: "react-storefront",
    name: "React.js Storefront",
    client: "Threadline Apparel",
    category: "react",
    categoryLabel: "React.js Frontend",
    year: "2025",
    industry: "Retail / E-commerce",
    duration: "4 weeks",
    image:
      "https://images.pexels.com/photos/5717973/pexels-photo-5717973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "threadline.example.com",
    summary:
      "A React.js storefront consuming a REST API — product listing with filters, product detail page, cart, wishlist and a checkout flow with Razorpay.",
    problem:
      "The old PHP shop took 4–5 seconds per page change and felt broken on mobile. The owner wanted a modern, app-like browsing experience without rebuilding the existing product database and order system.",
    solution:
      "I built the frontend in React (Vite) against the existing REST API: a reusable component library (ProductCard, FilterPanel, CartDrawer, PriceTag), context-based cart and wishlist state persisted in localStorage, debounced search, skeleton loaders for slow connections, protected checkout routes, and Razorpay order creation with signature verification on the server.",
    tech: ["React.js", "JavaScript (ES6+)", "REST API", "CSS3", "Razorpay", "PHP"],
    features: [
      "Product listing with category, size & price filters",
      "Debounced instant search",
      "Cart & wishlist persisted locally",
      "Product detail page with variant selection",
      "Razorpay checkout with server-side verification",
      "Skeleton loaders & optimistic UI",
      "Fully responsive mobile-first layout",
      "Order history for logged-in customers",
    ],
    result:
      "Delivered an app-like browsing experience on top of the existing product database — navigation between pages happens without full reloads, and the checkout completes in three steps with Razorpay.",
    development: {
      frontend:
        "React with hooks and context, React Router for protected routes, a component library reused across listing, detail and cart screens, and CSS written as utility + scoped modules rather than a heavy UI kit.",
      backend:
        "A thin PHP/REST layer for cart sessions, order creation and Razorpay signature verification, so payment state is never trusted from the browser.",
      database:
        "Existing product, customer and order tables were kept intact; added order_payments and wishlists without breaking the current admin panel.",
    },
    highlights: [
      { label: "Components", value: "24" },
      { label: "API endpoints", value: "9" },
      { label: "Steps to pay", value: "3" },
    ],
    featured: true,
  },
  {
    slug: "gym-membership-dashboard",
    name: "Gym Membership Dashboard",
    client: "IronCore Fitness",
    category: "laravel",
    categoryLabel: "Laravel Application",
    year: "2023",
    industry: "Fitness",
    duration: "4 weeks",
    image:
      "https://images.pexels.com/photos/32610333/pexels-photo-32610333.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "ironcore.example.com",
    summary:
      "Member management system with plan tracking, renewal reminders, attendance logs, trainer assignment and payment receipts.",
    problem:
      "Membership renewals were tracked in a register, so members kept using the gym after their plan expired and nobody noticed for weeks. Payment receipts were handwritten and the owner could not answer a simple question: how many active members do I have today?",
    solution:
      "A Laravel dashboard with member profiles, plan purchase and renewal history, automatic expiry calculation, a 'expiring in 7 days' list the front desk checks every morning, QR/barcode-free simple attendance entry, trainer assignment, and printable payment receipts. Role-based access keeps trainers out of financial screens.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "Chart.js"],
    features: [
      "Member profile with photo & document upload",
      "Plan purchase, renewal & expiry tracking",
      "'Expiring in 7 days' reminder list",
      "Daily attendance entry & member history",
      "Trainer assignment and batch scheduling",
      "Payment receipts (printable)",
      "Revenue & active member charts",
      "Role-based access (Owner, Front Desk, Trainer)",
    ],
    result:
      "Expired members are now visible on a single reminder screen every morning, receipts are generated from the system, and the owner can see active member count and monthly revenue without asking the accountant.",
    development: {
      frontend:
        "Bootstrap 5 admin layout with a compact sidebar, data tables with search and pagination, and Chart.js for member growth and revenue trends.",
      backend:
        "Laravel with Eloquent relationships (Member → Plans → Payments → Attendance), a scheduled command that flags expired memberships daily, and role middleware on every route group.",
      database:
        "members, plans, member_plans, payments, attendance and trainers — expiry is derived from purchase date + duration and indexed for the reminder query.",
    },
    highlights: [
      { label: "Modules", value: "6" },
      { label: "Roles", value: "3" },
      { label: "Scheduled jobs", value: "1" },
    ],
    featured: true,
  },
  {
    slug: "document-management-portal",
    name: "Document Management Portal",
    client: "Legal Munshi (internal)",
    category: "dashboard",
    categoryLabel: "Admin Dashboard",
    year: "2023",
    industry: "Legal Services",
    duration: "Ongoing",
    image:
      "https://images.pexels.com/photos/34803994/pexels-photo-34803994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    domain: "internal.legalmunshi.in",
    summary:
      "Internal Laravel portal for client records, document uploads, case stage tracking and searchable templates used by the operations team.",
    problem:
      "Client documents were spread across local folders and email attachments. Finding last year's draft for a client meant asking three people, and there was no record of who uploaded or edited what.",
    solution:
      "An internal portal where each client has one record: documents uploaded and categorised, case stage moved through a defined pipeline, notes timestamped per user, and a template library with search. Every action is logged with the user ID so the team can trace changes, and storage is organised by client ID so files can never be misfiled.",
    tech: ["Laravel", "PHP 8", "MySQL", "React.js", "REST API", "Bootstrap"],
    features: [
      "Client record with categorised document uploads",
      "Case stage pipeline with status history",
      "Searchable document & template library",
      "Timestamped notes per user",
      "Full activity/audit log",
      "Permission-based module access",
      "Bulk upload with progress & validation",
      "Export client dossier as PDF",
    ],
    result:
      "All client documents now live under one searchable record with an audit trail, so the team retrieves a document by client name instead of searching folders and email threads.",
    development: {
      frontend:
        "Blade for internal screens, with React components for the document library and upload widget where a snappier UI mattered most.",
      backend:
        "Laravel with storage disk configuration, chunked uploads, a REST API consumed by the React components, queued PDF generation and an audit-log middleware.",
      database:
        "clients, documents, document_categories, cases, case_stages, notes and activity_logs — document paths are generated from client ID so naming stays consistent.",
    },
    highlights: [
      { label: "Modules", value: "7" },
      { label: "DB tables", value: "9" },
      { label: "Status", value: "In use" },
    ],
    featured: false,
  },
];

export const projectCategories = [
  { id: "all", label: "All Work" },
  { id: "business", label: "Business Websites" },
  { id: "laravel", label: "Laravel Apps" },
  { id: "react", label: "React.js" },
  { id: "dashboard", label: "Dashboards" },
];

/* ----------------------------------- skills ---------------------------------- */

export const skillGroups = [
  {
    title: "Frontend",
    note: "What the customer actually sees and touches.",
    items: [
      { name: "HTML5", detail: "Semantic markup, forms, accessibility basics" },
      { name: "CSS3", detail: "Flexbox, Grid, transitions, responsive layouts" },
      { name: "JavaScript (ES6+)", detail: "DOM, fetch, async/await, validation" },
      { name: "Bootstrap 5", detail: "Rapid responsive UI, custom theming" },
      { name: "jQuery", detail: "Legacy codebases, AJAX, plugins" },
      { name: "React.js", detail: "Components, hooks, routing, API state" },
    ],
  },
  {
    title: "Backend",
    note: "Where the business rules and security live.",
    items: [
      { name: "PHP 8", detail: "OOP, sessions, file handling, security" },
      { name: "Laravel", detail: "Routing, Eloquent, middleware, auth, queues" },
      { name: "Blade", detail: "Server-rendered templates & layouts" },
      { name: "REST API", detail: "Design, consume, token auth, validation" },
      { name: "Authentication", detail: "Login, roles, permissions, password reset" },
    ],
  },
  {
    title: "Database",
    note: "Schema decisions that keep queries fast later.",
    items: [
      { name: "MySQL", detail: "Schema design, joins, indexing, optimisation" },
      { name: "Eloquent ORM", detail: "Relationships, scopes, eager loading" },
      { name: "Migrations & Seeders", detail: "Version-controlled schema & test data" },
    ],
  },
  {
    title: "Tools & Deployment",
    note: "The unglamorous part that keeps work shipping.",
    items: [
      { name: "Git & GitHub", detail: "Branching, commits, pull requests" },
      { name: "VS Code", detail: "Daily driver with PHP & React tooling" },
      { name: "cPanel", detail: "Deploy, DNS, email, SSL, file manager" },
      { name: "XAMPP / Laragon", detail: "Local development environments" },
      { name: "Postman", detail: "API testing & collections" },
      { name: "Composer / npm", detail: "Dependency management" },
    ],
  },
];

export const notClaiming = [
  "Mobile app development (Flutter / React Native)",
  "UI/UX design as a standalone service",
  "Machine learning or data science",
  "WordPress theme sales or plugin marketplaces",
];

export const currentlyLearning = [
  "TypeScript with React",
  "Tailwind CSS for design-system work",
  "Laravel queues & scheduling in depth",
  "Testing with PHPUnit basics",
];

/* --------------------------------- experience -------------------------------- */

export const timeline = [
  {
    from: "2023",
    to: "Present",
    title: "PHP & Laravel Developer",
    org: "Legal Munshi",
    type: "work",
    points: [
      "Building and maintaining Laravel web applications and internal portals",
      "Developing admin dashboards: user management, reports, role-based access",
      "Designing MySQL schemas and writing optimised queries for growing data",
      "Creating and consuming REST APIs for frontend and third-party integrations",
      "Handling bug fixing, deployment on cPanel and post-launch support",
    ],
  },
  {
    from: "2021",
    to: "2023",
    title: "MCA — Computer Science",
    org: "RKDF University",
    type: "study",
    points: [
      "Specialisation in web technologies and database systems",
      "Projects on PHP/MySQL web applications and front-end interfaces",
      "Built the foundation in data structures, DBMS and software engineering",
    ],
  },
  {
    from: "2020",
    to: "2021",
    title: "Self-taught web development",
    org: "Practice projects",
    type: "study",
    points: [
      "Started with HTML, CSS, JavaScript and Bootstrap through small builds",
      "Moved into PHP form handling, sessions and MySQL CRUD",
      "Rebuilt each practice project twice — once messy, once properly structured",
    ],
  },
];

export const values = [
  {
    title: "Clean & maintainable code",
    body: "Readable naming, small functions, no copy-paste controllers. The next developer — or me in a year — should understand it in minutes.",
  },
  {
    title: "Responsive by default",
    body: "Most of your customers are on a phone. Every layout is built mobile-first and checked on real screen sizes, not just one browser.",
  },
  {
    title: "Fast communication",
    body: "You get updates without chasing. Questions answered honestly, including 'this feature will take longer than you think'.",
  },
  {
    title: "Custom functionality",
    body: "If a template can't do it, it gets built properly — validation, permissions and edge cases included.",
  },
  {
    title: "Post-launch support",
    body: "Launch is not the end. Small fixes, content updates and guidance for your team after going live.",
  },
  {
    title: "Honest estimates",
    body: "Realistic timelines and a clear scope. No inflated numbers, no promised results I cannot verify.",
  },
];

/* ---------------------------------- process ---------------------------------- */

export const processSteps = [
  {
    no: "01",
    title: "Discussion",
    duration: "Day 1–2",
    body: "We talk about your business, who your customers are and what the website or application must actually do. I ask a lot of questions here — unclear requirements are the main reason projects get delayed.",
    deliverables: ["Requirement call / WhatsApp discussion", "Reference sites you like", "List of must-have vs nice-to-have features"],
  },
  {
    no: "02",
    title: "Planning",
    duration: "Day 2–4",
    body: "I convert the discussion into a written scope: page list, features, technology choice, database structure and a timeline. You approve this before any code is written, so there are no surprises later.",
    deliverables: ["Sitemap & page list", "Feature scope document", "Technology stack decision", "Timeline & payment milestones"],
  },
  {
    no: "03",
    title: "Design",
    duration: "Week 1–2",
    body: "Layout, colours, typography and the mobile view are decided. For business websites this is a design draft; for dashboards it is a screen-by-screen wireframe of what each user role sees.",
    deliverables: ["Homepage / key screen design", "Mobile layout review", "Colour & typography confirmation"],
  },
  {
    no: "04",
    title: "Development",
    duration: "Week 2–6",
    body: "Frontend and backend are built together: HTML/CSS/React screens, Laravel routes and controllers, MySQL schema, forms with validation, authentication, permissions and API integrations. You get progress updates with a staging link.",
    deliverables: ["Staging link you can open anytime", "Frontend screens", "Backend logic & database", "Admin panel / APIs"],
  },
  {
    no: "05",
    title: "Testing",
    duration: "Final week",
    body: "Everything is checked on mobile and desktop, forms are submitted with wrong data on purpose, permissions are tested with each role, and pages are reviewed for broken links, slow queries and console errors.",
    deliverables: ["Cross-device testing", "Form & validation testing", "Role/permission testing", "Speed & console error check"],
  },
  {
    no: "06",
    title: "Launch",
    duration: "Launch day",
    body: "Deployed to your hosting or cPanel account: database import, environment configuration, SSL, domain pointing, email setup and a final live check. You get the credentials — everything belongs to you.",
    deliverables: ["Production deployment", "SSL & domain configuration", "Handover of all credentials", "Basic team training"],
  },
  {
    no: "07",
    title: "Support",
    duration: "After launch",
    body: "Small fixes, content updates and questions are handled after launch. If you need ongoing maintenance, we agree a simple monthly arrangement — otherwise you are free to manage it yourself.",
    deliverables: ["Bug-fix window after launch", "Content & image updates", "Optional monthly maintenance plan"],
  },
];

/* -------------------------------- testimonials ------------------------------- */

export const testimonialStatus = {
  headline: "Client testimonials coming soon.",
  body: "I don't publish reviews I can't stand behind. This page stays empty until real clients give written permission for their name and company to appear here — no invented quotes, no stock photos of smiling strangers, no five-star graphics without a person attached.",
  principles: [
    "Feedback is requested in writing at the end of every project",
    "A name or company is published only with explicit permission",
    "Anonymous feedback is labelled as anonymous — never dressed up as a named client",
    "Critical feedback stays on the page too, if it's shared publicly",
  ],
};

export const expectations = [
  {
    title: "What you get from me",
    items: [
      "A written scope before development starts",
      "A staging link from week one",
      "Updates without you having to ask",
      "Source code, database and credentials handed over",
      "Post-launch support for initial issues",
    ],
  },
  {
    title: "What I need from you",
    items: [
      "Clear requirements and reference examples",
      "Content (text, logo, images) or approval to use placeholders",
      "Feedback within 2–3 days of each review point",
      "Hosting / domain access when it's time to deploy",
    ],
  },
];

/* ----------------------------------- pricing --------------------------------- */

export const pricingTiers = [
  {
    name: "Starter",
    price: "₹9,999",
    prefix: "Starting from",
    summary: "A clean business website for a small or local business.",
    includes: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Mobile responsive design",
      "Contact form + WhatsApp button",
      "Google Maps integration",
      "Basic SEO setup (meta, sitemap)",
      "1 round of revisions",
      "Deployment to your hosting",
    ],
    timeline: "1–2 weeks",
    featured: false,
    cta: "Start with Starter",
  },
  {
    name: "Business",
    price: "₹19,999",
    prefix: "Starting from",
    summary: "Professional business website with advanced features and a small admin area.",
    includes: [
      "Up to 10 pages with custom sections",
      "Premium responsive design",
      "Admin panel to edit content & enquiries",
      "Service / product listing with filters",
      "Blog or news section",
      "Speed optimisation & caching",
      "On-page SEO + Google Analytics",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],
    timeline: "2–4 weeks",
    featured: true,
    cta: "Plan a Business Site",
  },
  {
    name: "Custom",
    price: "Let's Discuss",
    prefix: "Scoped per project",
    summary: "Laravel applications, React frontends, dashboards and API work.",
    includes: [
      "Custom Laravel application or module",
      "Admin dashboard with role-based access",
      "React.js frontend & component library",
      "REST API development or integration",
      "Payment / SMS / WhatsApp integration",
      "Database design & optimisation",
      "Milestone-based payment plan",
      "Ongoing maintenance available",
    ],
    timeline: "3–8+ weeks",
    featured: false,
    cta: "Discuss a Custom Build",
  },
];

export const pricingAddons = [
  { name: "Extra page", price: "₹1,500 / page" },
  { name: "Logo & basic branding", price: "On request" },
  { name: "Content writing", price: "On request" },
  { name: "Domain + hosting setup", price: "Included with launch" },
  { name: "Monthly maintenance", price: "From ₹2,000 / month" },
  { name: "Additional report module", price: "Scoped separately" },
];

export const pricingNotes = [
  "Prices are starting points, not fixed quotes — final cost depends on pages, features and content readiness.",
  "Third-party costs (domain, hosting, paid plugins, SMS/payment gateway fees) are billed at actuals and always belong to you.",
  "Payment is milestone based: an advance to begin, then on design approval and on delivery.",
  "You own the code, the database and every credential at handover. No lock-in.",
];

export const pricingFaqs = [
  {
    q: "Why is there no exact price list?",
    a: "Two 'business websites' can differ by 40 hours of work depending on pages, admin features and integrations. I give you a starting range so you can budget, then a fixed quote after we discuss the actual scope.",
  },
  {
    q: "What if I only need a small fix?",
    a: "Small tasks are quoted individually. Bug fixes, content updates and database issues don't need a full package.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "I set them up and deploy for you, but the accounts stay in your name so you're never dependent on me.",
  },
  {
    q: "Can I pay in parts?",
    a: "Yes — milestone based. Typically an advance to start, one at design approval and the rest at delivery.",
  },
];

/* ------------------------------------ blog ----------------------------------- */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  body: { heading?: string; para?: string; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "business-website-cost-india",
    title: "How Much Does a Business Website Cost in India?",
    excerpt:
      "A realistic breakdown of what drives website pricing — pages, admin features, integrations and content — and where the ₹5,000 quote usually hides costs.",
    date: "12 Jan 2026",
    readTime: "6 min read",
    tag: "Clients",
    body: [
      {
        para: "Every business owner asks the same first question, and every honest answer is 'it depends'. That's frustrating but true — because a website is not a product with a fixed shelf price, it's a scope. Two businesses can both say 'I need a 5-page website' and end up with 30 hours of difference in work.",
      },
      {
        heading: "What actually decides the price",
        list: [
          "Number of pages and how different they are from each other",
          "Whether content (text, images, logos) is ready or has to be arranged",
          "Admin panel: does someone need to edit content without a developer?",
          "Forms and enquiries: simple contact form, or a multi-step booking flow?",
          "Integrations: payment gateway, WhatsApp API, SMS/OTP, CRM, shipping",
          "Custom functionality that no template can provide",
          "Testing scope: how many devices, roles and languages",
        ],
      },
      {
        heading: "Rough ranges you'll see in the market",
        list: [
          "Basic brochure site (3–5 pages, no admin): lowest bracket, fastest delivery",
          "Business site with admin panel and SEO: mid bracket, 2–4 weeks",
          "Custom Laravel application or dashboard: project-scoped, 4–8+ weeks",
          "React + API product frontend: scoped by screen count and endpoints",
        ],
      },
      {
        heading: "The hidden cost of the cheapest quote",
        para: "Very low quotes usually mean one of these: a pirated or unlicensed theme, no mobile testing, no validation on forms (so your database fills with junk), no handover of credentials, or a developer who disappears after payment. None of that shows up in the invoice — it shows up six months later when the site is slow, broken and nobody can fix it because the code is unreadable.",
      },
      {
        heading: "How to get an accurate quote",
        para: "Send three things: a list of pages, two or three websites you like with a line about why, and what the site must DO (take enquiries, sell, manage records, book appointments). With that, any developer can give you a fixed number instead of a range.",
      },
    ],
  },
  {
    slug: "php-vs-laravel",
    title: "PHP vs Laravel: What's the Difference and Which Should You Use?",
    excerpt:
      "Laravel is PHP — but it changes how the project behaves after launch. A practical comparison for business owners deciding what to build on.",
    date: "28 Dec 2025",
    readTime: "5 min read",
    tag: "Development",
    body: [
      {
        para: "This question comes up in almost every discovery call. The short answer: Laravel is written in PHP. It's not a competitor — it's a framework that gives PHP a structure. The real question is whether your project needs that structure.",
      },
      {
        heading: "Core PHP: fine for small, static-ish work",
        list: [
          "3–8 page business websites with a contact form",
          "Landing pages and brochure sites",
          "Small scripts, form handlers, single-purpose tools",
          "Projects with no login, no roles and no growing data",
        ],
      },
      {
        heading: "Laravel: worth it when the app has behaviour",
        list: [
          "Authentication, roles and permissions (admin, manager, staff)",
          "Many related tables: users → orders → payments → reports",
          "File uploads, queues, scheduled jobs, email/notification flows",
          "REST APIs consumed by a React frontend or mobile app",
          "Anything another developer might have to maintain later",
        ],
      },
      {
        heading: "What Laravel gives you that raw PHP doesn't",
        para: "Eloquent ORM for relationships, migrations so your database structure is version-controlled, built-in CSRF protection and password hashing, form request validation, middleware for permissions, and artisan commands for repetitive tasks. Writing all of that by hand in core PHP is possible — it's just slower and easier to get wrong, especially the security parts.",
      },
      {
        heading: "My honest recommendation",
        para: "If it's a brochure website with a contact form, core PHP with clean structure is enough and ships faster. The moment you need logins, dashboards, reports or an API, use Laravel. Paying for framework structure you'll never use is waste; skipping it on a real application is a bigger waste six months later.",
      },
    ],
  },
  {
    slug: "why-your-business-needs-a-website",
    title: "Why Does Your Business Need a Website in 2026?",
    excerpt:
      "Not because 'everyone has one'. Because of what happens at 11pm when a customer searches for your service and finds nothing.",
    date: "10 Dec 2025",
    readTime: "4 min read",
    tag: "Clients",
    body: [
      {
        para: "Social media profiles are rented space. A website is owned. That single difference explains most of the value — but here are the practical reasons a small business needs one.",
      },
      {
        heading: "1. People verify before they contact",
        para: "Before calling a clinic, a contractor or a consultant, most customers search the name. If nothing credible appears, they assume the business is small or unreliable and move to the next result. A simple professional site answers that doubt in five seconds.",
      },
      {
        heading: "2. It answers the same questions every day",
        para: "Timings, location, services, price range, parking, whether you take insurance — a website handles the repetitive queries so your phone is free for real enquiries.",
      },
      {
        heading: "3. Search brings customers you didn't pay for",
        para: "Each service page is a chance to appear for a search like 'root canal treatment in <your city>'. One ad stops the moment you stop paying; a ranking page keeps working.",
      },
      {
        heading: "4. WhatsApp and forms capture enquiries after hours",
        para: "Most decisions happen in the evening. A click-to-chat button and an enquiry form collect those leads while the shop is shut.",
      },
      {
        heading: "5. It's the anchor for everything else",
        para: "Ads, listings, business cards, invoices and Google Maps all point somewhere. That somewhere should be a page you control, with your own content and your own contact details.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-website-developer",
    title: "How to Choose a Website Developer (5 Questions That Reveal Everything)",
    excerpt:
      "Skip the portfolio scroll. These five questions tell you whether you'll get a working product and a handover — or a site nobody can maintain.",
    date: "22 Nov 2025",
    readTime: "5 min read",
    tag: "Clients",
    body: [
      {
        para: "Portfolios are easy to fake and hard to judge. Instead of judging visuals, ask questions whose answers reveal how the person actually works.",
      },
      {
        heading: "1. 'Who owns the domain, hosting and code?'",
        para: "Correct answer: you do. If a developer insists on keeping the hosting or domain in their own account 'for convenience', you are building a dependency, not an asset. Ask for credentials handover at launch, in writing.",
      },
      {
        heading: "2. 'Can I see a project you built more than a year ago that still runs?'",
        para: "Anyone can show a screenshot. A project that has been live for a year, still loads and still has the same developer answering questions is the real test.",
      },
      {
        heading: "3. 'What happens if a form breaks on a Sunday?'",
        para: "You're listening for a support process, not a promise of 24/7 availability. 'Send me a message, I'll look at it next working day' is honest. 'No worries at all' with no process is a red flag.",
      },
      {
        heading: "4. 'How will you show me progress?'",
        para: "Look for a staging link and update frequency. If the only review point is the final delivery, you'll be negotiating with a finished product you may not like.",
      },
      {
        heading: "5. 'What's NOT included in this quote?'",
        para: "The best developers answer this instantly and specifically: content writing, logo, third-party fees, extra pages, ongoing maintenance. Hesitation here usually means scope creep later.",
      },
      {
        para: "One more signal: how many questions they ask you. A developer who quotes within ten minutes of hearing 'I need a business website' has quoted the same thing to everyone and will rebuild it for you later.",
      },
    ],
  },
  {
    slug: "what-is-an-admin-dashboard",
    title: "What Is an Admin Dashboard and When Do You Actually Need One?",
    excerpt:
      "Dashboards are the most-requested and most-over-built feature in small business software. Here's how to know if yours is justified.",
    date: "04 Nov 2025",
    readTime: "6 min read",
    tag: "Development",
    body: [
      {
        para: "An admin dashboard is the private area of a web application where staff manage data instead of a developer editing the database by hand. Login, permissions, tables, forms, filters, reports.",
      },
      {
        heading: "Signs you genuinely need one",
        list: [
          "You update the same information weekly and currently ask a developer to do it",
          "Two or more people need different access levels to the same data",
          "Records have a lifecycle: enquiry → confirmed → completed → paid",
          "You need to answer questions like 'how many this month?' regularly",
          "Data has outgrown a spreadsheet (duplicates, lost history, no permissions)",
          "You must produce receipts, invoices or reports for customers",
        ],
      },
      {
        heading: "Signs you don't need one yet",
        list: [
          "Your content changes twice a year — a simple editable section is enough",
          "Only one person will ever use it and the data is under 100 rows",
          "You're imagining analytics for traffic you don't have yet",
        ],
      },
      {
        heading: "What a well-built dashboard contains",
        list: [
          "Authentication with password reset and session handling",
          "Role-based access so a trainer can't see revenue",
          "Data tables with search, sort, pagination and filters",
          "Create/edit forms with real validation and clear error messages",
          "A status pipeline when records move through stages",
          "Reports with date ranges and CSV/Excel export",
          "An activity log for sensitive actions",
        ],
      },
      {
        heading: "The mistake that costs the most",
        para: "Building every possible feature before knowing which screens get used daily. Ship the three screens your team will open every morning, watch how they use them for two weeks, then build the rest. A dashboard is a tool for people with a routine — design it around the routine, not the org chart.",
      },
    ],
  },
];

/* ------------------------------------ misc ----------------------------------- */

export const whyMe = [
  { title: "Clean & maintainable code", body: "Small functions, clear naming, no duplicated controllers. Someone else can pick it up." },
  { title: "Responsive design", body: "Mobile-first layouts checked on real screen sizes, not a single desktop browser." },
  { title: "Fast communication", body: "Updates without chasing, and honest answers when something will take longer." },
  { title: "Custom functionality", body: "Validation, permissions and edge cases built in — not bolted on after a bug report." },
  { title: "Post-launch support", body: "Fixes, content updates and guidance for your team after going live." },
  { title: "You own everything", body: "Code, database, hosting and credentials are handed over. No lock-in, ever." },
];

export const contactProjectTypes = [
  "Business Website",
  "Laravel Application",
  "React.js Project",
  "Admin Dashboard",
  "API Integration",
  "Website Fix / Maintenance",
  "Other",
];

export const contactBudgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Not sure yet — let's discuss",
];

export const contactNotes = [
  "Tell me what the website or app must DO — not just how it should look.",
  "Share 2–3 reference sites you like and one line on why.",
  "Mention your target launch date if you have one.",
  "No attachments needed at this stage; we'll exchange content later.",
];
