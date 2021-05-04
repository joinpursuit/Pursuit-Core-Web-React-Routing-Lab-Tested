import React from 'react'

export default function Dog({dog, getDoggo}) {
    return (
        <div>
            <img
                src={dog}
                alt='randodog' />
            <button onClick={getDoggo}>New Dog</button>
        </div>
    )
}
