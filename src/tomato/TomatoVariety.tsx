import { useParams } from "react-router-dom";
import { getPlantInfo } from "../data/tomatodata";
import logo from "./../imagery/tomato.png";

export function TomatoVariety() {
    const params = useParams();
    const variety = getPlantInfo(params.id!)

    return(
        <div style={{width: "100%"}}>
            <h1 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={logo} alt="Tomato" style={{width: "100px", padding: "24px"}}></img>
                {variety?.name}
                <img src={logo} alt="Tomato" style={{width: "100px", padding: "24px"}}></img>
            </h1>

            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${variety?.id}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
        </div>
    );
}