//import React from "react";
import '../../assets/css/Home.css'
var Home = () =>{
    var styling = {
        fontSize: "25px",
        color: "blue",
        textDecoration: "underline",
        textAlign: "center",
    }
    var style = {
        fontSize: "25px",
        color: "red",
        textAlign: "center",
    }
    return(
        <header>
            <h1 style={styling}>This is Home Page</h1>
            <h2 id='idSEg' style={style}>Testing Styling</h2>
            <h1 className='box-model'>Hello KEC</h1>
        </header>
    )
}
export default Home;

