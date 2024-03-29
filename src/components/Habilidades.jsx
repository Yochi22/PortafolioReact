import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import expressJs from "../assets/expressjs.png";
import nodeJs from "../assets/nodejs.png";
import mongoDB from "../assets/mongodb.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import spring from "../assets/spring.png";

export const Habilidades = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-orange-600",
    },
    
    {
      id: 5,
      src: expressJs,
      title: "Express Js",
      style: "shadow-blue-600",
    },

    {
      id: 6,
      src: nodeJs,
      title: "Node Js",
      style: "shadow-yellow-600",
    },

    {
      id: 7,
      src: mongoDB,
      title: "Mongo DB",
      style: "shadow-orange-600",
    },

    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-blue-600",
    },

    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-yellow-600",
    },

    {
      id: 10,
      src: spring,
      title: "Spring Boot",
      style: "shadow-orange-600",
    },

    
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-yellow-400 p-2 inline">
           Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

