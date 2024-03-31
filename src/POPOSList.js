// src/POPOSList.js
import React from "react"
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

// function POPOSList() {
//     return (
//       <div>
//         <h1>Keep your eye on this space for future content...</h1>
//       </div>
//     )
//   }
function POPOSList() {
  const spaces = data.map(( { title, address, images, hours} ) => {
    return (
      <POPOSSpace
        key={title} // the title can be a key
        name={title}
        address={address}
        image={images[0]}
        hours={<div className="hours">{hours}</div>}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList