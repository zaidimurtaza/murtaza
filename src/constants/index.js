import project1 from "../assets/youtube-gif.gif";
import project2 from "../assets/image-uploader.gif";
import project3 from "../assets/birdeyeview.gif";
import project4 from "../assets/color.gif";
import project5 from "../assets/tile.gif";

export const HERO_CONTENT = `As a passionate backend developer with hands-on experience in Python, I have worked on projects using Flask, MySQL, RESTful APIs, Selenium, and OpenCV. I’m focused on creating efficient, scalable solutions and continuously improving my skills. I thrive in environments that challenge me to grow, and I’m always eager to learn and contribute to impactful, real-world applications.`;

export const ABOUT_TEXT = `I’m a passionate backend developer with a knack for building high-quality, efficient, and scalable solutions. My expertise lies in Python, Flask, and MySQL, where I’ve developed projects such as a QR Code generator with database integration, an image uploader with Flask, and web scraping applications with data visualization.

In addition to backend development, I have hands-on experience with frontend tools like React and CSS, enabling me to collaborate effectively on full-stack projects. I enjoy solving complex problems, continuously learning new technologies, and staying up-to-date with industry trends.

Whether it's optimizing code for performance, creating intuitive APIs, or developing robust solutions, I am committed to delivering excellence in every project.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "YouTube Clone",
    image: project1,
    description:
      `A fully responsive, single-page web application built using ReactJS and Vite. This project showcases several features that simulate a real-world video-sharing platform:

Search functionality: Integrated with the Google API for searching videos.
Video display: Presents video content with titles, descriptions, and other relevant details.
Commenting system: Allows users to view and add comments to videos.
Profile section: Users can access and customize their profile with a profile icon.
Like and View counts: Displays the number of likes on videos.
Responsive sidebar: Toggleable sidebar for easy navigation across the app.
This project highlights my skills in React, Vite, and building user-friendly, dynamic applications
`,
    technologies: ["ReactJS", "Vite", "CSS", "Google API"],
  },
  {
    title: "Image Uploader",
    image: project2,
    description:
    `A full-stack application built using React for the frontend and Flask for the backend. This project allows users to upload and retrieve images seamlessly, demonstrating both frontend and backend integration.

    Frontend: Developed using React, where users can select and upload images.
    Backend: Built with Flask, which handles the image uploads and stores them securely.
    Image Retrieval: The backend serves the uploaded images via an API, making it easy to fetch and display them in the frontend.
    POST Method: Utilized to send image data via a form, with support for both form and JSON data handling.
    User Experience: The user interface is simple and intuitive, ensuring smooth interaction.
    This project showcases my ability to work with both frontend and backend technologies and handle image uploads effectively using React and Flask.`,
    technologies: ["Python", "Flask", "POST Method", "JavaScript", "JSON", "HTML/CSS"],
  },
  {
    title: "Bird Eye View",
    image: project3,
    description:
      `A computer vision project using OpenCV to apply a bird's-eye view effect on images or video streams through perspective transformation.
Perspective Transformation: Uses OpenCV's homography to warp images into a top-down view.
Image/Video Processing: Applies the effect to both static images and live video feeds.
Customizable Parameters: Allows users to adjust the region and viewpoint.
Interactive Interface: Users can load images or videos and transform the perspective.
This project highlights your skills in OpenCV, image processing, and real-time video manipulation.`,
    technologies: ["OpenCV", "Python", "NumPy", "cv2"],
  },
  {
    title: "Color Detection in OpenCV",
    image: project4,
    description:
    `A computer vision project using OpenCV to detect specific colors in images or video streams.

    Color Detection: Converts images to HSV color space and applies thresholding to identify colors.
    Real-Time Processing: Processes live video feeds to detect and highlight colors.
    Masking: Isolates desired colors using masks.
    Customizable Range: Lets users define color detection ranges.
    This project demonstrates your skills in OpenCV, color detection, and real-time image processing`,
    technologies: ["OpenCV", "Python", "NumPy ", "HSV color space", "Bit-Wise-Or"],
  },
  {
    title: "Tile Helper Game",
    image: project5,
    description:
    `A fun, interactive game developed using JavaScript, where the goal is to help the player move through a grid of tiles by suggesting the next best tile to touch.

Random Tile Logic: The game generates random suggestions for the next tile to be clicked.
Grid Layout: The tiles are arranged in a grid, and players interact with the tiles by clicking them.
Interactive Gameplay: Provides an engaging way to test memory or reaction time based on the game's design.
This project demonstrates your skills in JavaScript, game logic, and creating interactive web applications.`,
    technologies: ["ReactJS", "JavaScript", "HTML ", "CSS"],
  },
];

export const CONTACT = {
  address: "DELHI (NCR)",
  phoneNo: "+91 9485587821 ",
  email: "zaidimurtaza102@gmail.com",
};
