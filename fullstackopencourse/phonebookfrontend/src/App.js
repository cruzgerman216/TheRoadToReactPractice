import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import PersonService, { getAll } from "./services/personservice";
import Notification from "./Notification";
import "./index.css";
function App() {
  const [persons, setPersons] = useState([]);
  const [newname, setNewName] = useState("");
  const [newnumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  const getfilter = persons.filter(person => {
    let copyfilter = filter;
    copyfilter = copyfilter.split("");
    let copyperson = persons;
    copyperson = person.name.split("");
    let on = true;
    for (let i = 0; i < copyfilter.length; i++) {
      if (copyfilter[i] == person.name[i]) {
      } else {
        i = copyfilter.length;
        on = false;
      }
      if (on && i + 1 === copyfilter.length) {
        return person;
      }
    }
  });
  //create a newstate
  useEffect(() => {
    console.log("effect");
    PersonService.getAll()
      .then(initialPeople => setPersons(initialPeople))
      .catch(error => console.log(error));
  }, []);

  const changenumber = e => {};
  const displaypersons = persons.map(person => {
    return (
      <div key={person.name}>
        {person.name} {person.number}{" "}
        <button
          onClick={() => {
            PersonService.deleteperson(person.id)
              .then(list => {
                if (persons.length === 1) {
                  setPersons([]);
                } else {
                  let copylist = persons.filter(peep => peep.id != person.id);
                  setPersons(copylist);
                }
              })
              .catch(error => {
                setMessage("delete error");
                setTimeout(() => {
                  setMessage(null);
                }, 5000);
                let copylist = persons.filter(peep => peep.id != person.name);

                setPersons(copylist);
              });
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  console.log(persons);

  const searchpersons = getfilter.map(person => {
    return (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    );
  });
  let cfilter = filter.split("");

  const getmodifiedperson =
    cfilter.length === 0 ? (
      <Persons persons={displaypersons} />
    ) : (
      <Persons persons={searchpersons} />
    );
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newname={newname}
        setNewName={setNewName}
        newnumber={newnumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        message={message}
        setMessage={setMessage}
      />
      <h3>Numbers</h3>
      {getmodifiedperson}
    </div>
  );
}

export default App;
