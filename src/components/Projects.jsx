import React, {useState} from 'react'
import webTributo from '../assets/projects/webTributo.png'
import calculadora from '../assets/projects/calculadora.png'
import toDoList from '../assets/projects/toDoList.png'
import wheelOf from '../assets/projects/wheelOf.png'
import tienda from '../assets/projects/tienda.png'
import cire from '../assets/projects/cire.png'
import cugusa from '../assets/projects/cugusa.png'
import mentorcode from '../assets/projects/mentorcode.png'

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const proyectos = [
    {
        id: 1,
        title: 'Web Tributo',
        src: webTributo,
        demo: 'https://effortless-travesseiro-5199a2.netlify.app',
        code: 'https://github.com/Yochi22/Webtributo',
    },

    {
        id: 2,
        title: 'Calculator',
        src: calculadora,
        demo: 'https://delightful-cat-70b905.netlify.app',
        code: 'https://github.com/Yochi22/CalculadoraScript',
    },

    {
        id: 3,
        title: 'To Do List',
        src: toDoList,
        demo: 'https://app.netlify.com/sites/beautiful-smakager-441e3f/overview',
        code: 'https://github.com/Yochi22/ToDoList'
    },

    {
        id: 4,
        src: wheelOf,
        title: 'Wheel of Dom',
        demo: 'https://enlacuerdafloja.netlify.app/',
        code: 'https://github.com/Yochi22/EnLaCuerdaFloja'
    },

    {
      id: 5,
      src: tienda,
      title: 'E-commerce',
      demo: 'https://teal-bavarois-134269.netlify.app/',
      code: 'https://github.com/Yochi22/TiendaOnline'
  },

  {
    id: 6,
    src: cire,
    title: 'Application for registration and evaluation of students',
    demo: 'https://heroic-phoenix-4b4500.netlify.app/',
    code: 'https://github.com/programateacademy/cire-fontend'
},

{
  id: 7,
  src: cugusa,
  title: 'Inventory system with administrator panel.',
  demo: 'https://inventorycugusa.online/',
  code: 'https://github.com/Crooks2k/inventory-system'
},

{
id: 8,
src: mentorcode,
title: 'MentorCode. Platform for mentors and students',
demo: 'https://mentorcode.netlify.app/',
code: 'https://github.com/alejoalfonsoR/RepoMentorCode'
},


];


  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-screen-lg p-4 mx-auto">
              <img
                src={selectedImage}
                alt="Enlarged Project Image"
                className="rounded-md max-w-full max-h-full"
              />
              <button
                className="absolute top-4 right-4 p-2 text-white bg-gray-800 rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {proyectos.map(({ id, src, demo, code, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h3 className='text-sm md:text-base font-semibold text-center'>{title}</h3>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                onClick={() => openModal(src)}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-yellow-400">
                  <a href={demo} target='_blank' rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 bg-yellow-400">
                  <a href={code} target='_blank' rel="noopener noreferrer">
                    Code
                  </a>
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