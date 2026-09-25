import ProfileCard from "./ProfileCard.jsx";
import "./ProfileCard.css";

let data = [
  {
    name: "Anees",
    profession: "UI Designer",
    company: "Apple Inc.",
    price: "$50/hr",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["UI", "UX", "Photoshop"],
    description:
      "Anees is a creative UI Designer with over 10 years of experience in modern interface design.",
  },

  {
    name: "Ubedullah",
    profession: "Web Developer",
    company: "Google",
    price: "$60/hr",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    skills: ["HTML", "CSS", "React"],
    description:
      "Ubedullah is a Web Developer who creates modern, responsive and user-friendly websites.",
  },

  {
    name: "Faizan",
    profession: "Software Engineer",
    company: "Microsoft",
    price: "$78/hr",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    skills: ["Java", "Spring", "Git"],
    description:
      "Faizan is a Software Engineer experienced in developing reliable and scalable software solutions.",
  },

  {
    name: "Hussan",
    profession: "Backend Developer",
    company: "Netflix",
    price: "$130/hr",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    skills: ["Python", "Django", "SQL"],
    description:
      "Hussan is a Backend Developer who specializes in APIs, databases and server-side applications.",
  },

  {
    name: "Ahsan",
    profession: "Android Developer",
    company: "HexaTech",
    price: "$300/hr",
    image: "https://i.pravatar.cc/150?img=13",
    skills: ["Kotlin", "Android", "Firebase"],
    description:
      "Ahsan is an Android Developer who builds modern and user-friendly mobile applications.",
  },

  {
    name: "Hamza",
    profession: "Frontend Developer",
    company: "Amazon",
    price: "$85/hr",
    image: "https://i.pravatar.cc/150?img=12",
    skills: ["React", "JavaScript", "Tailwind"],
    description:
      "Hamza is a Frontend Developer focused on creating responsive and interactive web experiences.",
  },

  {
    name: "Bilal",
    profession: "Full Stack Developer",
    company: "Meta",
    price: "$110/hr",
    image: "https://i.pravatar.cc/150?img=11",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "Bilal is a Full Stack Developer experienced in building complete and scalable web applications.",
  },

  {
    name: "Saad",
    profession: "Cyber Security Engineer",
    company: "IBM",
    price: "$95/hr",
    image: "https://i.pravatar.cc/150?img=14",
    skills: ["Security", "Linux", "Networking"],
    description:
      "Saad is a Cyber Security Engineer interested in protecting applications, systems and networks.",
  },

  {
    name: "Danish",
    profession: "DevOps Engineer",
    company: "Microsoft Azure",
    price: "$120/hr",
    image: "https://i.pravatar.cc/150?img=15",
    skills: ["Docker", "AWS", "CI/CD"],
    description:
      "Danish is a DevOps Engineer who works with cloud infrastructure, automation and deployment systems.",
  },

  {
    name: "Zain",
    profession: "Data Scientist",
    company: "Tesla",
    price: "$140/hr",
    image: "https://i.pravatar.cc/150?img=16",
    skills: ["Python", "Machine Learning", "SQL"],
    description:
      "Zain is a Data Scientist who analyzes data and builds intelligent machine learning solutions.",
  },
];

function MainSection() {
  return (
    <main className="app" id="profiles">
      {data.map(function (value, index) {
        return (
          <ProfileCard
            key={index}
          {...value}
          />
        );
      })}
    </main>
  );
}

export default MainSection;