import { Outlet } from "react-router-dom";

export function Radish() {
    return(
        <div style={{width: "100%"}}>
            <Outlet/>
        </div>
    );
}