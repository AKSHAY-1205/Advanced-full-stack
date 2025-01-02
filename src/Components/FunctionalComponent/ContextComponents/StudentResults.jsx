import { useContext } from "react";
import { ThemeProvider } from "../UseContext";

var StudentResults = () =>{
    var result = useContext(ThemeProvider); 
    return(
        <div>
            <h1>Your GPA Result is {result.gpa} and CGPA Result is {result.cgpa}</h1>
        </div>
    )
}
export default StudentResults;