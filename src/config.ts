export const siteConfig = {
  name: "Ahmed Shafi",
  title: "Senior Software Engineer",
  description: "Portfolio website of Ahmed",
  accentColor: "#1d4ed8",
  social: {
    email: "ahmedshafi784@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmed-shafi-22634721b/",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/AhmedAK47",
  },
  aboutMe:
    "I’m Ahmed Shafi, a Backend Engineer with expertise in <b>Node.js</b>, <b>Golang</b>, <b>Blockchain</b>, and <b>Microservices Development</b>, along with frontend experience in <b>Angular</b>. I specialize in building scalable, high-performance backend systems using <b>Kafka</b>, <b>RabbitMQ</b>, <b>MQTT</b>, <b>Docker</b>, and <b>Kubernetes</b>, and have worked on end-to-end solutions from frontend <b>Angular</b> to backend.\n\nI’ve developed blockchain applications using <b>Ethers.js</b> and <b>Thirdweb SDK</b>, implementing features like staking and withdrawals, and designed APIs and services with <b>REST</b>, <b>GraphQL</b>, and <b>gRPC</b>. My background includes databases (<b>PostgreSQL</b>, <b>MySQL</b>, <b>Cassandra</b>), CI/CD pipelines (<b>Jenkins</b>, <b>GitHub Actions</b>), cloud platforms (<b>AWS</b>, <b>Railway</b>, <b>Wasabi</b>, <b>Backblaze S3</b>), and monitoring with <b>Prometheus</b>, <b>Grafana</b>, and <b>OpenTelemetry</b>.",
  skills: [
    // Programming Languages
    "JavaScript", "Golang",
    // Frameworks & Libraries
    "Node.js", "Express.js", "NestJs", "Angular", "Go Fiber", "Gorm", "TypeORM", "Prisma", "Knex",
    // Databases
    "PostgreSQL", "MySQL", "Cassandra",
    // Microservices Architecture
    "Docker", "Kubernetes", "MQTT", "Kafka", "RabbitMQ",
    // Blockchain
    "Thirdweb SDK", "Smart Contract Integration", "Halt", "Staking", "Withdrawal Mechanisms",
    // Cloud Platforms
    "AWS", "EC2", "Railway Cloud", "Wasabi", "Backblaze S3",
    // CI/CD
    "Jenkins", "GitHub Actions",
    // Testing & Monitoring
    "Jest", "Allure Reporting", "Prometheus", "Grafana", "Opentelemetry",
    // Other Skills
    "HTTP", "GraphQL", "Elasticsearch", "gRPC", "Proficient in English Communication"
  ],
  projects: [
    {
      name: "Ezlo (IoT-based platform)",
      description:
        "MIOS is an IoT-based platform offering device cameras, sensors, and hubs, serving thousands of active users and private label customers, with millions of records in the database. I have been working here for 3 years as a Senior Backend Engineer (Node.js & Golang). We manage and upgrade over 100+ microservices on Kubernetes, continuously developing new services and improving existing ones.",
      link: "https://www.ezlo.com/",
      skills: ["Node.js","Golang", "Docker", "Kubernetes","Cassandra","Postgresql","Mysql"],
    },
    {
      name: "theprize.io (blockchain-powered platform)",
      description:
        "ThePrize.io (also styled as The Prize) is a blockchain-powered platform offering exciting, transparent competitions and raffles. Participants can enter for a chance to win prizes such as Bitcoin, luxury items, NFTs, and more—all through provably fair, on-chain mechanisms.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Node.js", "Ehters.js", "Solidity", "Smart Contract","Postgresql" ],
    },
    {
      name: "MPOUGADA (LAUNDRY SERVICE)",
      description:
        "MPOUGADA LAUNDRY SERVICE is an app designed to simplify the laundry process by bringing high-quality, on-demand laundry services right to your fingertips",
      link: "https://appadvice.com/app/mpougada-laundry-service/6504739481",
      skills: ["Node.js","Postgresql", "AWS"],
    },
  ],
  experience: [
    {
      company: "eSpark Consulting Group (Remote)",
      title: "Node.js/Golang Developer (Outsourced to Ezlo Innovation)",
      dateRange: "May 2022 - Present",
      bullets: [
        "Developed and maintained backend microservices for IoT platforms (MiOS, EzloPi) using <b>Express.js</b> and <b>Golang Fiber</b>, deployed on <b>Kubernetes</b>.",
        "Integrated <b>Kafka</b> and <b>RabbitMQ</b> for robust microservice communication, and implemented secure device connectivity with <b>MQTT over SSL (MQTTS)</b>.",
        "Containerized services using <b>Docker</b> and managed orchestration through <b>Kubernetes</b>.",
        "Automated testing pipelines with <b>Jest</b> and <b>Allure Reporting</b>; set up service monitoring using <b>Prometheus</b>, <b>Grafana</b>, and <b>OpenTelemetry</b>.",
        "Collaborated in agile sprints with international teams, ensuring timely and high-quality delivery.",
        "Designed and optimized RESTful APIs and database interactions for high-performance applications, integrating <b>MySQL</b> and <b>PostgreSQL</b> for robust backend support."
      ],
    },
    {
      company: "alternatestates (Remote)",
      title: "Node.js & blockchain Engineer",
      dateRange: "Feb 2024 - Nov 2024",
      bullets: [
        "Developed blockchain applications using <b>Node.js</b> and integrated smart contracts via <b>Ethers.js</b> and <b>Thirdweb SDK</b>.",
        "Implemented features such as staking and withdrawals for secure, transparent transactions.",
        "Designed and deployed smart contracts for provably fair, on-chain mechanisms."
      ],
    },
    {
      company: "DigiTrends (Onsite)",
      title: "NestJS/Angular Developer",
      dateRange: "Sep 2021 - May 2022",
      bullets: [
        "Integrated <b>GraphQL</b> and <b>gRPC</b> into server-side microservices for optimized communication.",
        "Implemented advanced search functionality using <b>Elasticsearch</b>.",
        "Utilized <b>TypeORM</b> for efficient database operations.",
        "Collaborated with cross-functional teams to deliver scalable solutions for client projects."
      ],
    },
    {
      company: "Abaadee.com (Onsite)",
      title: "NestJS Developer",
      dateRange: "Jan 2021 - Aug 2021",
      bullets: [
        "Developed and maintained all server-side network components for real estate platforms.",
        "Worked closely with frontend developers to integrate and deliver seamless user experiences.",
        "Optimized backend performance and reliability for high-traffic applications."
      ],
    },
  ],
  education: [
    {
      school: "Sir Syed University of Engineering and Technology, Karachi",
      degree: "Bachelor's Degree in Computer Science",
      dateRange: "2018 - 2022",
      achievements: [
        "Graduated with strong academic record",
        "Active participant in university tech events and coding competitions",
        "Developed multiple portfolio projects during studies"
      ],
    }
  ],
};
