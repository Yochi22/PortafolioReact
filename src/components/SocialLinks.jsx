import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const SocialLinks = () => {
 
    const links = [
        {
            id: 1,
            child: (
                 <>
                 Linkedin <FaLinkedin size={30}/>
                 </>
            ),
            href: 'https://www.linkedin.com/in/joselin-lozada',
            style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (
                 <>
                 GitHub <FaGithub size={30}/>
                 </>
            ),
            href: 'https://www.github.com/Yochi22',
            
        },

        {
            id: 3,
            child: (
                 <>
                 Mail <HiOutlineMail size={30}/>
                 </>
            ),
            href: 'mailto:joselinlozada@gmail.com',
        },


    ] 
 
 
 
    return (
    <div className="hidden flex flex-col top-[35%] left-0 fixed ">
        <ul>

            {links.map(({id, child, href, style})=>(
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                <a href={href} className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer"> {child}
            </a></li>
            ))}

            
        </ul>
    </div>
  )
}
