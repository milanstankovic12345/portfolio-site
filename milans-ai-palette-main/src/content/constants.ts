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
    title: "Remote Support Toolkit",
    description: "Comprehensive toolkit for remote IT support with automated diagnostics, remote access capabilities, and knowledge base integration.",
    image: "/placeholder.svg",
    technologies: ["C#", "WPF", "TeamViewer API", "SQLite", "REST APIs"],
    category: "Technical Support",
    icon: Wrench,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  },
  {
    id: 2,
    title: "Automated Network Monitoring System",
    description: "Real-time network monitoring solution with automated alerting and remediation capabilities, reducing downtime by 60%.",
    image: "/placeholder.svg",
    technologies: ["PowerShell", "SNMP", "Grafana", "InfluxDB", "Windows Server"],
    category: "Infrastructure",
    icon: Monitor,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "AI-Powered IT Support Dashboard",
    description: "A comprehensive dashboard that leverages AI to automate IT support ticket routing, predict system issues, and provide intelligent solutions for common problems.",
    image: "/placeholder.svg",
    technologies: ["Power BI", "Python", "Machine Learning", "SQL Server", "Azure"],
    category: "AI & Automation",
    icon: Brain,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Data Visualization Suite",
    description: "Interactive dashboards and reports that transform complex data into actionable insights using Power BI and custom visualizations.",
    image: "/placeholder.svg",
    technologies: ["Power BI", "DAX", "SQL", "Excel", "SharePoint"],
    category: "Data Analytics",
    icon: Database,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  },
  {
    id: 5,
    title: "IT Documentation Generator",
    description: "AI-powered tool that automatically generates comprehensive IT documentation from system configurations and network topologies.",
    image: "/placeholder.svg",
    technologies: ["Python", "OpenAI API", "Markdown", "Git", "Docker"],
    category: "AI & Automation",
    icon: Code,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: "https://doc-generator-demo.com",
    featured: true
  },
  {
    id: 6,
    title: "No-Code Workflow Automation Platform",
    description: "Built using no-code tools to automate repetitive business processes, saving 20+ hours per week across multiple departments.",
    image: "/placeholder.svg",
    technologies: ["Microsoft Power Platform", "SharePoint", "Power Automate", "Teams"],
    category: "Automation",
    icon: Zap,
    githubUrl: "https://github.com/milanstankovic12345",
    liveUrl: null,
    featured: false
  }
] as const;
