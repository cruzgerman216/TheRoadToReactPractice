import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1776-711-3434" }
  ]);
  const deletePerson = dname => {
    const newpersonarray = persons.filter(person => person.name != dname);
    setPersons(newpersonarray);
  };
  const [newname, setNewName] = useState("");
  const [newnumber, setNewNumber] = useState("");
  const displayphonebook = persons.map(person => {
    return (
      <div key={person.name}>
        {person.name} {person.number}{" "}
        <button
          onClick={() => {
            deletePerson(person.name);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  // delete person

  //submitting a form
  const addPerson = e => {
    e.preventDefault();
    setPersons([...persons, { name: newname, number: newnumber }]);
    setNewNumber("");
    setNewName("");
  };
  //label value onchange new person name
  const onchangename = e => {
    setNewName(e.target.value);
  };

  const onchangenumber = e => {
    setNewNumber(e.target.value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <label>Name</label> <input value={newname} onChange={onchangename} />
        <label>Number</label>{" "}
        <input value={newnumber} onChange={onchangenumber} />
        <button type="submit">Add Name</button>
      </form>
      <h1>Numbers</h1>
      {displayphonebook}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
//   const [newName, setNewName] = useState("");

//   const displaypeople = persons.map(person => {
//     return <div key={person.name}>{person.name}</div>;
//   });

//   const addPerson = e => {
//     e.preventDefault();
//     var pass = true;
//     var personobject = { name: newName };
//     persons.forEach(function(item, index, array) {
//       if (item.name === personobject.name) {
//         window.alert(`${personobject.name} is already added to phonebook`);
//         pass = false;
//       }
//     });
//     if (pass) {
//       setPersons(persons.concat(personobject));
//       setNewName("");
//       console.log(persons);
//     }
//   };

//   const onchangepersons = e => {
//     setNewName(e.target.value);
//   };
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input value={newName} onChange={onchangepersons} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {displaypeople}
//     </div>
//   );
// };
// export default App;

// import React, { useState } from "react";
// import Note from "./components/Note";

// const App = props => {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNote] = useState("");
//   const [showAll, setShowAll] = useState(true);

//   const notesToShow = showAll ? notes : notes.filter(note => note.important);

//   const rows = () =>
//     notesToShow.map(note => <Note key={note.id} note={note} />);

//   const handleNoteChange = event => {
//     console.log(event.target.value);
//     setNewNote(event.target.value);
//   };

//   const addNote = event => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() > 0.5,
//       id: notes.length + 1
//     };

//     setNotes(notes.concat(noteObject));
//     setNewNote("");
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? "important" : "all"}
//         </button>
//       </div>
//       <ul>{rows()}</ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

// export default App;
