import React from "react";
import style from "../../pages/about/index.module.css";
import themeStyle from "../../css/theme.module.css";
import { useColorMode } from "@docusaurus/theme-common";

type Props = {
  member: {
    name: string,
    img: string,
    role: string,
    website?: string,
    location: string,
    twitter?: string,
    github?: string
  }
}

export default function Card({ member }: Props) {
  const { isDarkTheme } = useColorMode();

  return (
    <div className={`${style.teamMember_card} ${isDarkTheme && themeStyle.team__card}`}>
      <div className={style.teamMember_cardImage}>
        <img src={member.img} alt={member.name} />
      </div>
      <div className={`${style.teamMember_cardInfos} ${isDarkTheme && themeStyle.team__card_info}`}>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <span>From {member.location}</span>
        <div className={`${isDarkTheme && themeStyle.team__card_icons}`}>
          {member.website && (
            <a href={member.website} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"
                  fill="rgba(17,49,79,1)"
                />
              </svg>
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                  fill="rgba(17,49,79,1)"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
      <a
        href={member.github}
        target="_blank"
        rel="noopener noreferrer"
        className={style.teamMember_cardGithub}
      >
        Follow on Github
      </a>
    </div>
  );
}
