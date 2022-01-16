import React from 'react'

export default function MnuItem({image, name, price}) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}>
                <h1>{name}</h1>
                <p>${price}</p>
            </div>
        </div>
    )
}
