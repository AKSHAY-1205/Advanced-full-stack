const About = (props) =>{
    var styling = {
        fontSize: "25px",
        color: "black",
        textAlign: "center",
    }
    return(
        <section style={{padding:5}}>
            <h1>This is About Page</h1>
            <h2 style={styling}>Learning Props</h2>
            {/*eslint-disable-next-line react/prop-types*/}
            <h2>I am Studying in {props.college} College</h2>
           {/*eslint-disable-next-line react/prop-types*/}
            <h3>Other Colleges: {props.clg1}, {props.clg2}</h3>
        </section>
    )
}
export default About;