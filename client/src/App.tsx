import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [array, setArray] = useState([]);
  const [person, setPerson] = useState<Person | null>(null);

  const fetchFlowers = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setArray(response.data.flowers);
  };

  const fetchPerson = async () => {
    try {
      const res = await fetch('/api/person');
      const data = await res.json();
      setPerson(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFlowers()
    fetchPerson()
  }, []);

  return (
    <>
      <header>
        <h1>Vite and Express</h1>
      </header>
      <div className="flowers">
        <h2>List of Flowers</h2>
        {array.map((flower, index) => (
          <ul key={index}>
            <li>{flower}</li>
          </ul>
        ))}
      </div>
      <div className='personal-details'>
        <h2>Personal Information</h2>
        {person ? (
          <div>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Age:</strong> {person.age}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Occupation:</strong> {person.occupation}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Telephone:</strong> {person.telephone}</p>
          </div>
          ) : (
          <p>Loading...</p>
        )}
        </div>
    </>
  );
}

interface Person {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  email: string;
  telephone: string;
};
   
  
export default App
