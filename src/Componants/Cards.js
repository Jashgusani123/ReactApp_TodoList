"use client"
import React from 'react'


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