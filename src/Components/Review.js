import Form from './Form';
import React, {useState} from 'react';

function Review({id, name, msg, url, deleteItem, editItem}) {
    const [isEditing, setIsEditing] = useState(false);
    function deleteReview() {
        console.log(`deleting id: ${id}`);
        deleteItem(id);
    }

    function editReview() {
        console.log(`editing id: ${id}`);
        setIsEditing(true);
        editItem(id)
    }
    return (
        <li className={isEditing ? 'review-item-edit' : 'review-item'}>
            {isEditing ? <Form username={name} message={msg} /> : (
                <>
                <img alt="avatar" src={url} />
                <div className="item-name">{name}</div>
                <div className="item-msg">{msg}</div>
                <div className="btn-group">
                    <button className="btn" type="button" onClick={editReview}>Edit</button>
                    <button className="btn" type="button" onClick={deleteReview}>Delete</button>
                </div>
                </>
            )
        }
            
        </li>
    ); 
}

export default Review;