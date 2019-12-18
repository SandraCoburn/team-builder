import React, { useState } from "react";
import Form from "./Form";
import Member from "./Member";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Sean Coburn",
      email: "SeanCoburn@coburn.com",
      role: "Project Engineer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team </h1>
      <Form addNewMember={addNewMember} />
      <Member members={members} />
    </div>
  );
}

export default App;
