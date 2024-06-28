import React, { useState } from 'react';
import PersonList from './PersonList';
import PersonForm from './PersonForm';

function App() {
  const [persons, setPersons] = useState([]);

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const updatePerson = (index, updatedPerson) => {
    const newPersons = [...persons];
    newPersons[index] = updatedPerson;
    setPersons(newPersons);
  };

  const deletePerson = (index) => {
    const newPersons = persons.filter((_, i) => i !== index);
    setPersons(newPersons);
  };

  return (
    <div className="App">
      <h1>人员列表</h1>
      <PersonForm addPerson={addPerson} />
      <PersonList 
        persons={persons} 
        updatePerson={updatePerson} 
        deletePerson={deletePerson} 
      />
    </div>
  );
}

export default App;
