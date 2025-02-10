import React from "react"

import './ErrorModal.css'
import Card from "../UI/Card"

const ErrorModal = (props) => {
    return (
        <div className="error-modal__con">
            <form>
                <div className="error-modal__backdrop" onClick={props.showModal}></div>
                <Card className="error-modal">
                    <div className="modal-txt">Invalid Input</div>
                    <div className="modal-body">
                        <p className="modal-error__txt">{props.message}</p>
                        <div className="modal-submit">
                            <button type="submit" onClick={props.showModal}>Okay</button>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    )
}

export default ErrorModal