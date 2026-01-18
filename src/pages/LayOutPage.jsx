import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";


export default function LayOutPage(){
    const pages = [
        { label: 'Home', path: '/' },
        { label: 'Flights', path: '/flights' },
        { label: 'Cars', path: '/cars' },
        { label: 'Trains', path: '/trains' },
    ];
    return(
        <>
            <NavBarComponent pages={pages}/>
            <Outlet/>
        </>
    );
}