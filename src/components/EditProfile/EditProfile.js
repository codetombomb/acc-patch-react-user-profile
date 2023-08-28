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
  // Make copy of user for controlled form (User data should be filled in already)

  const handleInputChange = () => {
    // Use the target name and value to update local user state
  }

  const handleFormSubmit = (e) => {
    // 1. prevent default
    // 2. create options object for patch
    // 3. send patch
    // 4. update parent state using response object
  }

  return (
    <div className="edit-profile">
      {/* WRITE CODE HERE */}
    </div>
  );
}
export default EditProfile;
