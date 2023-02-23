import React from 'react'
import webTributo from '../assets/projects/webTributo.png'
import calculadora from '../assets/projects/calculadora.png'
import toDoList from '../assets/projects/toDoList.png'
import wheelOf from '../assets/projects/wheelOf.png'
import tienda from '../assets/projects/tienda.png'


export const Projects = () => {

    const proyectos = [
        {
            id: 1,
            src: webTributo,
            demo: 'https://effortless-travesseiro-5199a2.netlify.app',
            code: 'https://github.com/Yochi22/Webtributo',
        },

        {
            id: 2,
            src: calculadora,
            demo: 'https://delightful-cat-70b905.netlify.app',
            code: 'https://github.com/Yochi22/CalculadoraScript',
        },

        {
            id: 3,
            src: toDoList,
            demo: 'https://app.netlify.com/sites/beautiful-smakager-441e3f/overview',
            code: 'https://github.com/Yochi22/ToDoList'
        },

        {
            id: 4,
            src: wheelOf,
            demo: 'https://enlacuerdafloja.netlify.app/',
            code: 'https://github.com/Yochi22/EnLaCuerdaFloja'
        },

        {
          id: 5,
          src: tienda,
          demo: 'https://teal-bavarois-134269.netlify.app/',
          code: 'https://github.com/Yochi22/TiendaOnline'
      },
    ]



    return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
                Projects
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0">
              {proyectos.map(({ id, src, demo, code}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-400"><a href={demo} target='_blank'>Demo</a></button>
                      
                    <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 bg-yellow-400"><a href={code} target='_blank'>Code</a></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default Projects;