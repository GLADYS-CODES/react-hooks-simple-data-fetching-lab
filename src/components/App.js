const { useState, useEffect } = require("react");

// create your App component here
function App() {
    const [dogPic, setDogPic] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((result) => {
            setDogPic(result.message);

    });
}, []);


if (!dogPic) return <p>Loading...</p>;

return<img src={dogPic} alt="A Random Dog" />;


}


export default App;