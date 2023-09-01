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


const EditProfile = () => {
  // What props might we need?
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
      {/* CREATE FORM HERE! */}
    </div>
  );
}
export default EditProfile;
