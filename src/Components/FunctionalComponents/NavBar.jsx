 import React from "react";
 import '../../assets/css/NavBar.css'
 var NavBar = () =>{
    var styling= {
        color:"blue",
        fontSize:"40px",
        textDecoration : "underline"
 }
    return (
        <header>
    <h1 style= {styling}>This is navbar example </h1>
    <h2></h2>
    </header>
    )
}
export default NavBar;