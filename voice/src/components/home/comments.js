import React, {useState} from "react";

function Comments() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })


  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.firstName, values.lastName, values.email);
  }
  return (
    <div >
      <form onSubmit={handleSubmit} >
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Comments;