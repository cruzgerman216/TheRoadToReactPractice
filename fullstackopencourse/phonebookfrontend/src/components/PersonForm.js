import React from "react";
import axios from "axios";
import PersonService from "../services/personservice";
const PersonForm = ({
  newname,
  setNewName,
  newnumber,
  setNewNumber,
  persons,
  setPersons,
  message,
  setMessage
}) => {
  const addPerson = e => {
    e.preventDefault();
    let on = true;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newname) {
        on = false;
      }
    }
    if (on) {
      PersonService.create({
        name: newname,
        number: newnumber,
        id: newname
      })
        .then(data => {
          setPersons([...persons, data]);
          setMessage("Added " + newname);
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        })
        .catch(error => {
          setMessage(
            "Person validation failed: name Path 'name' " +
              "(" +
              newname +
              ") is shorter than the minimum allowed length (3"
          );
          console.log(error);
        });
    } else {
      console.log("same name");
      PersonService.update(newname, {
        name: newname,
        number: newnumber,
        id: newname
      }).then(data => {
        let copylist = persons.map(peep => {
          if (peep.id === newname) {
            peep.number = newnumber;
          }
          return peep;
        });

        setMessage("Updated  " + newname);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setPersons(copylist);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const changeName = e => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const changeNumber = e => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };
  return (
    <div>
      <form onSubmit={addPerson}>
        <label>Name</label> <input value={newname} onChange={changeName} />
        <label>Number</label>
        <input value={newnumber} onChange={changeNumber} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonForm;
