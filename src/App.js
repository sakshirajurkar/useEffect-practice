import {useEffect,useState} from "react";
function App() {
  const [count,setCount] =useState(0);
  const [age,setaAge] = useState(0);
 useEffect (()=>{
  console.log('App component loaded');
 },[]);
 useEffect (()=>{
   console.log ('Count ={count}, Age ={age}');
 },[count,age]);
  return (
     <>
      <h1>localStorage</h1>
      <h2>Count:{count}</h2>
      <h2>Age:{age}</h2>
      <button onClick = {() => {setCount(count+1)}}>Increase Count</button>
      <button onClick = {() => {setCount (count+1)}}>Increase Age</button>
     </>
  );
}

export default App;
