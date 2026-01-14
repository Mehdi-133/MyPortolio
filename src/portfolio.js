/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mehdi Karbitou",
  title: "Hi all, I'm Mehdi",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with hands-on experience building web applications using PHP, JavaScript, and modern UI frameworks. Skilled in problem-solving, user-centered design, and team collaboration."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mehdi-133",
  linkedin: "https://linkedin.com/in/mehdi-karbitou",
  gmail: "mehdikarbitou@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT CREATING SCALABLE WEB SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive user interfaces for web applications"
    ),
    emoji("⚡ Build dynamic web applications with PHP, JavaScript, and modern frameworks"),
    emoji(
      "⚡ Design user-centered solutions with focus on usability and performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      style: {
        color: "#E34F26"
      }
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      style: {
        color: "#1572B6"
      }
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      style: {
        color: "#F7DF1E"
      }
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php",
      style: {
        color: "#777BB4"
      }
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      style: {
        color: "#4479A1"
      }
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
      style: {
        color: "#F05032"
      }
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
      style: {
        color: "#181717"
      }
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma",
      style: {
        color: "#F24E1E"
      }
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "YouCode School",
      logo: "./images/image.png",
      subHeader: "Full Stack Web Development",
      duration: "2025 - Present",
      desc: "Intensive project-based training in modern web development technologies.",
      descBullets: [
        "Hands-on experience with PHP, JavaScript, and modern frameworks",
        "Focus on real-world problem solving and scalable solutions"
      ]
    },
    {
      schoolName: "Université Hassan II",
      logo: "./images/unnamed.jpg",
      subHeader: "Human Resources Management",
      duration: "2022 - 2024",
      desc: "Studied organizational behavior, team management, and professional communication.",
      descBullets: ["Developed strong soft skills and leadership capabilities"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Problem Solving Project",
      company: "ALX Africa",
      companylogo: "./images/unnamed1.jpg",
      date: "2024",
      desc: "Worked on real-world problem solving in the education sector using Gap Problem Statement methodology.",
      descBullets: [
        "Identified root causes and designed innovative user-centered solutions",
        "Collaborated with international remote team and presented structured results"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT WEB DEVELOPMENT PROJECTS",
  projects: [
    {
      image: "./images/feeb75183886b4e710ea2990a3131b38.jpg",
      projectName: "actTogether",
      projectDesc: "Volunteer platform connecting students to social initiatives. Built during hackathon with PHP, JavaScript, and Tailwind CSS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehdi-133"
        }
      ]
    },
    {
      image: "./images/200663dfa0d1484534341b200261ce77.jpg",
      projectName: "MoneyMind",
      projectDesc: "Personal finance management web app with real-time transaction tracking and dynamic balance visualization.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehdi-133"
        }
      ]
    },
    {
      image: "./images/70f795061cdae94165d8fb548e148557.jpg",
      projectName: "MediCare",
      projectDesc: "Medical management interface focused on user experience, integrating UI/UX prototyping and responsive frontend.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehdi-133"
        }
      ]
    },
    {
      image: "./images/a6152c294382a7f34c5312be5920e3b5.jpg",
      projectName: "QuizAppStudent",
      projectDesc: "Interactive quiz system with dynamic content loading using AJAX for smooth user experience.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Mehdi-133"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Professional certifications and achievements",

  achievementsCards: [
    {
      title: "Soft Skills Certification",
      subtitle:
        "Completed professional skills development program for the digital era at ALX Africa (August 13, 2024)",
      image: "./images/unnamed1.jpg",
      imageAlt: "ALX Africa Logo",
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing knowledge and experiences in web development",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 632842529",
  email_address: "mehdikarbitou@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
