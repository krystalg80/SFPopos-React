// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

function POPOSList() {
    
    const spaces = data.map(({ title, address, images, hours }, i) => (
        <POPOSSpace
            key={title} // The title could be a key
            id={i} // Assuming you want to pass the index as the id
            name={title}
            address={address}
            image={images[0]}
            hours={hours} // add a new prop for hours here 
        />
    ));

    return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList
