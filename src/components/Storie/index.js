import perfil1 from './luke-perfil.jpeg';
import perfil2 from './yoda-perfil.png';
import perfil3 from './leia-perfil.png';
import perfil4 from './kylo-perfil.png';
import perfil5 from './hansolo-perfil.png';
import perfil6 from './darthvader-perfil.jpg';
import perfil7 from './chewbacca-perfil.jpg';
import perfil8 from './c3po-perfil.png';
import "./style.css"

export function Storie() {
    return (
        <div className="container">

            <div className="userElements">

            <div>
                <img src={perfil1} className="imgUserStorie" alt='Luke' />
                </div>
                <span>Luke</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil2} className="imgUserStorie" alt='Yoda' />
                </div>
                <span>Yoda</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil3} className="imgUserStorie" alt='Leia' />
                </div>
                <span>Leia</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil4} className="imgUserStorie" alt='Kylo' />
                </div>
                <span>Kylo</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil5} className="imgUserStorie" alt='Han Solo' />
                </div>
                <span>Han</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil6} className="imgUserStorie" alt='Darth Vader'/>
                </div>
                <span>Darth</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil7} className="imgUserStorie" alt='Chewbacca'/>
                </div>
                <span>Chewie</span>
            </div>

            <div className="userElements">

            <div>
                <img src={perfil8} className="imgUserStorie" alt='C3PO' />
                </div>
                <span>C3po</span>
            </div>
            

        </div>

    )
}