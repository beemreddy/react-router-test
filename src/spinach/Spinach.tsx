import { Outlet } from "react-router-dom";

export function Spinach() {
    return(
        <div style={{width: "100%"}}>
            <Outlet/>
        </div>
    );
}