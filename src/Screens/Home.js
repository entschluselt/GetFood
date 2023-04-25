import React from 'react'
import NavBar from '../Components/navbar'
import Footer from '../Components/Footer'
export default function
  () {
  return (
    <div>
      <div> <NavBar /> </div>
      <div>
        <div ClassName="card mt-3" style={{"width": "18rem"}}>
          <img src="..." ClassName="card-img-top" alt="..."/>
            <div ClassName="card-body">
              <h5 ClassName="card-title">Card title</h5>
              <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
        </div>
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
