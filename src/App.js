import React, { useState, useEffect, Link } from 'react'

import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom"
import UniqueData from './components/uniqueData';
import Home from './components/Home';


const App = () => {


  const [cardData, setCardData] = useState([]);

  const [selectedPageData, setSelectedPageData] = useState("");
  console.log(selectedPageData)

  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await fetch(' https://jsonplaceholder.typicode.com/users');
        const output = await res.json();
        //save data into a varible
        setCardData(output);
      }
      catch (error) {
        alert("something went wrong")
      }

    }
    fetchData()
  }, [])


  return (



    <div className='min-h-screen  bg-white flex flex-col'>



      <Routes>
        <Route path='/' element={<Home cardData={cardData} setCardData={setCardData} setSelectedPageData={setSelectedPageData}/>}/>
        <Route path='/uniqueData' element={<UniqueData selectedPageData={selectedPageData} />} />
      </Routes>

   
    </div>
  )
}

export default App
