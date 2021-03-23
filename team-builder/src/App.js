import React, { useState } from 'react'
import Form from './Form'
import Person from './Person'
import './index.css';


function App() {
  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }
  
  const teamList = [
    {
      name: 'Leah King',
      email: 'leahking@lambda.com',
      role: 'Designer'
    },
    {
      name: 'Chris King',
      email: 'chrisking@lambda.com',
      role: 'Backend Engineer'
    },
    {
      name: 'Luke King',
      email: 'lukeking@lambda.com',
      role: 'Frontend Engineer'
    }
  ]
  const [teamMembers, setTeamMembers] = useState(teamList)


  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  
  const submitForm = () => {
    const newMember={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }
    setTeamMembers(() => [...teamMembers, newMember])
  }

  return(
    <div className='container'>
      <h1>Team</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
        <Person item={teamMembers} />
      </div>
  )
}


export default App;
