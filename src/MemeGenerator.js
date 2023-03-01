import React, { useEffect, useState } from 'react';

const MemeGeneraor = () => {
  const [input, setInput] = useState({
    topText: '',
    bottomText: '',
    randomImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8qL4tr7Lm1AHH6x31gHTYJIEe6Ej_KcqXCGUzLmj&s',
  });
  const [image, setImage] = useState([]);

  console.log(image, '10');
  const { topText, bottomText } = input;

  const Changehandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  const getImage = () => {
    const imageArray = image.data.memes;
    const randomnumber = Math.floor(Math.random() * imageArray.length);
    const { url } = imageArray[randomnumber];
    setInput((previmage) => ({ ...previmage, randomImage: url }));
    console.log(input.randomImage, '3030');
  };
  return (
    <div>
      <h3 className="memeheader"> Meme Generator </h3>
      <div className="inputfields">
        <label> Top Text :</label>
        <input
          type="text"
          className="toptext"
          placeholder="enter the top text"
          name="topText"
          value={topText}
          onChange={Changehandler}
        />

        <label> Bottom Text :</label>
        <input
          type="text"
          className="bottomtext"
          placeholder="enter the bottom text"
          name="bottomText"
          value={bottomText}
          onChange={Changehandler}
        />
      </div>
      <div className="emmegenerator">
        <button onClick={getImage} className="imggenbtn">
          {' '}
          Change Image of Meme{' '}
        </button>
      </div>

      <div className="memeImage">
        <img src={input.randomImage} alt="Random Image " id="memeimage" />
        <h3 className="toptextdisplay"> {topText} </h3>
        <h3 className="bottomtextdisplay"> {bottomText} </h3>
      </div>
    </div>
  );
};

export default MemeGeneraor;
