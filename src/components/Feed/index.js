import './style.css';
import { FiMoreHorizontal } from "react-icons/fi";
import perfil1 from '../Storie/leia-perfil.png'
import post1 from './leia-hansolo-foto.jpeg'


export function Feed() {
    return(
        <>
            <header>

                <div className="post">
                    <img src={ perfil1 } alt='Leia'/>
                    <p>PrincesaRebeldeLeia</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={ post1 } alt='Post princesa Leia com Han Solo' />

            </div>
        </>
    )
}