import React from "react"

import './Entry.css'
import EntryItem from './EntryItem'
import Card from "../UI/Card"

const Entry = (props) => {
    return (
        <Card className="entry__con">
            {props.users.map((user) => (
                <EntryItem key={user.id} text={user} />
            ))}
        </Card>
    )
}

export default Entry