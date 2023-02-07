import React, {useEffect, useState} from "react";


const RulesPage = () => {


    const [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setDogImage(data.message))
    }, [])
    return (
        <div className='bg-black h-screen '>
            <div className="App">
                {/* 5. Using *dogImage as* the *src* for our image*/}
                {dogImage && <img src={dogImage}></img>}
            </div>
        </div>
    );

};

export default RulesPage;