// Placeholder images for projects
const zenSurfLogo =
  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400";
const g8ClothingImage =
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800";

export const projects = [
  {
    id: "plantid",
    title: "PlantID",
    description:
      "An AI-powered plant identification and diagnostic application",
    image:
      "https://images.unsplash.com/photo-1736990629369-2096ed7299af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcGxhbnRzJTIwaW5kb29yJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MjE0MjY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["FastAPI", "Next.js", "TypeScript", "Supabase", "Together.ai"],
    fullDescription:
      "An AI-powered plant identification and diagnostic application featuring an advanced, interactive diagnostic system with hexagonal architecture for clean separation of concerns.",
    challenge:
      "Plant owners needed an accessible way to identify plants, understand care requirements, and diagnose health problems through an intelligent conversation system that could handle complex diagnostic workflows.",
    solution:
      "Built a hexagonal architecture frontend with Next.js, TypeScript, and Tailwind CSS using ShadCN UI components. Implemented an AI-driven Diagnostic Kernel with cyclical execution for multi-turn diagnostic conversations. Integrated Together.ai for LLM capabilities and Plant.id API for plant identification. Created secure authentication with Supabase and PostgreSQL for data persistence. Implemented Zustand for state management and Zod for validation schemas. Deployed on Heroku with environment-specific CORS configuration.",
    results: [
      "Advanced diagnostic kernel with cyclical AI execution",
      "Hexagonal architecture with clean separation of concerns",
      "Seamless plant identification via image upload",
      "Secure user authentication and plant collection management",
    ],
    technologies: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Supabase",
      "PostgreSQL",
      "Together.ai",
      "Plant.id API",
      "Zustand",
      "Zod",
      "Heroku",
    ],
    github: "https://github.com/Lucy-Bernard/plantId",
  },
  {
    id: "g8",
    title: "G8 E-Commerce",
    description: "A full-stack e-commerce platform with MVC architecture",
    image: g8ClothingImage,
    tags: ["C#", ".NET 7.0", "React", "Next.js", "Azure", "SQL Server"],
    fullDescription:
      "A comprehensive e-commerce web application built with MVC architecture, featuring cart functionality, user authentication, checkout system, and search capabilities with SQL injection protection.",
    challenge:
      "Building a secure, scalable e-commerce platform that prevents SQL injection attacks while providing seamless cart management, checkout functionality, and search features with efficient database queries.",
    solution:
      "Developed using Model-View-Controller architecture with .NET 7.0 backend and React/Next.js frontend. Implemented secure login with JWT and SQL injection protection using parameterized queries. Built cart functionality with state management tracking cart items and quantities. Created checkout system with card validation using regular expressions. Used Azure Data Studio and Docker for SQL Server environment simulation. Integrated REST API endpoints for products, cart management, and user authentication. Frontend tested with Jest library for component validation.",
    results: [
      "Secure authentication with SQL injection prevention",
      "Efficient cart management with real-time updates",
      "Responsive UI with seamless state management",
      "RESTful API with proper data conversion (JSON ↔ Objects)",
    ],
    technologies: [
      "C#",
      ".NET 7.0",
      "React",
      "Next.js",
      "SQL Server",
      "Azure Data Studio",
      "Docker",
      "REST API",
      "JWT",
      "Jest",
      "Postman",
    ],
    github: "https://github.com/Lucy-Bernard/G8",
  },
  {
    id: "farmart",
    title: "FarMarT Sales System",
    description:
      "A database-backed sales management system for farm equipment business",
    image: "src/assets/farm.png",
    tags: ["Java", "MySQL", "SQL", "JDBC", "JSON", "OOP"],
    fullDescription:
      "A comprehensive sales management subsystem for FarMarT, a regional farm equipment business, featuring database-backed tracking, custom data structures, and automated report generation with complex tax calculations.",
    challenge:
      "Modernizing a legacy farm equipment sales system to efficiently track sales across multiple stores, handle complex tax calculations for different product types, generate detailed reports, and maintain data integrity while ensuring scalability.",
    solution:
      "Developed a 6-phase system following OOP and RDBMS principles. Phase 1: Built CSV to JSON data conversion using Gson library for platform-independent data exchange. Phase 2: Designed Java classes for sales report generation (all sales, store summaries, individual invoices). Phase 3: Created a MySQL database with ER diagrams following 3NF for data integrity. Phase 4-5: Implemented JDBC integration replacing flat files with database persistence, using factory methods for object retrieval and SQL queries. Phase 6: Designed custom generic linked list data structure for invoice sorting by customer name, value, or store. Implemented comprehensive tax logic (7.15% sales tax for products, 3.45% service tax, tiered equipment lease tax). Created API with SQL exception handling, data validation, and null value management.",
    results: [
      "Efficient data management replacing legacy flat files",
      "Custom linked list implementation for flexible invoice sorting",
      "Automated report generation for business analytics",
      "3NF database design ensuring data integrity and flexibility",
    ],
    technologies: [
      "Java",
      "MySQL",
      "SQL",
      "JDBC",
      "JSON",
      "Gson",
      "CSV Parsing",
      "Data Structures",
      "RDBMS",
      "ER Diagrams",
    ],
    github: "https://github.com/Lucy-Bernard/Farmart",
  },
  {
    id: "zensurf",
    title: "ZenSurf",
    description:
      "A Chrome extension for stress relief with meditation and ambient sounds",
    image: "src/assets/ocean.png",
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    fullDescription:
      "A Chrome extension designed for stress relief, featuring meditation timers and ambient sounds with an intuitive, user-friendly interface.",
    challenge:
      "Users needed a simple, accessible way to take meditation breaks during their workday without leaving their browser.",
    solution:
      "Designed and developed a Chrome extension for stress relief featuring meditation timers and ambient sounds. Implemented a user interface with focus on intuitive interaction design. Applied UI/UX principles, async JavaScript for API integration, animations, and typography. Leveraged Chrome extension API, ensuring efficient writing of vanilla JavaScript for smooth animations and timer functionality.",
    results: [
      "Intuitive user interface with smooth animations",
      "Seamless browser integration",
      "Efficient timer functionality with ambient sound support",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    github: "https://github.com/Lucy-Bernard/ZenSurf",
  },
];
