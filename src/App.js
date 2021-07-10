import './App.css';
import React, {useState} from 'react';
import Form from './Components/Form'
import Reviews from './Components/Reviews'
import {usePersistingState} from './hooks/usePersistingState';
import {generateId} from './utils/generateId';
import {getImgUrl} from './utils/generateImgUrl'

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [reviews, setReviews] = usePersistingState([], 'reviews')

  async function onSubmit(name, msg, e) {
    e.preventDefault();
    let id = generateId();
    const url = await getImgUrl(id);
    const newReview = {id, name, msg, url};
    setReviews([...reviews, newReview])
    setIsEditing(false);
  }
  function deleteItem(id) {
    // console.log(`app: deleting id: ${id}`);
    setReviews(reviews.filter(item => item.id !== id))
  } 
  function editItem(id) {
    setIsEditing(true)
    // console.log(`app: editing id: ${id}`);
  } 

  return (
    <div className="app">
      <h2>User Reviews</h2>
      <Reviews deleteItem={deleteItem} editItem={editItem}  reviews={reviews} />
      { !isEditing && <Form onSubmit={onSubmit}  />}
    </div>
  );
}

export default App;
