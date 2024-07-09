import './style.css';
import userProfile from '../Header/Ruth-Barbosa.jpg';
import user1 from './bobafeth.jpeg';
import user2 from './lando.png';
import user3 from './padme.png';
import user4 from './palpatine.png';
import user5 from './R2D2.png';

export function Suggestion() {
    return(
        <div className='containerSuggestion'>
            <div className="headerSuggestion">
                <img src={ userProfile } alt='foto do usuário'/>
                <div className='userInfosSuggestion'>
                    <div className='infos'>
                        <span>Ruuhjedi</span>
                        <p>Ruth Barbosa</p>
                    </div>
                    <button className='switch'>Mudar</button>
                </div>
            </div>

            <div className='headerMainSuggestion'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='userSuggestion'>
                <div className='infosSuggestion'>
                    <img src= { user2 } alt='Lando'/>
                    <div className='infoSuggestion'>
                        <span>SmoothLando</span>
                        <p>Seguido por DroideProtocoloC3PO</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            {/*  */}

            <div className='userSuggestion'>
                <div className='infosSuggestion'>
                    <img src= { user1 } alt='Boba Feth'/>
                    <div className='infoSuggestion'>
                        <span>BobaJetFett</span>
                        <p>Seguido por LukeDoSertao</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            {/*  */}

            <div className='userSuggestion'>
                <div className='infosSuggestion'>
                    <img src= { user3 } alt='Padme'/>
                    <div className='infoSuggestion'>
                        <span>QueenAmidala</span>
                        <p>Seguido por PrincesaRebeldeLeia</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            {/*  */}

            <div className='userSuggestion'>
                <div className='infosSuggestion'>
                    <img src= { user4 } alt='Palpatine'/>
                    <div className='infoSuggestion'>
                        <span>RegenteDoLadoNegro</span>
                        <p>Seguido por RenegadoKylo</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            {/*  */}

            <div className='userSuggestion'>
                <div className='infosSuggestion'>
                    <img src= { user5 } alt='R2D2'/>
                    <div className='infoSuggestion'>
                        <span>BeepBoopR2</span>
                        <p>Novo no Instagram</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>

            <footer className='footerSuggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; Idioma &bull;</p>
                <p>&copy; 2024 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}