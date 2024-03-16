import React from 'react'
import MainCard  from './mainCard';

const Cards = (props) => {
  let cardData = props.cardData;
  let setCardData=props.setCardData;
  let setSelectedPageData=props.setSelectedPageData;

 

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {

          cardData.map((cardes) => {

            return <MainCard key={cardes.id} cardes={cardes} cardData={cardData}
             setCardData={setCardData} 
             setSelectedPageData={setSelectedPageData}/>
          })
        }
      </div>
    </div>
  )
}

export default Cards