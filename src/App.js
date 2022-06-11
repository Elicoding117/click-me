// import {useState} from 'react'
// export default function App() {
//   const [closed, setClosed] = useState(false)
//   return (
    
//     <div>
//       <p> Guess What?</p>
//       <button onClick={() => setClosed(!closed)}>
//         What?
//       </button>
//       <h1>{closed ? "Chicken Butt" : ""}</h1>
//     </div>
//   )
// }
import {useState} from 'react'
export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p> Guess What?</p>
      <button onClick={() =>
        setCounter(counter+1)
      }>What?</button>
      <h1> Chicken Butt: {counter}</h1>
    </div>
  )
}