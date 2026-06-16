// ============================================================================
// PORTFOLIO DATA — EDIT THIS FILE TO CUSTOMIZE ALL CONTENT
// ============================================================================
// This is the single source of truth for the portfolio's content.
// Update names, links, projects, skills, etc. here — components will
// automatically reflect the changes.
// ============================================================================

export const profile = {
  fullName: 'Rohit Addagatla',
  tagline: 'B.Tech Computer Science Student',
  year: '3rd Year',
  college: 'VIT Pune',
  location: 'Pune, Maharashtra, India',
  // Replace with your actual photo path, e.g. '/images/profile.jpg'
  photo: null,
  resumeLink: '#', // Replace with link to your resume PDF
  intro: `I'm a third-year Computer Science student at VIT Pune with a strong
    interest in building things that solve real problems — from small command-line
    tools to full-stack web applications. My academic journey has taken me through
    core CS fundamentals like data structures, algorithms, and operating systems,
    while my personal projects have pushed me into web development and applied AI.
    I'm aiming to grow into a software engineer who can move comfortably between
    backend systems, frontend interfaces, and the occasional machine learning model
    — and I genuinely enjoy the process of learning new tools as much as shipping
    finished products.`,
  interests: [
    { label: 'Software Development', icon: 'Code2' },
    { label: 'Web Development', icon: 'Globe' },
    { label: 'Artificial Intelligence', icon: 'Brain' },
    { label: 'Problem Solving', icon: 'Puzzle' },
    { label: 'Open Source', icon: 'GitBranch' },
    { label: 'Technology Innovation', icon: 'Rocket' },
  ],
}

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Vishwakarma Institute of Technology (VIT), Pune',
    duration: '2023 – 2027 (Expected)',
    score: 'CGPA: 8.7 / 10', // Optional — remove if you'd rather not display
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Web Technologies',
    ],
    achievements: [
      'Maintained a consistent academic record across all semesters',
      'Active member of the college coding club',
    ],
  },
  {
    degree: 'Higher Secondary Education (12th Grade, PCM)',
    institution: 'Your School / Junior College Name',
    duration: '2021 – 2023',
    score: 'Percentage: 92%',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    achievements: [],
  },
]

// Skill categories — each skill has a name and a proficiency level (1-5)
export const skills = {
  'Programming Languages': [
    { name: 'C', level: 4 },
    { name: 'C++', level: 4 },
    { name: 'Java', level: 3 },
    { name: 'Python', level: 4 },
    { name: 'JavaScript', level: 4 },
  ],
  'Web Development': [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'React', level: 4 },
    { name: 'Node.js', level: 3 },
    { name: 'Express.js', level: 3 },
  ],
  Database: [
    { name: 'MySQL', level: 4 },
    { name: 'MongoDB', level: 3 },
  ],
  'Tools & Platforms': [
    { name: 'Git', level: 4 },
    { name: 'GitHub', level: 4 },
    { name: 'VS Code', level: 5 },
    { name: 'Linux', level: 3 },
  ],
  'Other Technologies': [
    { name: 'Data Structures & Algorithms', level: 4 },
    { name: 'OOP', level: 4 },
    { name: 'REST APIs', level: 3 },
  ],
}

export const projects = [
  {
    name: 'Fuel Efficiency Calculator',
    description:
      'A command-line application written in C that calculates a vehicle\u2019s fuel efficiency (mileage) based on distance travelled and fuel consumed, with support for multiple trip logs and unit conversions.',
    tech: ['C'],
    features: [
      'Calculates mileage in km/l and miles/gallon',
      'Supports multiple trip records with running averages',
      'Input validation and error handling',
      'Lightweight, dependency-free console application',
    ],
    github: '#', // Replace with your GitHub repo link
    demo: null, // No live demo for CLI projects — set to a link if available
    image: null, // Replace with screenshot path, e.g. '/images/projects/fuel-calc.png'
  },
  {
    name: 'Online Shopping App with Product Reels',
    description:
      'A full-stack e-commerce web application featuring a TikTok/Instagram-style "reels" feed for product discovery, alongside a traditional catalog, cart, and checkout flow.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
    features: [
      'Swipeable short-video product reels for discovery',
      'Product catalog with search and category filters',
      'Cart and checkout flow with order summary',
      'User authentication and profile management',
      'Responsive design across devices',
    ],
    github: '#',
    demo: '#',
    image: null,
  },
  {
    name: 'Portfolio Website',
    description:
      'This personal portfolio website — built with React and Tailwind CSS, featuring dark/light mode, smooth scroll animations, and a fully responsive layout to showcase my projects and skills.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Dark/light mode toggle with persisted preference',
      'Scroll-triggered reveal animations',
      'Fully responsive, mobile-first layout',
      'Modular, reusable component structure',
    ],
    github: '#',
    demo: '#',
    image: null,
  },
  // ---------------------------------------------------------------------
  // ADD MORE PROJECTS HERE — copy the structure above and edit the fields
  // ---------------------------------------------------------------------
  {
    name: 'Your Next Project',
    description:
      'A short, compelling description of what this project does and the problem it solves.',
    tech: ['Tech 1', 'Tech 2', 'Tech 3'],
    features: ['Key feature one', 'Key feature two', 'Key feature three'],
    github: '#',
    demo: '#',
    image: null,
  },
]

// Experience timeline — internships, freelance, college activities, etc.
export const experience = [
  {
    type: 'Hackathon',
    title: 'Finalist — Smart India Hackathon (College Round)',
    org: 'VIT Pune',
    duration: 'Sept 2025',
    description:
      'Built a prototype solution for a campus-level problem statement as part of a 4-member team, focusing on a working MVP within 24 hours.',
  },
  {
    type: 'College Activity',
    title: 'Core Member — Coding Club',
    org: 'VIT Pune',
    duration: '2024 – Present',
    description:
      'Organize peer coding sessions and contests, helping juniors get started with competitive programming and DSA fundamentals.',
  },
  {
    type: 'Workshop',
    title: 'Web Development Bootcamp',
    org: 'Online / Self-paced',
    duration: 'Summer 2025',
    description:
      'Completed an intensive workshop covering the MERN stack, culminating in the "Online Shopping App" project.',
  },
  // ---------------------------------------------------------------------
  // ADD MORE EXPERIENCE ENTRIES HERE — internships, freelance work, etc.
  // type: 'Internship' | 'Freelance' | 'College Activity' | 'Leadership' |
  //       'Hackathon' | 'Workshop'
  // ---------------------------------------------------------------------
]

export const certifications = [
  {
    title: 'Python for Everybody',
    issuer: 'University of Michigan (Coursera)',
    date: '2024',
    link: '#',
  },
  {
    title: 'The Complete Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    link: '#',
  },
  {
    title: 'Problem Solving (Basic & Intermediate)',
    issuer: 'HackerRank',
    date: '2025',
    link: '#',
  },
  // ---------------------------------------------------------------------
  // ADD MORE CERTIFICATIONS / ACHIEVEMENTS HERE
  // ---------------------------------------------------------------------
]

export const contact = {
  email: 'rohit.addagatla@example.com',
  phone: '+91 98765 43210',
  social: [
    { label: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/your-profile' },
    { label: 'GitHub', icon: 'Github', url: 'https://github.com/your-username' },
    { label: 'LeetCode', icon: 'Code', url: 'https://leetcode.com/your-username' },
    { label: 'HackerRank', icon: 'Trophy', url: 'https://hackerrank.com/your-username' },
  ],
}
