import React from 'react'

export function UserCard({ name, age }) {
   return (
    <div className="card">
        <h3>{name} {age} лет</h3>
    </div>
   );
}
