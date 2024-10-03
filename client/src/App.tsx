import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [array, setArray] = useState([]);
  const [person, setPerson] = useState<Person | null>(null);

  const fetchFlowers = async () => {
    const response = await axios.get("http://localhost:3000/api/flowers");
    setArray(response.data.flowers);
  };

  const fetchPerson = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/person");
      setPerson(response.data);
    }
    catch (err) {
      console.error("Error fetching person data:", err);
    }
  };

  useEffect(() => {
    fetchFlowers()
    fetchPerson()  
  }, []);

  return (
    <>
      <header>Recruitment</header>
      <div className="container">
        <div className="column">
          <h1 id="flowers">List of Flowers</h1>
          {array.map((flower, index) => (
            <ul key={index}>
              <li>{flower}</li>
            </ul>
          ))}
        </div>
        <div className="column">
          <h1 id="person">Personal Information</h1>
          {person ? (
            <div className="person-info">
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
