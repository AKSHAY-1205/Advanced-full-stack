// import { useRef, useEffect, useState } from "react";

// var UseRefNumber = () =>{
//     const [name, setName] = useState('')
//     const renderCount = useRef(0)

//     useEffect(() =>{
//         renderCount.current = renderCount.current + 1;
//     })

//     return(
//         <section>
//             <input value={name} onChange={e => setName(e.target.value)}/>
//             <div>College name is {name}</div>
//             <div>I rendered {renderCount.current}</div>
//         </section>
//     )
// }
// export default UseRefNumber;