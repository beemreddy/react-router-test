import { Outlet } from "react-router-dom";

export function Tomato() {
    return(
        <div style={{width: "100%"}}>
            <Outlet/>
        </div>
    );
}