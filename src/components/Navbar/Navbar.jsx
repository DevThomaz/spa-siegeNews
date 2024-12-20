import { Outlet } from "react-router-dom";
import logo from "../../images/R6Logo.png";
import { Button, Nav, ImageLogo,InputSpace} from "./NavbarStyled";


export function Navbar(){
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" 
                    placeholder="Pesquise por um título"/>
                </InputSpace>
                <ImageLogo src={logo} alt="Logo Siege News" />

                <Button>Entrar</Button>
            </Nav>
            <Outlet/>
        </>
    );
}

