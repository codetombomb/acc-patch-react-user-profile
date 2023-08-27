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
            c. with onSubmit handler that 
                1. Prevents default
                2. (Pessimistically) Updates state - PATCH and PUT
    */

const EditProfile = ({ user, handleUpdateUser }) => {
  const [userData, setUserData] = useState({ ...user });
  //   const [updatedProps, setUpdatedProps] = useState({})

  const handleInputChange = ({ target }) => {
    const updatedUser = { ...userData };
    updatedUser[target.name] = target.value;
    setUserData(updatedUser);
    // setUpdatedProps({...updatedProps, [target.name]: target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    fetch("http://localhost:3001/users/1", config)
      .then((resp) => resp.json())
      .then((user) => handleUpdateUser(user));
  }

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
}
export default EditProfile;
