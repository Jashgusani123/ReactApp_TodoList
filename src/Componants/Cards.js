"use client"
import React, {useState} from 'react'


const Cards = ({renderval}) => {
    
    return (
        <>
                <div className='cards_div'>
                    <ul>{renderval}</ul>
                </div>
            
        </>
    )
}

export default Cards