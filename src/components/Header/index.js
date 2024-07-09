import logo from './Instagram-Logo.png';
import imgUser from './Ruth-Barbosa.jpg';
import { IoSearchOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons";

import './style.css'


export function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Instagram Logo" className="logo" />

                <div className="inputFake">
                    <IconContext.Provider value={{ color: '#8e8e8e'}}>
                    <IoSearchOutline />
                    </IconContext.Provider>
                    <input placeholder='Pesquisar' />

                </div>

                <div className='menuIcons'>
                    <IconContext.Provider value={{ size: '26px'}}>
                    <div>
                    <GoHomeFill />
                    </div>
                    <div>
                    <RiMessengerLine />
                    </div>
                    <div>
                    <BsPlusSquare />
                    </div>
                    <div>
                    <MdOutlineExplore />
                    </div>
                    <div>
                    <FiHeart />
                    </div>
                    
                    </IconContext.Provider>
                    <img className='imgUser' src= {imgUser} />
                </div>
            </div>
        </header>
    );
}
