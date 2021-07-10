import React from 'react';
import Review from './Review';

function Reviews({reviews, deleteItem, editItem }) {
    
    return (
        <ol className="review-list">
            {!!reviews.length && reviews.map(review => (
                <Review key={review.id} id={review.id} name={review.name} msg={review.msg} url={review.url} deleteItem={deleteItem} editItem={editItem} />
            ))}
        </ol>
    );
}

export default Reviews;