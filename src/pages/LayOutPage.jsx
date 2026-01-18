import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";


export default function LayOutPage(){
    const pages = [
        { label: 'Home', path: '/' },
        { label: 'Flights', path: '/flights' },
    ];
    return(
        <>
            <NavBarComponent pages={pages}/>
            <Outlet/>
        </>
    );
}