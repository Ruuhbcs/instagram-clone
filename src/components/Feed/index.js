import './style.css';
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import perfil1 from '../Storie/leia-perfil.png';
import post1 from './leia-hansolo-foto.jpeg';
import { IconContext } from 'react-icons';


export function Feed() {
    return (
        <>
            <header>

                <div className="post">
                    <img src={perfil1} alt='Leia' />
                    <p>PrincesaRebeldeLeia</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post1} alt='Post princesa Leia com Han Solo' />
            </div>

            <div className='infoPost'>
                <IconContext.Provider value={{ size: "30px" }}>
                    <section className='iconsPost'>
                        <div className='iconsOne'>
                            <div className='icon'>
                                <IoMdHeartEmpty />
                            </div>

                            <div className='icon'>
                                <BsChat />
                            </div>

                            <div className='icon'>
                                <BsSend />
                            </div>
                        </div>

                        <div className='icon'>
                            <BsBookmark />
                        </div>

                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>102 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>PrincesaRebeldeLeia</strong> Nosso destino foi traçado pelas estrelas, mas meu coração foi conquistado por esse trapaceiro sorridente ao meu lado. 💫❤️
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 2 HORAS</time>
                </div>

                <div className='comment'>
                    <div className='commentFake'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário...' />

                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </>
    )
}