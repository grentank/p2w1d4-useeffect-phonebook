import React, { useEffect, useState } from 'react'

export default function AddUserForm({ submitHandler }) {
    const [username, setUsername] = useState('');
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        console.log('Effect ', username)
        // setUsername(username+'1')
    }, [username])
  return (
    <form onSubmit={(e) => submitHandler(e, username)}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
            <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <h1>{counter}</h1>
        <button type="button" onClick={() => setCounter(counter+1)} className="btn btn-info">+1</button>
    </form>
  )
}
