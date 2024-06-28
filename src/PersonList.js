import React from 'react';

function PersonList({ persons, updatePerson, deletePerson }) {
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>
          <span>{person.name} - {person.state} - {person.phoneNumber}</span>
          <button onClick={() => updatePerson(index, promptUpdate(person))}>更改</button>
          <button onClick={() => deletePerson(index)}>删除</button>
        </div>
      ))}
    </div>
  );
}

const promptUpdate = (person) => {
  const name = prompt("Enter new name", person.name);
  const state = prompt("Enter new state", person.state);
  const phoneNumber = prompt("Enter new phone number", person.phoneNumber);
  return { name, state, phoneNumber };
};

export default PersonList;
