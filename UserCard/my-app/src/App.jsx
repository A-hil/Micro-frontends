import React from 'react'
import './App.css'
import {UserCard} from './UserCard';

const users = [
  { id: 1, name: 'Александр', age: 25 },
  { id: 2, name: 'Мария', age: 30 },
  { id: 3, name: 'Виктор', age: 22 }
];

export default function App() {
  return (
    <div>
      {users.map((user) => (
        <UserCard 
          key={user.id} 
          name={user.name} 
          age={user.age} 
        />
      ))}
    </div>
  );
}
