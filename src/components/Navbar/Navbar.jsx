import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/R6Logo.png";
import { Nav, ImageLogo,InputSpace, ErrorSpan} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { userLogged } from "../../services/userServices";


export function Navbar(){
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: zodResolver(searchSchema)
    }); 
    const navigate = useNavigate();

    function onSearch(data){
        const {title} = data;
        navigate(`search/${title}`);
        reset();
    }
    function goAuth(){
        navigate("/auth")
    }

    async function  findUserLogged() {
    try{
        const response = await userLogged();
        console.log(response);
    }catch(error){
        console.log(error);
    }     
    }

    useEffect(() => {
        if(Cookies.get("token")) findUserLogged();
    }, [])

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                        <input {...register("title")} type="text" 
                        placeholder="Pesquise por um título"/>
                    </InputSpace> 
                </form>
                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Siege News" />
                </Link>
                <Link to="/auth">
                <Button onClick={goAuth} type="button" text="entrar"/>
                </Link>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet/>
        </>
    );
}

