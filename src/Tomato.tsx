import { NavLink, Outlet } from "react-router-dom";
import tomato from "./imagery/tomato.png"

export function Tomato() {
    return(
        <div style={{width: "100%"}}>
            <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={tomato} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
                Tomato Experiments!
                <img src={tomato} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
            </h2>

            <div style={{display: "flex"}}>
                <nav style={{
                    borderRight: "solid 1px",
                    paddingBottom: "24px",
                    marginRight: "24px"
                }}>
                    <NavLink 
                        style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "24px",
                                color: isActive ? "red" : ""
                            }
                        }}
                        to={`/tomato/ag-red-heirloom-cherry`}
                        key="ag-red-heirloom-cherry"
                    >
                        Aerogarden Red Heirloom Cherry
                    </NavLink>

                    <NavLink 
                        style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "24px",
                                color: isActive ? "red" : ""
                            }
                        }}
                        to={`/tomato/tiny-tim`}
                        key="tiny-tim"
                    >
                        Tiny Tim
                    </NavLink>
                </nav>
                <Outlet/>
            </div>
        </div>
    );
}