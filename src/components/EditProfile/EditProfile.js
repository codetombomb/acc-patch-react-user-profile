import { useState } from "react";
/*
        --- DELIVERABLES ---
        1. Create controlled form: 
            a. with a className of edit-profile-form
            b. with inputs displaying initial user values for:
                1. Display Name
                2. Username
                3. Email
                4. Phone Number
                5. Avatar
                6. Banner Color (with className - color-picker)
        2. Create state in the edit profile component that is a copy of the user state passed down from App
        3. Populate inputs with initial values from user state object
        4. Create onChange handler that updates controlled form state
        5. Create onSubmit handler that:
            a. Prevents default
STEP 1 -->  b. Sends PATCH or PUT
STEP 2 -->  c. (Pessimistically) Updates state (After response received)        
            d. Demo Optimistic rendering
    */

const EditProfile = ({ user, handleUpdateUser }) => {
  const [userData, setUserData] = useState({ ...user });
  // What props might we need?
  // Make copy of user for controlled form (User data should be filled in already)

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = JSON.parse(JSON.stringify(userData))
    userDataCopy[name] = value;
    setUserData(userDataCopy);
  };

  const handleFormSubmit = (e) => {
    // 1. prevent default
    e.preventDefault()
    // 2. create options object for patch
    const config = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
    }
    // 3. send patch
    fetch("http://localhost:3001/users/1", config)
      .then(resp => resp.json())
      .then(updatedUser => handleUpdateUser(updatedUser))
    // 4. update parent state using response object
  };

  return (
    <div className="edit-profile">
      <form className="edit-profile-form" onSubmit={handleFormSubmit}>
        <label htmlFor="displayName">
          Display Name
          <input
            id="displayName"
            type="text"
            name="displayName"
            value={userData.displayName}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <label htmlFor="username">
          Username
          <input
            id="username"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            id="phoneNumber"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <label htmlFor="avatar">
          Avatar
          <input
            id="avatar"
            type="text"
            name="avatar"
            value={userData.avatar}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <label htmlFor="bannerColor">
          Banner Color
          <input
            id="bannerColor"
            className="color-picker"
            type="color"
            name="bannerColor"
            value={userData.bannerColor}
            onChange={handleInputChange}
            required
          />
        </label>
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
};
export default EditProfile;
