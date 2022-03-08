import tomato from "../imagery/tomato.png"

export function AerogardenRedHeirloomCherry() {
    return(
        <div>
            <h3 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={tomato} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
                Aerogarden Red Heirloom Cherry Tomato!
                <img src={tomato} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
            </h3>

            Video follows here...
        </div>
    );
}