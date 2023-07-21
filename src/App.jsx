import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Navbar(){
  return(
    <div className='Navbar'>
      <h1>The Recipie Stash</h1>
     
    <p>This is the navbar</p>
    </div>
  )
}
function Searchbar(){
  const [filtertext, setfiltertext] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setfiltertext(e.target.value);
  };
  
  if (searchInput.length > 0) {
      recipies.filter((recipie) => {
      return recipie.name.match(filtertext);
  });
  }
  return(<>
  <input placeholder="Search here" 
  value={filtertext}
   onChange ={handleChange}></input>
   </>)
}
function Footer(){
  return (<>
  <p>This is the footer</p></>)
}
function Main({recipies}){
  const List= recipies.map(recipie=>
    <div className='Recipie-List' id={recipie.id}>
    <h3>{recipie.name}</h3>
    <p>{recipie.procedure}</p>
    </div>
    )
  return(<>
  <p>This is the main page haha</p>
  <p>{List}</p>
  
  
  </>)
}
function App() {
 
  
  return (
    <>
    <Navbar />
    <Searchbar />
   <Main recipies={recipies}/>
   
   <Footer />
    </>
  )
}
const recipies=[  { id: 0, name:'Omelet', procedure:'fhfdiffjddjdfdshkskdkjdksndkjdfbvv....' },
{ id:1,name:'maggi',procedure:'the procedure to make maggi is as follows'}]
    
  ;

export default App
