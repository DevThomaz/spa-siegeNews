import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPosts, getTopPost } from "../../services/postsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import Cookies from "js-cookie";

export default function Home(){
    const [posts, setPosts] = useState([])
    const [topPost, setTopPost] = useState({})

    async function findPost(){
        const postsResponse = await getAllPosts();
        setPosts(postsResponse.data.results); 

        const topPostsResponse = await getTopPost();
        setTopPost(topPostsResponse.data.news);
    }

    useEffect(() => {
        findPost();
    },[]);


    return (
        <>
            <HomeHeader>
            <Card 
                top={true}
                key={topPost?.id} 
                title={topPost?.title} 
                text={topPost?.text}
                banner={topPost?.banner}
                likes={topPost?.likes}
                comments={topPost?.comments}            
                />
            </HomeHeader>
            <HomeBody >
            {posts.map((item) => (
                <Card 
                key={item.id} 
                title={item.title} 
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}            
                />
             ))}

            </HomeBody>
        </>
    );
}