import { useState, useEffect } from 'react';
import BlogList from './BlogList';


function Home () {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'li', author: 'mario', id: 1},
        { title: 'welcome party', body: 'li', author: 'yoshu', id: 2},
        { title: 'Web dev top tips', body: 'li', author: 'mario', id: 3},
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('use effect ran');
        console.log(blogs);
    }, [ name ]);

    return (
        <div className="home">
            <BlogList blogs = { blogs } title = "All Blogs!" handleDelete = {handleDelete}/>
            <button onClick={ () => setName('luigi')}>Change Name</button>
            <p> { name } </p>
        </div>
    );
}

export default Home;