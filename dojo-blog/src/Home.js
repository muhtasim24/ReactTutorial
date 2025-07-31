import { useState } from 'react';
import BlogList from './BlogList';


function Home () {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'li', author: 'mario', id: 1},
        { title: 'welcome party', body: 'li', author: 'yoshu', id: 2},
        { title: 'Web dev top tips', body: 'li', author: 'mario', id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs = { blogs } title = "All Blogs!" />
        </div>
    );
}

export default Home;