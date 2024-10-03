import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

interface Person {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  email: string;
  telephone: string;
};
   
function App() {
  const [agencies, setAgencies] = useState([]);
  const [person, setPerson] = useState<Person | null>(null);

  const fetchAgencies = async () => {
    const response = await axios.get("http://localhost:3000/api/agencies");
    setAgencies(response.data.agencies);
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
    fetchAgencies()
    fetchPerson()  
  }, []);

  return (
    <>
      <header>Recruitment</header>
      <div className="container">
        <div className="column">
          <h1 id="agencies">Agencies</h1>
          {agencies.map((agency, index) => (
            <ul key={index}>
              <li>{agency}</li>
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

  
export default App
