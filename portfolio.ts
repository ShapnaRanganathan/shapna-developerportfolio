import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Shapna Ranganathan',
  title: "Hi all, I'm Shapna ",
  description:
    "I'm a dedicated beginner web developer with a strong passion for creating web applications and eager to contribute my skills to your team.",
  resumeLink:
    'https://drive.google.com/file/d/1PxvqfoMYOPErr6X6VsW7NYvVewEe7GLp/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'ShapnaRanganathan',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/ShapnaRanganathan',
  linkedin: 'https://www.linkedin.com/in/shapna-ranganathan-226693264/',
  github: 'https://github.com/ShapnaRanganathan',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Oxford English Medium High School - Karnataka',
    subHeader: 'S.S.L.C',
    duration: 'July 2016 - April 2017',
    desc: 'My school days were a journey of growth and learning.',
    grade: 'Grade A',
    descBullets: [
      'During my school days, I thrived in academics, consistently earning top grades',
      'I also actively participated in extracurricular activities, cultivating a well-rounded skill set.',
    ],
  },
  {
    schoolName: 'Dr. M.G.R Polytechnic College',
    subHeader: 'Diploma in  Electronics and Communication Engineering - Arani',
    duration: 'July 2017 - April 2019',
    desc: 'Acquired comprehensive knowledge of electronics principles, circuits, and communication systems.',
    grade: 'Grade A',
    descBullets: [
      'Gained hands-on experiences in designing and troubleshooting electronic circuits',
      'Developed proficiency in programming microcontrollers and implementing communication protocols.',
    ],
  },
  {
    schoolName: 'Arunai Engineering College',
    subHeader: 'Bachelor of Electronics and Communication Engineering ',
    duration: 'July 2019 - April 2023',
    desc: 'Developed a solid foundation in electronics principles, circuit design, and communication systems through rigorous coursework.',
    grade: 'Grade A',
    descBullets: [
      'Pursued a Bachelor of Electronics and Communication Engineering while concurrently developing skills in web development',
      'Collaborated on various projects, enhancing teamwork, problem-solving, and project management abilities while applying theoretical knowledge to real-world applications',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Quizaro',
    companyLogo: 'https://quizaro.in/static/media/bitmap.5e0e39ae60e5b0288caa61eca1d4fcf2.svg',
    date: 'Auguest 2023 – September 2023',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using  HTML, CSS, JS, Boostrap.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Designer portfolio Website',
    desc: 'Software Developer Portfolio Template built with a Basic HTML concept.',
    github: '#',
    link: '#',
  },
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: '#',
    link: '#',
  },
];

export const feedbacks: FeedbackType[] = [

  {
    name: 'Ajith Kumar Muruga @ Scientist Engineer @complyance.io ',
    feedback:
      'Shapna Ranganathan consistently demonstrates exceptional performance and a strong profile, showcasing a dynamic and versatile skill set in both technical and interpersonal domains.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Shapna R',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Shapna Ranganathan',
  image: 'https://avatars.githubusercontent.com/u/132329258?v=4',
  url: '#',
  keywords: [
    'shapna',
  ],
};
