import "./style.css";
import { Storie } from "../Storie";
import { Feed } from "../Feed";

export function Layout() {

    return(
        <>

        <div className="MainGrid">

            <div className="firstColumn" style={{gridArea: "firstColumn"}}>
            <div className="box"> 
                <Storie />
            </div>
            </div>
            

            <div className="box"> 
                <Feed />
            </div>

            <div className="boxSugestao" style={{gridArea: "secondColumn"}}> 
                sugestão
            </div>
        </div>

           
        </>
    )
}