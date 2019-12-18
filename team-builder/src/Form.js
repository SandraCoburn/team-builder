import React, { useState } from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" />
        <label>Email</label>
        <input type="text" placeholder="Email" />
        <label>Role</label>
        <input type="text" placeholder="Role" />
        <button>Add new member</button>
      </form>
    </div>
  );
};
export default Form;
