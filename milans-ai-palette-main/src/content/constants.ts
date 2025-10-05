import { Monitor, Brain, Wrench, Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Code, Database, Zap } from "lucide-react";

export const HERO_CONTENT = {
  name: "Milan Stankovic",
  title: "IT Support Specialist & AI Enthusiast",
  description: "Passionate about AI, vibe coding, no-code, digital transformation and bringing data into insights with Power Platform.",
  email: "millan.stankovic12345@gmail.com",
  github: "https://github.com/milanstankovic12345",
  linkedin: "https://www.linkedin.com/in/milan-stankovic-76851a257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJeade806T5Gq5QJxc7%2BzGA%3D%3D"
} as const;

export const ABOUT_HIGHLIGHTS = [
  {
    icon: Monitor,
    title: "IT Support Excellence",
    description: "Experienced in troubleshooting, system administration, and providing technical solutions across diverse environments."
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Utilizing various AI models and LLMs to optimize workflows, automate repetitive processes, and create intelligent solutions for complex business challenges."
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description: "Combining technical expertise with analytical thinking to solve complex challenges and optimize workflows."
  }
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Technical Support",
    skills: ["Windows Administration", "Network Troubleshooting", "Hardware Diagnostics", "System Optimization", "User Training", "Remote Support"]
  },
  {
    title: "AI & Automation",
    skills: ["AI/LLM Integration", "Process Automation", "Workflow Optimization", "Vibe Coding", "No-Code Solutions", "Intelligent Systems"]
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "Data Analysis", "Dashboard Creation", "Report Automation"]
  },
  {
    title: "Technologies",
    skills: ["Microsoft 365", "PowerShell", "No-Code Platforms", "API Integration", "Cloud Services", "Database Management"]
  }
] as const;

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "millan.stankovic12345@gmail.com",
    href: "mailto:millan.stankovic12345@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for Remote Work",
    href: null
  }
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/milanstankovic12345"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/milan-stankovic-76851a257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJeade806T5Gq5QJxc7%2BzGA%3D%3D"
  }
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "IT Inventory Application",
    description: "An IT Inventory Application is a tool that helps organizations efficiently track, manage, and monitor their hardware, software, and digital assets in real time.",
    image: "/placeholder.svg",
    technologies: ["SharePoint", "Power Apps", "Power Automate", "Power Page", ],
    category: "Power Platform",
    icon: Wrench,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  },
  {
    id: 2,
    title: "BotForge AI",
    description: "Build intelligent chatbots that understand your business, engage your customers, and automate your support with cutting-edge AI technology.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "AI", "Python", "LLM", "Machine Learning"],
    category: "AI & Automation",
    icon: Monitor,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "Power BI VisionWall",
    description: "A sleek, network-driven display solution that brings your Power BI dashboards to life—streamlining data visibility across internal commercial screens for a dynamic, connected workspace.",
    image: "/placeholder.svg",
    technologies: ["Power BI", "C#", "SQL Server", "Azure"],
    category: "Data Visualization",
    icon: Brain,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Data Visualization Suite",
    description: "Real-Time dashboards and reports that transform production data into actionable insights using Power BI.",
    image: "/placeholder.svg",
    technologies: ["Power BI", "DAX", "Fabric", "SQL Server"],
    category: "Data Analytics",
    icon: Database,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  },
  {
    id: 5,
    title: "GreenOps AI",
    description: "AI-powered solution for energy consumption monitoring and optimization. Project is demo for hackathon.",
    image: "/placeholder.svg",
    technologies: ["Machine Learning", "Power Bi", "Power Automate", "Python", "SQL Server"],
    category: "AI & Automation",
    icon: Code,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: true
  },
  {
    id: 6,
    title: "Tv refresh app",
    description: "An intelligent display app that automatically launches and refreshes web apps on internal commercial screens—keeping your dashboards, announcements, and live data always up to date.",
    image: "/placeholder.svg",
    technologies: ["C#", "Android", "Web View", "Xamarin"],
    category: "Automation",
    icon: Zap,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  }
] as const;
