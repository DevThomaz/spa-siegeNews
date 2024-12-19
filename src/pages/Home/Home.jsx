import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPosts } from "../../services/postsServices.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home(){
    const [news, setNews] = useState([])

    async function findAllPosts(){
        const response = await getAllPosts();
        setNews(response.data.results); 
    }

    //findAllPosts(); 

    useEffect(() => {
        findAllPosts();
    },[])


    return (
        <>
            <Navbar/>
            <HomeBody >
            {news.map((item) => (
                <Card 
                key={item.id} 
                title={item.title} 
                text={item.text}
                banner={item.banner}
                likes={item.likes.length}
                comments={item.comments.length}            
                />
             ))}

            </HomeBody>
        </>
    );
}