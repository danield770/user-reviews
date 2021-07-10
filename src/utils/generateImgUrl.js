const imgGen = require('@dudadev/random-img');

export const getImgUrl = (id) => {
 const gender = Math.random() < 0.5 ? 'men' : 'women';
 console.log(`imgurl: id=${id} gender=${gender}`);
 return new Promise(resolve => {
    imgGen({ gender, id }).then(avatarUrl => resolve(avatarUrl))
 }) 
}