import React, { useState } from "react";

const Form = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(form);
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChanges}
          value={form.name}
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChanges}
          value={form.email}
        />
        <label>Role</label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Role"
          onChange={handleChanges}
          value={form.role}
        />
        <button type="submit">Add new member</button>
      </form>
    </div>
  );
};
export default Form;
