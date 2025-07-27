
function Home () {

    const handleClick = (e) => {
        console.log('hello ninja', e.target);
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('mario')}> Click me again</button>
        </div>
    );
}

export default Home;