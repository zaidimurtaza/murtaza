import mzicon from '../assets/mz-icon.jpg'
import { FaFontAwesome, FaFontAwesomeFlag, FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10 ' src={mzicon} alt='logo'/> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl md:items-center">
        <a href="https://www.linkedin.com/in/murtaza-57816b302/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
        <a href="https://github.com/zaidimurtaza" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://x.com/ZaidiMurtaza1" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        <a href="https://www.instagram.com/xydi_murtaza/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
    </div>
  </nav>
  )
}

export default Navbar
