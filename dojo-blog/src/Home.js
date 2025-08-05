import { useState, useEffect } from 'react';
import BlogList from './BlogList';


function Home () {

    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);
    const [name, setName] = useState('mario');

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch data');
                }
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch( err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            { error && <div> { error } </div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = { blogs } title = "All Blogs!"/>}

        </div>
    );
}

export default Home;