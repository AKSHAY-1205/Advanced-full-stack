import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom';

var NavBar = () =>{
    return(
        <header style={{padding:5}}>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/useeffect" className='link'>UseEffect</Link></li>
                    <li><Link to="/useref" className='link'>UseRef</Link></li>
                    <li><Link to="/usecontext" className='link'>UseContext</Link></li>
                    <li><Link to="/usememo" className='link'>UseMemo</Link></li>
                    <li><Link to="/userefnumber" className='link'>UseRefNumber</Link></li>
                    <li><Link to="/useeffectimages" className='link'>UseEffectImages</Link></li>
                    <li><Link to="/signup" className='link'>Signup</Link></li>
                    <li><Link to="/login" className='link'>Login</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;