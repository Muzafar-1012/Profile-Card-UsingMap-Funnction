import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProfileCard from "./Components/ProfileCard";
import "./App.css";

function App() {
  let data = [
    {
      name: "Anees",
      profession: "UI Designer",
      company: "Apple Inc.",
      price: "$50/hr",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["UI", "UX", "Photoshop"],
      description:
        "Anees is a UI Designer with over 10 years of experience in design.",
    },

    {
      name: "Ubedullah",
      profession: "Web Developer",
      company: "Google",
      price: "$60/hr",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      skills: ["HTML", "CSS", "React"],
      description:
        "Ubedullah is a Web Developer with experience in modern web development.",
    },

    {
      name: "Faizan",
      profession: "Software Engineer",
      company: "Microsoft",
      price: "$78/hr",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      skills: ["Java", "Spring", "Git"],
      description:
        "Faizan is a Software Engineer with experience in software development.",
    },

    {
      name: "Hussan",
      profession: "Backend Developer",
      company: "Netflix",
      price: "$130/hr",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      skills: ["Python", "Django", "SQL"],
      description:
        "Hussan is a Backend Developer with experience in backend technologies.",
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
        "Hamza is a Frontend Developer focused on creating responsive and interactive websites.",
    },

    {
      name: "Bilal",
      profession: "Full Stack Developer",
      company: "Meta",
      price: "$110/hr",
      image: "https://i.pravatar.cc/150?img=11",
      skills: ["React", "Node.js", "MongoDB"],
      description:
        "Bilal is a Full Stack Developer experienced in building complete web applications.",
    },

    {
      name: "Saad",
      profession: "Cyber Security Engineer",
      company: "IBM",
      price: "$95/hr",
      image: "https://i.pravatar.cc/150?img=14",
      skills: ["Security", "Linux", "Networking"],
      description:
        "Saad is a Cyber Security Engineer interested in protecting applications and networks.",
    },
  ];

 return (
  <>
    <Header />

    <main className="app" id="profiles">
      {data.map(function (value, index) {
        return (
          <ProfileCard
            key={index}
            name={value.name}
            profession={value.profession}
            company={value.company}
            price={value.price}
            image={value.image}
            skills={value.skills}
            description={value.description}
          />
        );
      })}
    </main>

    <Footer />
  </>
);
  
}

export default App;