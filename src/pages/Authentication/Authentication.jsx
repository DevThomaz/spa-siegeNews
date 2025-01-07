import { useForm } from "react-hook-form";
import {Button} from "../../components/Button/Button"
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AutheticationStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signin, signup } from "../../services/userServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Authentication(){
    const {
        register:registerSignup,
        handleSubmit:handleSubmitSignup,
        formState:{ errors:errorsSignup },
    } = useForm({resolver: zodResolver(signupSchema)});

    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState:{ errors: errorsSignin},
    } = useForm({resolver: zodResolver(signinSchema)});

    const navigate = useNavigate();

    async function inHandleSubmit(data) {
        try {
            console.log("Iniciando login com:", data);
            const responseData = await signin(data);
            
            if (!responseData || !responseData.token) {
                console.error("Resposta inválida do servidor:", responseData);
                return;
            }
            
            Cookies.set("token", responseData.token, { expires: 1 });
            navigate("/");
        } catch (error) {
            console.error("Erro durante o login:", error);
        }
    }
    
    async function upHandleSubmit(data) {
        try {
            console.log("Iniciando cadastro com:", data);
            const responseData = await signup(data);
            
            if (!responseData || !responseData.token) {
                console.error("Resposta inválida do servidor:", responseData);
                return;
            }
            
            Cookies.set("token", responseData.token, { expires: 1 });
            navigate("/");
        } catch (error) {
            console.error("Erro durante o cadastro:", error);
        }
    }
    return(
        <AuthContainer>
             <Section type="signin">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    register={registerSignin}
                    />
                    {errorsSignin.email &&(
                        <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
                    )}
                    <Input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    register={registerSignin}
                    />
                    {errorsSignin.password &&(
                        <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
                    )}
                    <Button type="submit" text="Entrar"/>
                </form>
             </Section>
             <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup}/>
                    {errorsSignup.name &&(
                        <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
                    )}
                    <Input type="email" placeholder="Email" name="email" register={registerSignup}/>
                    {errorsSignup.email &&(
                        <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
                    )}
                    <Input type="password" placeholder="Password" name="password" register={registerSignup}/>
                    {errorsSignup.password &&(
                        <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
                    )}
                    <Input type="password" placeholder="Confirm password" name="confirmPassword" register={registerSignup}/>
                    {errorsSignup.confirmPassword &&(
                        <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
                    )}
                    <Button type="submit" text="Cadastrar"/>
                </form>
             </Section>
        </AuthContainer>
    );
}