import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiPython, DiMysql, DiDocker, DiPostgresql} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import Reactnative from './Reactnative';

const Skills = ({skill}) => {
    const icon = {
        Tailwind: <RiTailwindCssFill/>,
        Mysql: <DiMysql/>,
        Docker:<DiDocker/>,
        Postgres:<DiPostgresql/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Reactnative:<Reactnative/>,
        Node : <DiNodejs/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Typescript : <BiLogoTypescript/>,
        Python : <DiPython/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
