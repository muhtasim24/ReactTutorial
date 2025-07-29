import { useState } from 'react';


function Home () {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'li', author: 'mario', id: 1},
        { title: 'welcome party', body: 'li', author: 'yoshu', id: 2},
        { title: 'Web dev top tips', body: 'li', author: 'mario', id: 3},
    ]);

    return (
        <div className="home">
             {blogs.map( (blog) => (
                <div className='blog-preview' key={ blog.id }>
                    <h2> { blog.title } </h2>
                    <p> Written by { blog.author } </p>

                </div>
             ))}
        </div>
    );
}

export default Home;