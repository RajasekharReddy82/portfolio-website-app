export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  duration: string;
  role: string;
  techStack: string[];
  problem: string;
  description: string;
  approach: string;
  architecture?: string;
  challenges: string[];
  results: string[];
  learnings: string[];
  highlights?: string[];
  liveUrl?: string;
  featured?: boolean;
  isPersonal?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  verificationUrl: string;
  skills: string[];
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certificates: Certificate[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "D. Rajasekhar Reddy",
    role: "Technical Lead | React + TypeScript (6.5+ years)",
    location: "Hyderabad, India",
    email: "rajasekharreddy761@gmail.com",
    phone: "+91-8297971563",
    linkedin: "https://linkedin.com/in/rajasekhar-reddy-dugganapalli-513452227",
    summary: [
      "6.5+ years of experience building scalable web applications with React.js (V19.1) and TypeScript",
      "Proficient in HTML, CSS, JavaScript, React.js, React Hooks, Functional Components, Redux, Redux-Saga, TypeScript and Tailwind CSS",
      "Demonstrated expertise in designing responsive web applications with best performance practices",
      "Skilled in implementing and optimizing web accessibility standards",
      "Experience with testing frameworks such as Cypress, Jest and React Testing Library",
      "Proficient in implementing best performance practices like lazy loading, code splitting, and optimizing asset loading",
      "Adept at reducing initial load time using techniques such as tree shaking and dynamic imports",
      "Demonstrated ability to mentor junior developers and conduct code reviews to maintain code quality",
      "Strong background in Agile methodologies, ensuring efficient and timely project delivery",
      "Experienced in version control with Git, Azure DevOps and Bitbucket",
    ],
  },
  experience: [
    {
      id: "evoke-tech-lead",
      company: "Evoke Technologies Pvt Ltd",
      role: "Technical Lead",
      duration: "Mar 2022 – Present",
      location: "Hyderabad, India",
      description:
        "Leading frontend development initiatives, mentoring team members, conducting code reviews, and driving technical excellence across multiple enterprise projects.",
    },
    {
      id: "getongrey-senior",
      company: "GetOnGrey Pvt Ltd",
      role: "Senior Software Analyst",
      duration: "Oct 2019 – Mar 2022",
      location: "Hyderabad, India",
      description:
        "Developed and maintained React applications with focus on performance, user experience, and responsive design.",
    },
  ],
  projects: [
    {
      id: "csc-dbs-domainsec",
      title: "CSC DBS – DomainSec",
      slug: "csc-dbs-domainsec",
      client: "CSC Global",
      duration: "Apr 2024 – Present",
      role: "Frontend Developer",
      techStack: [
        "React",
        "TypeScript",
        "Redux",
        "Redux-Saga",
        "AmCharts 5",
        "Cypress",
        "React-Bootstrap",
        "Axios",
        "Azure DevOps",
        "Bitbucket",
      ],
      description:
        "Domain Security is a dashboard provided to customers who have registered domains with CSC. It offers a visual representation of CSC's security features. Using AmCharts 5, the data is displayed in pictorial charts, allowing users to check statistics such as new registrations, dropped registrations, re-registrations, domain security, brand protection, anti-fraud measures, and more.",
      problem:
        "Legacy application required modernization with improved performance, better data visualization, and enhanced accessibility. The existing table component (react-bootstrap-table-next) was no longer maintained and caused compatibility issues.",
      approach:
        "Developed dynamic dashboards with interactive data visualizations using AmCharts 5. Successfully migrated the application from Create React App (react-scripts) to Vite, significantly improving build speed and developer experience. Led the migration from react-bootstrap-table-next to KendoReact Grid, creating a reusable common table component.",
      architecture:
        "Redux-Saga for state management, AmCharts 5 for data visualization, KendoReact Grid for table operations, Azure DevOps for CI/CD pipeline, and Azure Application Insights for monitoring.",
      challenges: [
        "Successfully migrated from CRA to Vite with zero regressions",
        "Upgraded all project dependencies to latest stable versions with zero regressions",
        "Removed deprecated react-bootstrap-table-next and migrated to licensed KendoReact Grid",
        "Performance optimization using memoization and lazy loading",
      ],
      results: [
        "Received strong appreciation and positive feedback from the client for delivering smooth, error-free migration ahead of expectations",
        "Improved consistency, scalability, accessibility, and performance by standardizing table behavior",
        "Enhanced application performance through component memoization and lazy loading",
        "Full CI/CD pipeline with Azure DevOps and monitoring via Application Insights",
      ],
      learnings: [
        "Deep understanding of build tooling differences between CRA and Vite",
        "Advanced state management patterns with Redux-Saga",
        "Accessibility-first component design principles",
        "Performance optimization techniques for data-heavy applications",
      ],
      highlights: [
        "CRA → Vite migration with zero regressions",
        "All dependencies upgraded to latest stable versions",
        "react-bootstrap-table-next → KendoReact Grid migration",
        "Reusable common table component with sorting, pagination, selection, and styling",
      ],
      featured: true,
    },
    {
      id: "kaebox",
      title: "KAEBOX",
      slug: "kaebox",
      client: "Kaebox",
      duration: "Jul 2024 – Jun 2025",
      role: "Frontend Developer",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Google Maps API",
        "Google Console APIs",
        "Azure",
        "Axios",
        "Bitbucket",
      ],
      description:
        "Kaebox is an app-based platform that connects users with couriers from ride-sharing drivers, offering fast and flexible local delivery services. Partnering with major carriers like UPS, FedEx, and DHL, Kaebox facilitates on-demand pickups and deliveries for packages and documents, providing couriers with multiple transport modes for eco-friendly deliveries.",
      problem:
        "Required real-time location tracking and mapping capabilities with high performance and responsive design for a delivery platform.",
      approach:
        "Analyzed and implemented business and technical requirements. Developed responsive, high-performance web applications leveraging React Hooks and advanced optimization techniques. Integrated Google Maps API for real-time tracking and location-based services.",
      challenges: [
        "Real-time location updates without performance degradation",
        "Optimizing map rendering for multiple markers",
        "Ensuring responsive design on mobile devices",
        "Integration with Google Maps and Google Console APIs",
      ],
      results: [
        "Real-time tracking with sub-second update latency",
        "Optimized map performance with efficient marker rendering",
        "Fully responsive design across all device sizes",
        "Seamless integration with Google Maps for location-based services",
      ],
      learnings: [
        "Google Maps API integration and optimization",
        "Real-time data handling patterns",
        "Performance optimization for map-based applications",
        "TypeScript for type safety and maintainability",
      ],
      featured: true,
    },
    {
      id: "client-admin",
      title: "Client Administration Application",
      slug: "client-administration-application",
      client: "Medical Solutions",
      duration: "Dec 2022 – Apr 2024",
      role: "Frontend Developer",
      techStack: [
        "React",
        "TypeScript",
        "Context API",
        "Reactstrap",
        "TanStack Query",
        "TanStack Table",
        "Azure",
      ],
      description:
        "The Client Administration Application for Medical Solutions facilitates seamless interaction between clients and traveling nurses/staff, ensuring a perfect fit for clinical, community, and cultural needs. This application empowers Client Admins with access to the Client Portal Travel Application, enabling them to manage user profiles efficiently.",
      problem:
        "Needed secure API integration with proper CORS handling and comprehensive monitoring capabilities for healthcare staffing management.",
      approach:
        "Developed robust features to support Medical Solutions' staffing requirements, focusing on Hospital Maintenance and User Management functionalities. Applied optimizations across components to improve load time and runtime efficiency. Implemented secure API communication using Azure API Management and CORS policies.",
      challenges: [
        "Secure API communication with proper CORS handling",
        "Managing complex data relationships with TanStack Query",
        "Implementing comprehensive error handling and monitoring",
        "Performance optimization for improved user experience",
      ],
      results: [
        "Secure API integration via Azure API Management with proper CORS",
        "Efficient data fetching and caching with TanStack Query",
        "Comprehensive monitoring via Azure Application Insights",
        "Led daily stand-ups and sprints, ensuring timely delivery",
      ],
      learnings: [
        "Azure API Management configuration and security best practices",
        "Advanced TanStack Query patterns",
        "Monitoring and observability in production applications",
        "Healthcare domain-specific requirements",
      ],
      featured: true,
    },
    {
      id: "client-portal-travel",
      title: "Client Portal Travel",
      slug: "client-portal-travel",
      client: "Medical Solutions",
      duration: "Dec 2021 – Apr 2024",
      role: "Frontend Developer",
      techStack: [
        "React",
        "TypeScript",
        "Context API",
        "SignalR",
        "Reactstrap",
        "TanStack Query",
        "TanStack Table",
        "Azure",
      ],
      description:
        "The Client Portal Travel project at Medical Solutions streamlines the process for clients to find suitable traveling nurses and staff. With features like Dashboard, User Maintenance, Job Posting, and Candidate Management, it offers a comprehensive solution for healthcare staffing needs.",
      problem:
        "Required real-time updates for travel-related data with efficient data management and advanced table operations for healthcare staffing.",
      approach:
        "Developed and implemented critical features such as Dashboard, Job Posting, and Candidate Management. Implemented real-time updates using SignalR, managed data with TanStack Query, and provided advanced table functionality with TanStack Table. Secure API communication using Azure API Management and CORS policies.",
      challenges: [
        "Real-time data synchronization across multiple clients using SignalR",
        "Managing complex state with real-time updates",
        "Optimizing table performance with large datasets",
        "Secure API communication via Azure API Management",
      ],
      results: [
        "Real-time updates with SignalR integration",
        "Efficient data management with TanStack Query",
        "Advanced table operations with TanStack Table",
        "Comprehensive monitoring via Azure Application Insights",
      ],
      learnings: [
        "SignalR integration for real-time applications",
        "State management with real-time data streams",
        "Advanced table component patterns",
        "Agile methodologies for project delivery",
      ],
      featured: false,
    },
    {
      id: "cms-conditional-monitoring",
      title: "CMS – Conditional Monitoring System",
      slug: "cms-conditional-monitoring-system",
      client: "UGL",
      duration: "Oct 2020 – Dec 2021",
      role: "Frontend Developer",
      techStack: ["React", "TypeScript", "Redux", "Redux-Saga", "Fluent UI", "SignalR"],
      description:
        "The CMS project for UGL is a vital system for monitoring train conditions in the South Wales region of Australia. It empowers Help Desk staff with real-time and historical data insights, facilitating informed decision-making regarding train maintenance and operations.",
      problem:
        "Required real-time monitoring system for train conditions in Australia with high reliability and performance for Help Desk staff.",
      approach:
        "Implemented real-time monitoring features, including AEE Monitor and Condition Report, to support informed decision-making for train maintenance. Enhanced application stability and performance with techniques such as caching and efficient state management using Redux and Redux-Saga.",
      challenges: [
        "Real-time monitoring with high reliability requirements",
        "Handling large volumes of real-time data via SignalR",
        "Ensuring system performance under load",
        "Efficient state management using Redux-Saga",
      ],
      results: [
        "Real-time monitoring system for train conditions in Australia",
        "High reliability and performance under load",
        "Consistent UI with Fluent UI components",
        "Partnered with stakeholders using Agile processes",
      ],
      learnings: [
        "Real-time monitoring system architecture",
        "Performance optimization for high-frequency updates",
        "Fluent UI component library usage",
        "Caching strategies for performance",
      ],
      featured: false,
    },
    {
      id: "sleep-country",
      title: "Sleep Country",
      slug: "sleep-country",
      client: "Sleep Country",
      duration: "Oct 2019 – Sep 2020",
      role: "Frontend Developer",
      techStack: ["React", "TypeScript", "Redux", "Redux-Saga"],
      description:
        "Sleep Country, a leading mattress retailer, entrusted us with the development of its web application. Contributed to implementing critical features like the Products Listing Page and Product Details Page, enhancing the online shopping experience for customers.",
      problem:
        "E-commerce platform required optimized PLP (Product Listing Page) and PDP (Product Detail Page) with focus on performance and responsiveness.",
      approach:
        "Developed critical components for Sleep Country's online store, including Product Listing and Product Details Pages, optimizing for performance and responsiveness. Ensured the application delivered a visually appealing, responsive, and easy-to-navigate interface.",
      challenges: [
        "Optimizing page load times for e-commerce pages",
        "Ensuring responsive design across all devices",
        "Managing complex product data and filtering",
        "Creating visually appealing shopping experience",
      ],
      results: [
        "Optimized PLP and PDP with improved performance",
        "Fully responsive design across all devices",
        "Efficient state management with Redux-Saga",
        "Enhanced online shopping experience for customers",
      ],
      learnings: [
        "E-commerce performance optimization",
        "Responsive design best practices",
        "Complex state management patterns",
        "Agile frameworks for project management",
      ],
      featured: false,
    },
    {
      id: "ascent-events",
      title: "Ascent Events",
      slug: "ascent-events",
      client: "Personal Project",
      duration: "2024",
      role: "Frontend Developer",
      isPersonal: true,
      techStack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
        "React Hook Form",
        "Zod",
        "EmailJS",
        "Embla Carousel",
      ],
      description:
        "Ascent Events is New York & New Jersey's premier event decor company. Built a premium, modern website showcasing their event planning and decoration services with stunning visuals, smooth animations, and seamless user experience.",
      problem:
        "The client needed a professional, visually stunning website to showcase their premium event decoration services and convert visitors into customers.",
      approach:
        "Developed a modern, responsive website with premium UI/UX using React and TypeScript. Implemented smooth animations with Framer Motion, accessible UI components with Radix UI, and a robust contact form with React Hook Form and Zod validation. Integrated EmailJS for direct email functionality.",
      challenges: [
        "Creating a premium, elegant design that reflects the brand",
        "Implementing smooth, performant animations throughout the site",
        "Building accessible and reusable UI components",
        "Optimizing image loading for gallery sections",
      ],
      results: [
        "Delivered a stunning, premium website that elevates the brand",
        "Smooth animations and micro-interactions using Framer Motion",
        "Fully responsive design optimized for all devices",
        "Integrated contact form with email functionality via EmailJS",
      ],
      learnings: [
        "Advanced Framer Motion animation techniques",
        "Radix UI for accessible, headless components",
        "Form validation patterns with React Hook Form and Zod",
        "EmailJS integration for serverless email functionality",
      ],
      highlights: [
        "Premium glassmorphism UI design",
        "Elegant hero section with parallax effects",
        "Embla Carousel for smooth image galleries",
        "WhatsApp integration for instant customer contact",
      ],
      liveUrl: "https://www.ascenteventsny.org/",
      featured: true,
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      slug: "portfolio-website",
      client: "Personal Project",
      duration: "2024 – Present",
      role: "Frontend Developer",
      techStack: [
        "Next.js 14",
        "TypeScript",
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React",
        "App Router",
      ],
      description:
        "A premium, animation-rich portfolio website showcasing my work, skills, and experience. Built with Next.js 14 App Router, featuring a glassmorphism design system, smooth animations, and full accessibility support.",
      problem:
        "Needed a modern, premium portfolio website to showcase my professional work, skills, and experience with a focus on performance, accessibility, and visual appeal.",
      approach:
        "Developed a fully responsive portfolio using Next.js 14 with App Router for optimal performance. Implemented a glassmorphism design system with gradient mesh backgrounds, smooth page transitions with Framer Motion, and comprehensive accessibility features. Centralized all content in a single data file for easy maintenance.",
      challenges: [
        "Creating a premium design system with glassmorphism effects",
        "Implementing smooth animations without performance degradation",
        "Ensuring full accessibility compliance (WCAG)",
        "Optimizing for Lighthouse scores (90+)",
        "Building reusable components with consistent styling",
      ],
      results: [
        "Premium glassmorphism + gradient mesh design system",
        "Smooth micro-interactions and page transitions",
        "Fully accessible with keyboard navigation and ARIA labels",
        "High performance with optimized animations",
        "SEO-ready with sitemap and meta tags",
        "Fully responsive across all device sizes",
      ],
      learnings: [
        "Next.js 14 App Router architecture and best practices",
        "Advanced Framer Motion animation patterns",
        "Accessibility-first development approach",
        "Performance optimization techniques",
        "Design system implementation with Tailwind CSS",
      ],
      highlights: [
        "Glassmorphism design with backdrop blur effects",
        "Custom cursor with magnetic interactions",
        "Scroll progress indicator",
        "Animated gradient backgrounds",
        "Dynamic project filtering and search",
        "Resume download functionality",
      ],
      featured: true,
      isPersonal: true,
    },
  ],
  skills: [
    {
      category: "UI Technologies",
      items: ["HTML5", "CSS3", "SASS", "Styled Components", "Tailwind CSS", "Bootstrap", "Reactstrap"],
    },
    {
      category: "JavaScript/TypeScript",
      items: ["ES6+", "TypeScript", "React Hooks", "Functional Components"],
    },
    {
      category: "Frameworks",
      items: ["React.js", "Next.js"],
    },
    {
      category: "State Management & Data Fetching",
      items: ["Redux", "Redux-Saga", "Redux Toolkit", "RTK Query", "TanStack Query", "TanStack Table"],
    },
    {
      category: "Testing",
      items: ["Cypress", "Jest", "React Testing Library"],
    },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "Azure DevOps", "AWS", "Bitbucket", "Jira", "VersionOne"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "KSRM College of Engineering",
      year: "May 2019",
      grade: "CGPA: 7.56",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      year: "March 2015",
      grade: "87%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "BVM High School",
      year: "March 2013",
      grade: "CGPA: 9.7",
    },
  ],
  certificates: [
    {
      id: "meta-frontend-specialization",
      title: "Meta Front-End Developer",
      issuer: "Meta",
      issueDate: "March 2024",
      verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/WFK2SPE9RN4J",
      skills: [
        "React.js",
        "JavaScript",
        "HTML & CSS",
        "User Interface Design",
        "User Experience Design",
        "Responsive Web Design",
        "Git",
        "Web Accessibility",
        "Semantic Web",
        "Data Validation",
        "Software Technical Review",
      ],
      description: "Professional specialization certificate covering comprehensive front-end development skills including React, UI/UX design, responsive web development, and accessibility standards.",
    },
    {
      id: "frontend-capstone",
      title: "Front-End Developer Capstone",
      issuer: "Meta",
      issueDate: "March 10, 2024",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/M2JZQ2JTQA9R",
      skills: [
        "React Components",
        "Responsive UI Design",
        "Clean Code Practices",
        "Bug-Free Coding",
        "JavaScript",
        "React JS",
      ],
      description: "Capstone project demonstrating ability to design and style responsive user interfaces, create React components for multiple views, and build production-ready front-end applications.",
    },
  ],
};
