import React, { useState } from 'react';


const MemberForm = props => {

  const [member, setMember] = useState([{ 
      name: "", 
      phone: "",
      role: ""
    }]);

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...member,
        id: Date.now()
    }; 

    props.addNewMember(newMember);
    
    setMember({ 
        name: "", 
        phone: "",
        role: ""
    });
  };

  return (
    <form onSubmit={submitForm}>  
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={member.name}
            onChange={changeHandler}
          />
             
          <input
           type="text"
            name="phone"
            placeholder="Phone number"
            value={member.phone}
            onChange={changeHandler}
          />

          <input
           type="text"
            name="role"
            placeholder="Role"
            value={member.role}
            onChange={changeHandler}
          />

        <button>Submit!</button>
    </form>
  );
}

export default MemberForm;