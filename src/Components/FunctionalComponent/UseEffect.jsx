import { useEffect, useState } from "react";
import axios from 'axios';

var UseEffect = () => {
    // var [text, setText] = useState("Kongu");
    // useEffect(()=>{
    //     console.log(text)
    //     setText("KEC")
    // },[text])
    // // },[])
    // return(
    //     <section>
    //         <h1> Use Effect Example </h1>
    //         <input type="text" placeholder="Enter your Text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    //         <h2>Text typed is {text}</h2>
    //     </section>
    // )
    var [post, setPost] = useState([])
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((res) => {
            console.log(res.data)
            setPost(res.data)
        })
            .catch((err) => console.log(err))
    }, []);
    return (
        <section>
            <h1>Fetching Data from json Placeholder API </h1>
            <h2>Posts are</h2>
            {/* <ul>
                {post.map((element) => (<h5 key={element.id}>{element.title}</h5>))}
            </ul> */}
            <ol>
                {post.map((data)=> (
                    <li key={data.userId}>{data.title}</li>
                ))}
            </ol>
        </section>
    )
}
export default UseEffect;