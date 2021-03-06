import React, { useState } from "react";
import Form from "./Form";
import Member from "./Member";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: ""
  });

  //Add list of team members
  let membersList = [
    {
      id: 1,
      name: "Jocelyn Moreno",
      email: "Jocelyn@coburn.com",
      role: "Project Manager"
    },
    {
      id: 2,
      name: "Eliott Moreno",
      email: "eliottMor@coburn.com",
      role: "Project Engineer"
    },
    {
      id: 3,
      name: "Sean Coburn",
      email: "SeanCoburn@coburn.com",
      role: "Project Engineer"
    },
    {
      id: 4,
      name: "Jackie Coburn",
      email: "JackieCoburn@coburn.com",
      role: "Project Engineer"
    },
    {
      id: 5,
      name: "JRyan Coburn",
      email: "Jryan@coburn.com",
      role: "Web Developer"
    }
  ];
  //Declare state property for memebers list
  const [members, setMembers] = useState(membersList);
  const isEditing = false;

  //Add a new member to members list
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  //Edit member's list
  const memberToEdit = member => {
    const editMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setForm(editMember);
    isEditing = true;
    console.log(editMember);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form
        addNewMember={addNewMember}
        memberToEdit={memberToEdit}
        form={form}
        setForm={setForm}
        isEditing={isEditing}
        members={members}
      />
      <Member members={members} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
