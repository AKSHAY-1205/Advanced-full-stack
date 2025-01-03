import "../../assets/css/NavBar.css"

var Footer = () =>{
    return (
        <section style={{padding:5}}>
        <div className="Footer">
        <div>
            <h3>Learn React</h3>
            <p className="link">React</p>
            <p className="link">Basics</p>
            <p className="link">Components</p>
        </div>

        <div>
            <h3>FullStack</h3>
            <p className="link">Explore</p>
            <p className="link">Advanced JavaScript</p>
            <p className="link">FullStack</p>
            <p className="link">React Demo</p>
        </div>

        <div>
            <h3>References</h3>
            <p className="link">Video Tutorial</p>
            <p className="link">JavaScript</p>
            <p className="link">React Installation</p>
        </div>

        <div>
            <h3>Components</h3>
            <p className="link">Node JS</p>
            <p className="link">Visual Studio</p>
            <p className="link">Vite-React</p>
            <p className="link">Sources</p>
        </div>

        <div>
            <h3>More</h3>
            <p className="link">Contact</p>
            <p className="link">Support</p>
            <p className="link">Location</p>
        </div>
        </div>
        </section>
    )

}
export default Footer;