import { FaLightbulb, FaPaintBrush, FaCode, FaReact,  FaTools, FaNodeJs ,FaDatabase , FaStripe,FaVuejs, FaFire, FaCloud ,} from 'react-icons/fa';
import { RiJavascriptFill , RiReactjsLine , RiTailwindCssFill} from "react-icons/ri"
import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaComments, FaUsers } from 'react-icons/fa';


import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import myPhoto from '../assets/myPhoto.png'
import portfolio from '../assets/portfolio.jpeg'
import homeDecoret from '../assets/homeDecorateProject.jpg'
import noteBook from '../assets/noteBook.jpg'
import recipeBook from '../assets/recipeBookApp.png'

export const assets = {
    myPhoto , portfolio,
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'JavaScript',
    icon: RiJavascriptFill,
    description: 'A programming language used to create interactive and dynamic web content.',
    tags: ['React', 'JavaScript', 'HTML', '']
  },
  {
    title: 'HTML',
    icon: IoLogoHtml5,
    description: 'The standard markup language to structure content on the web.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'CSS',
    icon: SiCss3 ,
    description: 'Stylesheet language used to design and visually enhance web pages.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'React.JS',
    icon: RiReactjsLine,
    description: 'A JavaScript library for building modern, reusable, and interactive UI components.'
    
  },
  {
    title: 'TailwindCSS',
    icon:RiTailwindCssFill,
    description: 'A utility-first CSS framework for rapid and responsive UI design.'
  },
  {
    title: 'DOM Manipulation',
    icon: FaTools,
    description: 'Document Object Model that allows JavaScript to access and manipulate HTML elements dynamically.'
    
  }
];


export const softSkills = [
  {
    title: "Communication",
    icon: FaComments,
    description: "Ability to clearly express ideas and effectively convey information to others."
  },
  {
    title: "Teamwork",
    icon: FaUsers,
    description: "Collaborating well with others to achieve common goals in a productive way."
  },
  {
    title: "Problem Solving",
    icon: FaLightbulb,
    description: "Analyzing challenges and finding efficient, creative solutions."
  }
];


export const projects = [
   {
    title: "Note Book",
    description: "Keep all your notes organized in one place with Notebook.Add, edit, and manage your notes easily anytime, anywhere.Stay productive and never miss important ideas or tasks.",
    image: noteBook,
    tech: ["HTML , CSS, JavaScript and Local Storage"],
    demo: "https://rinki1234567.github.io/My-Note-Book/",
   
  },
  {
    title: "Home Decoration Product project",
    description: "Discover stylish home décor products that add elegance and comfort to every corner of your home.Find everything you need to personalize and enhance your living space effortlessly..",
    image: homeDecoret,
    tech: ["HTML , CSS , Responsive with MediaQuary"],
    demo: "https://rinki1234567.github.io/Home-Decorate/",
    
  },
  
  {
    title: "RecipeBox",
    description: "RecipeBox lets you create your own recipe cards by adding names, ingredients, and instructions.Each card is fully customizable by you.Keep all your favorite recipes organized in one place and easily accessible.                                      ",
    image: recipeBook,
    tech: [" React.JS, TailwindCSS "],
    demo: "https://recipe-book-six-beta.vercel.app/",
    
  }
];

export const educations = [
  {
    degree: "Software Programming Computer Diploma",
    institution: "Navgurukul",
    location: "Bangalore, Karnataka, India",
    duration: "July 2024 - Current",
    description: "Currently pursuing a diploma focused on practical software programming skills."
   
  },
  {
    degree: "Bachelor of Science (BSc.)",
    institution: "Jiwaji University of Gwalior",
    location: "Madhya Pradesh, India",
    duration: "March 2019 - 2022"
  },
  {
   degree: "Food Service Coordinator",
    institution: "NavGurukul",
    location: "Bangalore, Karnataka, India",
    duration: "October 2024 - February 2025",
    description: [
      "Managed food operations for 70 students, ensuring timely meals, quality, and hygiene standards.",
      "Coordinated orders and maintained records, gaining strong organizational skills.",
      "Led a team to deliver meals on time, developing teamwork, leadership, problem-solving, and time management skills."
    ]
    
  }
];