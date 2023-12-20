

import './App.css'

import { useEffect, useState } from 'react'
import Watch from './../components/Watch/Watch';

function App() {
 
  const [Watches, setWatches] = useState([]);

  useEffect( () =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  
  },[])

  // const Watches =[
  //   {id: 1, name:'Apple Watch', price: 200},
  //   {id: 1, name:'Samu Watch', price: 200},
  //   {id: 1, name:'Mi Watch', price: 200},
  // ]
  // const Watches =[
    
  //     {
  //       "id": 1,
  //       "name": "Apple Watch Series 7",
  //       "price": 399.99
  //     },
  //     {
  //       "id": 2,
  //       "name": "Samsung Galaxy Watch 4",
  //       "price": 249.99
  //     },
  //     {
  //       "id": 3,
  //       "name": "Garmin Forerunner 945",
  //       "price": 599.99
  //     },
  //     {
  //       "id": 4,
  //       "name": "Fitbit Sense",
  //       "price": 299.95
  //     },
  //     {
  //       "id": 5,
  //       "name": "Fossil Gen 5 Carlyle",
  //       "price": 249.00
  //     }
  //   ]

    
    
  return (
    <>
     
      <h1>Vite + React</h1>
    {
      Watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
    }
    
    
    </>
  )
}

export default App
