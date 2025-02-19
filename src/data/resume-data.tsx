import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aryan Singh",
  initials: "AS",
  location: "Bokaro Steel City, India, IST",
  locationLink: "https://www.google.com/maps/place/Bokaro",
  about:
    "If not learning CV, AI and Embed, then probably backend. ",
  summary: (
    <>
      An engineer with a strong interest in technology, 
      math, and applied sciences. One who genuinely enjoy tackling challenging 
      problems and finding creative solutions, and love getting into research 
      to see what new possibilities are out there. He is always eager to learn 
      and apply his skills to projects that make a real impact.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/90302042?v=4",
  personalWebsiteUrl: "https://aryansingh.dev",
  contact: {
    email: "hello@aryansingh.dev",
    tel: "+918294107355",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/meltedhyperion",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/meltedhyperion/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/meltedhyperion",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2021",
      end: "2025",
      location: "Chennai, India",
    },
  ],
  work: [
    {
      company: "Indian Space Research Organisation",
      link: "https://www.isro.gov.in/",
      badges: ["CV", "DL","FPGA","SLAM", "ROS"],
      title: "Research Intern",
      logo: NSNLogo,
      start: "Aug, 2024",
      end: "Dec, 2024",
      description: (
        <>
        Worked on 3 major projects in the field of robotics, computer vision and AI/ML.
          <ul className="list-inside list-disc">
            <li>
            <b>Satellite Pose Estimation (AI & Deep Learning):</b> Developed a pipeline using HRNet & AHRNet to estimate GSAT-12R&apos;s orientation. Optimized deployment on the Xilinx Versal VCK190 with custom quantization scripts.
            </li>
            <li>
            <b>Autonomous Rover Navigation (SLAM & Path Planning):</b> Implemented RTABMap-based SLAM on Firebird VI with Luxonis OAK-D AI camera. Designed a GUI and conducted mapping experiments.
            </li>
            <li>
            <b>Lidar-Based Satellite Pose Estimation:</b> Analyzed ICP/GICP for satellite pose estimation using Blender datasets. Captured point cloud data with Aeva Lidar and Aevis software.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Mable.ai",
      link: "https://mable.ai",
      badges: ["Remote", "GoLang", "TS","Python", "PostgreSQL", "AWS", "Redis"],
      title: "Backend Developer (Part Time)",
      logo: ConsultlyLogo,
      start: "Oct, 2022",
      end: "Dec, 2023",
      description: (
        <>
          One of the founding devs on a B2B SaaS platform for optimizing marketing data accuracy and ad performance.
          <ul className="list-inside list-disc">
            <li>
            Led multiple backend projects aimed at 30% efficiency imporvements.
            </li>
            <li>
            Migrated microservices from Typescript to Golang.
            </li>
            <li>
            Built cron jobs for routine data caching, archiving and, deduplication.
            </li>
            <li>
            Developed a CI/CD pipeline for automated DB schema migrations.
            </li>
          </ul>
        </>
      ),
    },
    {
     company: "IIT, Roorkee",
      link: "https://www.iitr.ac.in/",
      badges: ["Computer Vision", "Embedded Systems", "C", "RPi", "Python"],
      title: "Research Intern",
      logo: ConsultlyLogo,
      start: "Jun, 2023",
      end: "Jul, 2023",
      description: (
        <>
          SPR Image Sensor Construction & Real-Time Analysis
          <ul className="list-inside list-disc">
            <li>
            Led development of IoT-based SPR image sensor for real-time, precise parameter detection.
            </li>
            <li>
            Automated manual workflows, achieving enhanced performance.
            </li>
            <li>
            Designed a Python-based GUI for sensor calibration and data visualization.
            </li>
          </ul>
        </>
      ) 
    },
    {
      company: "SRMKZILLA",
      link: "https://srmkzilla.net/",
      badges: ["GoLang", "Node.js", "MongoDB", "AWS"],
      title: "Technical Lead",
      logo: MonitoLogo,
      start: "Oct, 2021",
      end: "May, 2024",
      description: (
        <>
          Lead of the Technical Domain at Mozilla&apos;s official campus club at SRM, managing a team of 20+ members.
          <ul className="list-inside list-disc">
            <li>
            Developed and managed scalable services using Golang, MongoDB, Node.js, and Spring Boot.
            </li>
            <li>
            Led open-source projects that are widely used both on and off campus.
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
   "GoLang",
    "Node.js",
    "Java",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "CV",
    "Robotics",
  ],
  projects: [
    {
      title: "Smart Data Injector",
      techStack: ["GoLang", "Python", "MongoDB", "AWS", "kestra.io"],
      description:
        "A data injection pipeline that automates the task of data association between soource and target schema.",
      logo: MonitoLogo,
      link: {
        label: "sdi.aryansingh.dev",
        href: "https://github.com/meltedhyperion/smart-data-injector",
      },
    },
    {
      title: "Satellite Pose Estimation",
      techStack: [
        "Pytorch",
        "Python",
        "AHRNet",
        "PnP RanSac",
        "CUDA"
      ],
      description:
        "An Effective Landmark Regression Using Attention Based-HRNet For Satellite Pose Estimation",
      logo: ConsultlyLogo,
      link: {
        label: "isro.org.in",
        href: "https://drive.google.com/file/d/1Ja5hg57V1hBD2ZCm526zYRDHCtdvwApK/view?usp=sharing",
      },
    },
    {
      title: "Fury",
      techStack: ["GoLang", "Remix", "MongoDB", "AWS"],
      description:
        "A recruitment portal for campus clubs with secure and seamless account creation using college email integration",
      logo: MonitoLogo,
      link: {
        label: "recruitment.srmkzilla.net",
        href: "github.com/meltedhyperion/fury",
      },
    },
    {
      title: "Open Sourcerer",
      techStack: ["Express", "React", "MongoDB"],
      description:
        "A browser extension to simplify exploration of open-source projects on GitHub based on user skills and project community.",
      logo: MonitoLogo,
      link: {
        label: "recruitment.srmkzilla.net",
        href: "github.com/meltedhyperion/fury",
      },
    },
  ],
} as const;
