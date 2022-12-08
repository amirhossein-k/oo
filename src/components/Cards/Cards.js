import React from 'react'
import '../../styles/Cards.css'
import {Cars} from '../../untils/Cars'
import cash_logo from 'images/cash.svg'
import car_logo from 'images/carlogo.svg'
// import ShowMore from './ShowMore'

const Cards = () => {
  return (
<>
    <div className='container_product'>
      
      {
        Cars.map(item=>{
          return(
            <div className='pruduct' key={item.id}>
              <img src={`${item.image}`} />
              <p className='name'>{item.name}</p>
              <div className='box'>
                  <span className='price'> <img src={cash_logo}/> {item.price} toman </span>
                  <span className='catagory'><img src={car_logo}/> {item.catagory}</span>
              </div>
            </div>
          )
        })
      }

    </div>
    {/* <div className='more'>
      <ShowMore>Show All Cars</ShowMore>
    </div> */}
</>
)
}

export default Cards