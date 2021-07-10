import React, {useState} from 'react';

function Form({onSubmit, username='', message = ''}) {
    const [name, setName] = useState(username);
    const [msg, setMsg] = useState(message);

    return (
        <form onSubmit={e => onSubmit(name, msg, e)}>
            <input className="input" placeholder="Your name" type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
            <textarea className="input"  placeholder="Your comment" value={msg}  onChange={e => setMsg(e.target.value)} required />
            <button className="btn btn--primary">Add</button>
        </form>
    );
}

export default Form;