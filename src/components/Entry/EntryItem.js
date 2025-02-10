import React from "react"

import './EntryItem.css'

const EntryItem = (props) => {
    return (
        <div className="entry-item">{`${props.text.name}  (Age: ${props.text.age})`}</div>
    )
}

export default EntryItem