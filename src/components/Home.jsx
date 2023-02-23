import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { TiArrowRightThick } from 'react-icons/ti'
import { Link } from 'react-scroll'
import FotoPerfil from '../assets/FotoPerfil.png'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text 4xl sm:text-7xl font-bold text-yellow-400">
            Hello, I'm Joselin Lozada. I am a Web Developer
          </h2>
          <p className="text-white py-4 max-w-md">Come meet me.</p>
        
        <div>
          <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
            Projects
            <span className="group-hover:rotate-90 duration-300">
            <TiArrowRightThick size={25} />
            </span>
       
          </Link>
        </div>
        
        </div>

        <div>
          <img src={FotoPerfil} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-full px-3" />
        </div>

      </div>

    </div>
  )
}

export default Home