import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Cards from './Cards';

const Home = (props) => {
    const cardData = props.cardData;
    const setCardData = props.setCardData;
    const setSelectedPageData= props.setSelectedPageData;

    const [searchData, setSearchData] = useState("");

    function changeHandler(event) {
        setSearchData(event.target.value);
    }

    function clickHandler() {

        fetchSearchData();
       
    } 

   async function fetchSearchData(){
    const res = await fetch(` https://jsonplaceholder.typicode.com/users?id=${searchData}`);
    const output = await res.json();
    setCardData(output);
   }

    return (
        <div>
            <div className='flex items-center justify-center p-5 bg-gray-200'>
                <input 
                    type="search" 
                    placeholder='Search by ID ' 
                    className='bg-white border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none focus:border-blue-500'
                    onChange={changeHandler} 
                />
                <button 
                    onClick={clickHandler} 
                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                >
                    <CiSearch />
                </button>
            </div>
            <div>
                <Cards cardData={cardData} setCardData={setCardData} setSelectedPageData={setSelectedPageData}/>
            </div>
        </div>
    );
};

export default Home;


