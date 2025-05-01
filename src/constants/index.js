import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  postgresql,
  api,
  tailwind,
  nodejs,
  mongodb,
  github,
  docker,
  whoop,
  heb,
  weather,
  employeepayroll,
  travellist,
  threejs,
  heartlanddental,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Web Api",
    icon: api,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Business Assistant",
    company_name: "Heartland Dental",
    icon: heartlanddental,
    iconBg: "#061d41",
    date: "August 2023 - Current",
    points: [
      "Manage front office operations, handling multi-channel communication for smooth patient interactions.",
      "Coordinate with dental staff, ensuring accurate treatment plans and efficient scheduling in Dentrix.",
      "Use Dentrix for insurance tasks, including verification, claims, payments, and account reconciliation.",
      "Explain treatment costs and payment options, ensuring financial clarity for patients.",
    ],
  },
  {
    title: "Healthy Living Lead",
    company_name: "H-E-B",
    icon: heb,
    iconBg: "#ffffff",
    date: "Jan 2021 - Aug 2023",
    points: [
      "Supervise and train staff, setting performance metrics and improving efficiency.",
      "Design engaging displays to enhance customer experience and support health goals.",
      "Analyze sales data to forecast trends and optimize inventory.",
      "Collaborate across departments to improve workflows and drive innovation.",
    ],
  },
  {
    title: "Order Fulfilment",
    company_name: "WHOOP",
    icon: whoop,
    iconBg: "#ffffff",
    date: "Jan 2022 - March 2022",
    points: [
      "Assisted members with orders, returns, account updates, and refunds.",
      "Collaborated in team meetings to improve processes and streamline order approvals.",
      "Communicated with fulfillers to ensure timely and accurate order processing.",
      "Used Zendesk, Shopify, and Salesforce to enhance efficiency and service quality.",
    ],
  },
  {
    title: "Member Service Representative",
    company_name: "WHOOP",
    icon: whoop,
    iconBg: "#ffffff",
    date: "March 2022 - May 2022",
    points: [
      "Promoted to Order Fulfillment in three months by exceeding departmental KPIs.",
      "Used Zendesk and Salesforce to conduct product demos and provide tailored support.",
      "Handled troubleshooting via phone and email, ensuring efficient issue resolution.",
      "Escalated support tickets with detailed insights, earning multiple 5-star reviews.",
    ],
  },
];


const projects = [
  {
    name: "Weather",
    description:
      "A user-friendly weather dashboard designed for seamless exploration of current and upcoming weather forecasts for cities worldwide.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "serversideapis",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ninadri/weather-api",
    live_demo_link: "https://ninadri.github.io/weather-api/",
  },
  {
    name: "Employee Payroll Tracker",
    description:
      "A website designed for payroll managers to efficiently track employee payroll data by entering their names and salaries.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: employeepayroll,
    source_code_link: "https://github.com/ninadri/employee-payroll-tracker",
    live_demo_link: "https://ninadri.github.io/employee-payroll-tracker/",
  },
  {
    name: "Travel List",
    description:
      "A simple and efficient packing list manager designed to help travelers track, organize, and complete their packing with ease.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travellist,
    source_code_link: "https://github.com/ninadri/travel-list",
    live_demo_link: "https://ninadri.github.io/travel-list/",
  },
];

export { services, technologies, experiences, projects };
