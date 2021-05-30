import React, {useState} from 'react';
import '/Users/r.lycano07/GitHub_r.lycano07/Voice/voice/src/App.css';

function AppForm() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    title: "",
    subject: "",
    background: "",
  })

  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleTitleInputChange = (event) => {
    setValues({...values, title: event.target.value})
  }
  const handleSubjectInputChange = (event) => {
    setValues({...values, subject: event.target.value})
  }
  const handleBackgroundInputChange = (event) => {
    setValues({...values, background: event.target.value})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.fullName, values.title, values.subject, values.background);
  }

  return (
    <div id="create" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Create a new Discussion</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <input
            onChange={handleFullNameInputChange}
            value={values.firstName}
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
            placeholder="Full Name" 
          />
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
            placeholder="Email Address"
          />
          <input
            onChange={handleTitleInputChange}
            alue={values.title}
            name="title"
            placeholder="Title" 
          />
          <input
            onChange={handleSubjectInputChange}
            value={values.subject}
            name="subject"
            placeholder="Subject" 
          />
          <input
            onChange={handleBackgroundInputChange}
            value={values.background}
            name="background"
            placeholder="Background" 
          />
          <button type="submit" className="login-form-button">
              Submit
          </button>
        </form>
      </div>
    </div>  
  );
}

export default AppForm;