import React from "react"

import './NewEntry.css'
import Card from '../UI/Card'
import EntryForm from './EntryForm'

const NewEntry = (props) => {
    const liftStateHandler = (userValue) => {
        props.liftFurther({...userValue, id: Math.random().toString()})
    }

    return (
        <Card className="new-entry__con">
            <EntryForm liftState={liftStateHandler} />
        </Card>
    )
}

export default NewEntry