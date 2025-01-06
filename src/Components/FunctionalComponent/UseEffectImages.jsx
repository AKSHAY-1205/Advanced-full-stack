import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectImages = () => {
  var [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => {
        console.log(res.data.slice(0,99));
        setPics(res.data.slice(0,99));
      })
      .catch((err) => console.log(err));
  }, [pics]);

  return (
    <section style={{padding:5}}>
      <h1>Images obtained from API using UseEffect</h1>
      {pics.map((element)=>{
        return <img key={element.id} src={element.url} width={40} height={40}></img>
      })}
    </section>
  );
};

export default UseEffectImages;
