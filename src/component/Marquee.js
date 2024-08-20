import React, { useState, useEffect } from "react";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";
import icon7 from "./images/icon7.png";
import icon8 from "./images/icon8.png";
import icon9 from "./images/icon9.png";
import icon10 from "./images/icon10.png";

function Marquee() {
  const imgarray = [
    { src: icon1 },
    { src: icon2 },
    { src: icon3 },
    { src: icon4 },
    { src: icon5 },
    { src: icon6 },
    { src: icon7 },
    { src: icon8 },
    { src: icon9 },
    { src: icon10 },
  ];
  const [imgArray, setImgArray] = useState(imgarray);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgArray((prevArray) => [...prevArray, ...imgarray]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [imgarray]);

  return (
    <>
      <marquee behavior="scroll" direction="left" scrollamount="4">
        {imgArray.map((item) => {
          return (
            <>
              <img src={item.src} alt="Cooperate" className="mx-4" style={{height:"10rem"}} />
            </>
          );
        })}
      </marquee>
    </>
  );
}

export default Marquee;
