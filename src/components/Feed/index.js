import './style.css';
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import perfil1 from '../Storie/leia-perfil.png';
import post1 from './leia-hansolo-foto.jpeg';
import perfil2 from '../Storie/luke-perfil.jpeg';
import post2 from './luke-selfie.jpeg';
import perfil3 from '../Storie/c3po-perfil.png';
import post3 from './lando-calrissian-r2d2-c3po-foto.jpeg';
import perfil4 from '../Storie/yoda-perfil.png';
import post4 from './yoda-foto.jpeg';
import perfil5 from '../Storie/kylo-perfil.png';
import post5 from './kylo-ren-selfie.jpeg';
import perfil6 from '../Storie/hansolo-perfil.png';
import post6 from './hansolo-foto.jpeg';
import perfil7 from '../Storie/darthvader-perfil.jpg';
import post7 from './palpatine-darthVader-foto.jpeg';
import perfil8 from '../Storie/chewbacca-perfil.jpg';
import post8 from './chewbacca-c3po-selfie.jpeg';
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil2} alt='Luke' />
                    <p>LukeDoSertao</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post2} alt='Post de Luke com seu sabre de luz de frente para um espelho' />
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
                    <span>87 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>LukeDoSertao</strong> Refletindo sobre o caminho da Força e lembrando que mesmo um fazendeiro pode se tornar um Jedi. 🌟🗡️ #QueAForçaEstejaComVocês
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 45 MINUTOS</time>
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

            {/*  */}
            <header>

                <div className="post">
                    <img src={perfil3} alt='C3PO' />
                    <p>DroideProtocoloC3PO</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post3} alt='Post C3PO com R2D2 e Lando Calrissian' />
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
                    <span>156 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>DroideProtocoloC3PO</strong> Um droide de protocolo, um astromecânico travesso e um charmoso canalha entram em uma cantina... parece o início de uma piada, mas é só mais um dia na galáxia! 🌌🤖🎲
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 1 DIA</time>
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil4} alt='Yoda' />
                    <p>MestreYodaSabio</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post4} alt='Post Yoda com garrafa de cerveja da sua marca' />
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
                    <span>1.235 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>MestreYodaSabio</strong> Cerveja da Força, é. Em cada gole, sabedoria e equilíbrio encontrará. 🍻✨ #BebaComSabedoria #CervejaJedi #ForçaNosGoles
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 5 HORAS</time>
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil5} alt='Kylo' />
                    <p>RenegadoKylo</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post5} alt='Post Kylo tirando uma sekfie e ao fundo uma foto de seus pais na parede' />
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
                    <span>25 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>RenegadoKylo</strong> Reflexões sombrias diante do passado que moldou meu destino. O legado é pesado, mas a escolha é minha. 🔥🖤
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 8 HORAS</time>
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil6} alt='Han' />
                    <p>HanSoloInLove</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post6} alt='Post Han Solo segurando um livro' />
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
                    <span>203 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>HanSoloInLove</strong> Contrabandeando conhecimento em qualquer canto da galáxia. Sempre há espaço para expandir a mente, até mesmo entre as corridas de Kessel. 📚🌌
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 1 DIA</time>
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil7} alt='Darth Vader' />
                    <p>LordVaderNegro</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post7} alt='Post Darth Vader com Palpatine' />
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
                    <span>1.224 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>LordVaderNegro</strong> Dominar a galáxia é exaustivo, mas até Siths merecem uma pausa para um bom chopp. 🍻🌑 #MomentoSith #ChoppComPalpatine #LadoSombrioTambémRelaxa
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 2 DIAS</time>
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

            {/*  */}

            <header>

                <div className="post">
                    <img src={perfil8} alt='Chewbacca' />
                    <p>ChewieRoar</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src={post8} alt='Post Chewbacca tirando selfie com C3PO' />
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
                    <span>5.000 curtidas</span>
                </section>

                <div className='legend'>
                    <p>
                        <strong>ChewieRoar</strong> Grrrrooarr! Arrrrghhh! Grrr grrr, Arrrghhhhh! 🌌🤖
                    </p>
                </div>

                <div className='timePost'>
                    <time>HÁ 18 HORAS</time>
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