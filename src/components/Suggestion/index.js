import './style.css';
import userProfile from '../Header/Ruth-Barbosa.jpg';

export function Suggestion() {
    return(
        <>
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
        </>
    )
}