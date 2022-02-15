// https://jsonplaceholder.typicode.com/posts
import { useState, useEffect } from "react";
import { Posts } from "./types/Post";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { api } from "./api";



const App = () =>{
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(()=>{
        loadingPosts();
    }, []);

    const loadingPosts = async () =>{
        setLoading(true);
        let json = await api.getAllPosts();
        setLoading(false);
        setPosts(json);
    }

    const handleAddPost = async (title: string, body: string) =>{
        let json = await api.addNewPost(title,body, 1);
        if(json.id) {
            alert('Adicionado com sucesso')
        } else {
            alert('Ocorreu algum erro!')
        }
    }

    return(
        <div className="p-5">
            {loading && 
            <div>Carregando...</div>
        }
        <PostForm onAdd={handleAddPost}/>    
        {!loading && posts.length > 0 &&
            <>
                <div>Total de Posts: {posts.length}</div>
                {posts.map((item, index)=> (
                    <PostItem data={item} />
                ))}
            </>    
        }
        {!loading && posts.length === 0 &&
            <div>Não há posts para ixibir.</div>
        }
        </div>
    );
}

export default App;

