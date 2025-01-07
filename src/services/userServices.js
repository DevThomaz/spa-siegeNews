import axios from "axios";

const baseURL = "http://localhost:3000";

export async function signup(data) {
    try {
        const { confirmPassword, ...signupData } = data;
        
        const body = {
            ...signupData,
            username: generateUserName(data.name),
            avatar: "https://i.imgur.com/xmI2QAo.jpg",
            background: "https://i.imgur.com/20eZQ.jpg",
        };

        
        console.log("Dados enviados:", body);
        
        const response = await axios.post(`${baseURL}/user/`, body);
        console.log("Resposta do servidor:", response.data);
        return response.data; 
    } catch (error) {
        console.error("Erro detalhado:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        throw error;
    }
}

export async function signin(data) {
    try {
        console.log("Dados de login enviados:", data);
        const response = await axios.post(`${baseURL}/auth`, data);
        console.log("Resposta do login:", response.data);
        return response.data; 
    } catch (error) {
        console.error("Erro no login:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        throw error;
    }
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}