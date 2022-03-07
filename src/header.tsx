import logo from "./logo.jpg"

export default function Header() {
    return(
        <h1 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={logo} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
            Aerogarden Experiments!
            <img src={logo} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
        </h1>
    );
}