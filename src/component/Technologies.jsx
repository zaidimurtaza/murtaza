import {RiReactjsLine} from "react-icons/ri"
import { TbBrandPython } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoFlask } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants = (duration)=>({
    initial :{y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-nutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}}
         className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandPython className="text-7xl text-yellow-300"/>
                <p className="text-center">Python</p>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
                <p className="text-center">React</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <AiOutlineConsoleSql className="text-7xl text-green-500"/>
                <p className="text-center">SQL</p>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoFlask className="text-7xl text-red-700"/>
                <p className="text-center">Flask</p>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
                <p className="text-center">HTML</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-400"/>
                <p className="text-center">CSS</p>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-400"/>
                <p className="text-center">JavaScript</p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies