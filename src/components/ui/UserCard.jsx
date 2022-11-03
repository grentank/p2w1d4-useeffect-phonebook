import React, { useEffect, useState } from 'react'

export default function UserCard({ user, deleteHandler }) {
    const [bonus, setBonus] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setBonus((prev) => prev + 1)
            console.log('interval', user.name)
        }, 1000)
        return () => clearInterval(intervalId);
    })
  return (
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Bonuses: {bonus}</h5>
            <p className="card-text">{user.name}</p>
            <a href="#" className="btn btn-primary">List phones</a>
            <button
            onClick={() => deleteHandler(user.id)}
            type='button' className="btn btn-danger">X</button>
        </div>
    </div>
  )
}
