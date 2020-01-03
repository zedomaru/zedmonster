import React from 'react'
import './SearchField.css'

const SearchField = (props) => {
    return (
        <div>
            <input className="search" type="search" placeholder={props.placeholder} onChange={props.handleChange}/>
        </div>
    )
}

export default SearchField