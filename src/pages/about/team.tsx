import Card from "@site/src/components/team/Card";
import Description from "@site/src/components/team/Description";
import Layout from "@theme/Layout";
import React from "react";
import style from "./index.module.css";

const teamData: {
  id: number;
  name: string;
  role: string;
  img: string;
  github: string;
  twitter?: string;
  website?: string;
  location: string;
}[] = [
  {
    id: 1,
    name: "Dilane Kombou",
    role: "Founder of GX",
    img: "/team/dilanekombou.jpeg",
    github: "https://github.com/dilane3",
    twitter: "https://twitter.com/DilaneKombou",
    website: "https://dilane3.com/",
    location: "Cameroon",
  },
  {
    id: 2,
    name: "Leonel Ngoya",
    role: "FrontEnd Developer",
    img: "/team/leonelngoya.jpg",
    github: "https://github.com/ln-dev7",
    twitter: "https://twitter.com/ln_dev7",
    website: "https://lndev.me/",
    location: "Cameroon",
  },
  {
    id: 3,
    name: "Ngimdock Zemfack",
    role: "FullStack Developer",
    img: "/team/ngimdockzemfack.png",
    github: "https://github.com/ngimdock",
    twitter: "https://twitter.com/NZemfack",
    website: "https://www.linkedin.com/in/ngimdock-zemfack/",
    location: "Cameroon",
  },
  {
    id: 4,
    name: "Joël Fah",
    role: "UI/UX Designer",
    img: "/team/joelfah.jpeg",
    github: "https://github.com/Joel-Fah",
    twitter: "https://twitter.com/FahDejon",
    website: "https://joelfah.pythonanywhere.com",
    location: "Cameroon",
  },
  {
    id: 5,
    name: "Mystro Ken",
    role: "Software Engineer",
    img: "https://avatars.githubusercontent.com/u/9021722?v=4",
    github: "https://github.com/mystroken",
    twitter: "https://twitter.com/mystroken",
    website: "https://www.mystroken.com",
    location: "Cameroon",
  },
];

export default function Team() {
  return (
    <Layout title={`Team`} description="Core team members">
      <main className={style.team}>
        <div className={style.team__container}>
          <Description />

          <div className={style.teamMember}>
            {teamData.map((member) => (
              <Card key={member.id} member={member} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
