import React from 'react'
import webTributo from '../assets/projects/webTributo.png'
import calculadora from '../assets/projects/calculadora.png'
import toDoList from '../assets/projects/toDoList.png'
import wheelOf from '../assets/projects/wheelOf.png'

export const Projects = () => {

    const proyectos = [
        {
            id: 1,
            src: webTributo,
        },

        {
            id: 2,
            src: calculadora

        },

        {
            id: 3,
            src: toDoList

        },

        {
            id: 4,
            src: wheelOf

        },
    ]



    return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
                Portfolio
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0">
              {proyectos.map(({ id, src, }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-400">
                      Demo
                    </button>
                    <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 bg-yellow-400">
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default Projects;