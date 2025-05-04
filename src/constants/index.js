import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  cpp,
  linux,
  mysql,
  kubernetes,
  AWS,
  graphql,
  terraform,
  natours,
  cicd,
  devsecops,
  fictiv,
  cc
 
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
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "Devops & Cloud enthusiast",
    icon: mobile,
  },

];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  }
];

const experiences = [
  {
    title: "Devops / cloud intern",
    company_name: "cloud counselage pvt. ltd",
    icon: cc,
    iconBg: "#383E56",
    date: " Jun, 2024  - Aug, 2024 ",
    points: [
      "Integrated SonarQube checks in GitHub Actions across approximately 40 e-commerce repositories.",
      " Configured CI/CD pipelines, to improving code quality, strengthening code security, and preventing vulnerabilities.",
      " Creation and Configuration of Load Balancer on GCP (Google Cloud Platform) to add extra security layer over the application",
      "Deployed application frontend on App Engine using GitHub Actions",
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "fictive technologies pvt ltd",
    icon: fictiv,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Natours",
    description:
      " Developed a tour booking WebApp where users can view tour details, including a Mapbox-integrated map of locations.Implemented Stripe for credit card payments, allowing users to book tours seamlessly. Users can manage their accounts, view booked tours, and more in the profile section.Built the backend using Node.js, Express, MongoDB, and used Pug template engine for the frontend.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/OmkarPatil4141/Natours",
  },
  {
    name: "AWS CI/CD Deployment",
    description:
      "Securely stored and managed code in CodeCommit repositories.Performed code compilation,test execution, and deployment artifact generation to S3 using CodeBuild as part of the build phase. Automated application deployment to EC2 instances by CodeDeploy, adhering to the designated deployment strategy.Used CodePipeline to Serve as the orchestrator for the CI/CD workflow, seamlessly integrating with different stages.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "CICD",
        color: "green-text-gradient",
      },
      {
        name: "Devops",
        color: "pink-text-gradient",
      },
    ],
    image: cicd,
    source_code_link: "https://omkarpatil4141.hashnode.dev/streamlined-aws-cicd-deployment-with-cloudformation",
  },
  {
    name: "Trip Guide",
    description:
      " Implemented a comprehensive DevSecOps CI/CD pipeline for a MERN stack application, integrating SonarQube, OWASP, Trivy,Docker, and Jenkins to ensure code quality, security, and seamless deployment",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devsecops,
    source_code_link: "https://omkarpatil4141.hashnode.dev/automating-docker-deployments-with-devsecops",
  },
  {
    name: "Trip Guide",
    description:
      "Implemented a comprehensive DevSecOps CI/CD pipeline for a MERN stack application, integrating SonarQube, OWASP, Trivy,Docker, and Jenkins to ensure code quality, security, and seamless deployment",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devsecops,
    source_code_link: "https://omkarpatil4141.hashnode.dev/automating-docker-deployments-with-devsecops",
  },
];

export { services, technologies, experiences,  projects };
