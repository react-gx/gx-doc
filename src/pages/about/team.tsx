import React from "react";
import Layout from "@theme/Layout";
import style from "./index.module.css";
import Description from "@site/src/components/team/Description";
import Card from "@site/src/components/team/Card";

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
