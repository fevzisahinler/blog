const projectsData = [
  {
    title: 'SysBeacon',
    description: `Developed a monitoring system for servers, IoT devices, and operating systems, collecting metrics like CPU, RAM, and Disk I/O, along with events such as DNS queries and active services using Go agents.
Utilized RabbitMQ for reliable data transmission and FastAPI for managing and processing data flows. Integrated InfluxDB for storage and designed a React.js dashboard to display real-time data, enabling efficient analysis and preventing data loss with a scalable architecture.`,
    imgSrc: '',
    href: '',
    // github: 'https://github.com/pycoder2000/InstantMD',
    tech1: 'Python',
    tech2: 'ReactJS',
    tech3: 'Golang',
  },
  {
    title: 'Web Service Security Vulnerability Detection',
    description: `Conducted a research project to analyze and mitigate vulnerabilities in web services, focusing on threats such as SQL Injection and XSS attacks.
Developed a Python-based framework to experiment with algorithms like Random Forest, K-Nearest Neighbors (KNN), XGBoost, Decision Tree, and DBSCAN, achieving 92% accuracy in identifying anomalous HTTP request patterns.
Applied clustering techniques to categorize suspicious activities, providing insights into improving web security. Published findings to enhance awareness and support proactive defense strategies against emerging threats.`,
    imgSrc: '',
    href: '',
    // github: 'https://github.com/pycoder2000/InstantMD',
    tech1: 'Python',
    tech2:
      'Random Forest\n' +
      'K-Nearest Neighbors (KNN)\n' +
      'XGBoost\n' +
      'Decision Tree\n' +
      'DBSCAN',
    tech3: 'Scikit-learn',
  },
  {
    title: 'Jenkins Dashboard',
    description: `Developed a centralized dashboard to manage and monitor multiple Jenkins instances with a focus on visibility, automation, and control.
Built the backend using Go and the frontend with Next.js and shadcn/ui. Implemented LDAP-based authentication, role management, and audit logging.
Key features include build trend analytics, queue time tracking, agent utilization stats, post-build metadata filtering (via InfluxDB), bulk job controls, cron job viewer, plugin health panel, and a self-service job creation wizard.`,
    imgSrc: '',
    href: '',
    // github: 'https://github.com/pycoder2000/InstantMD',
    tech1: 'Golang',
    tech2: 'NextJS',
  },
]

export default projectsData
