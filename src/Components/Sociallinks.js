import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { HiOutlineMail} from 'react-icons/hi'

const Sociallinks = () => {


    const links = [
        {

            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/nisha-raitani-9b676b1a5/",
        style:"rounded-tr-md",

    },
    {

        id:2,
        child:(
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href:"https://github.com/Nisha-cloud"
}
,
    {

        id:3,
        child:(
            <>
            Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:"mailto:nisharaitani19@gmail.com"
}

,
    {

        id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:"/NISHA RAITANI Resume 2023.pdf",
        style:"rounded-br-md",
        download:true
}

        ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>

        <ul>
            { links.map( ({id , child , href , style , download}) => (

            <li key={id} className={" hidden lg:flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}> 

            <a 
            href={href}

            className="flex justify-between items-center w-full   text-white"
            download={download}
            target='_blank'
            rel="noreferrer"
            > 
            {child}</a></li>

            ))}
           
            
        </ul>      
    </div>
  )
}

export default Sociallinks
