import React, { useEffect, useState } from 'react'
import AddUserForm from '../ui/AddUserForm'
import UserCard from '../ui/UserCard'

export default function MainPage({ initAllUsers }) {
    const [catImg, setCatImg] = useState(null);
    const [allUsers, setAllUsers] = useState(initAllUsers || []);
    const [controller, setController] = useState(new AbortController())
    useEffect(() => {
        const {signal} = controller;
        fetch('https://random.dog/woof.json', {signal})
        .then((res) => res.json())
        .then((data) => {
            alert('11111111')
            setCatImg(data.url)
        })
        return () => controller.abort()
    }, [])
    const submitHandler = (e, username) => {
        e.preventDefault();
        fetch('/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: username})
        })
        .then((res) => res.json())
        .then((newUser) => setAllUsers((prev) => [...prev, newUser]))
    }
    const deleteHandler = (id) => {
        fetch('/api/v1/users/'+id, {
            method: 'DELETE'
        })
        .then(() => setAllUsers((prev) => prev
        .filter((user) => user.id !== id)))
        .catch(console.log)
    }
  return (
    <>
        <div className='row'>
            <button onClick={() => controller.abort()} type='button' className='btn btn-danger'>CANCEL</button>
            <img src={catImg} style={{width: '300px'}}/>
        </div>
        <div className='row'>
            <AddUserForm submitHandler={submitHandler}/>
        </div>
        <div className='row'>
            {allUsers.map((el) => <UserCard deleteHandler={deleteHandler} user={el} key={el.id} />)}
        </div>
    </>
  )
}
