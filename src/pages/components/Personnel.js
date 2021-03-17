import React from 'react'
import { BsThreeDots } from 'react-icons/bs';

function Personnel(props) {

    const setBirthdayFormat = date => {
        const DD = date.substring(8, 10);
        const MM = date.substring(5, 7);
        return DD + "-" + MM;
    }

    return (
        <div className="personnel-container">
            <div className="personnel-id">
                <h3>Personnel ID: </h3>
                <p className="pid">{props.login.uuid}</p>
                <BsThreeDots size="30px" style={{cursor: 'pointer'}} />
            </div>
            <hr />
            <div className="personnel-img">
                <img src={props.picture.large} alt='profile' />
            </div>
            <div className="personnel-name">
                <h4>Name</h4>
                <p>{props.name.title + ' ' + props.name.first + ' ' + props.name.last}</p>
            </div>
            <div className="personnel-telp">
                <h4>Telephone</h4>
                <p>{props.phone}</p>
            </div>
            <div className="personnel-birthday">
                <h4>Birthday</h4>
                <p>{setBirthdayFormat(props.dob.date)}</p>
            </div>
            <div className="personnel-email">
                <h4>Email</h4>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Personnel
