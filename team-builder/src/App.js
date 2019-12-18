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

  let teamMembers = [];
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
      <Form />
      <Member members={members} />
    </div>
  );
}

export default App;
