# React PATCH User Profile (Object)

### Deliverables
- Create controlled form: 
    - with a className of edit-profile-form
    - with inputs displaying initial user values for:
        - Display Name
        - Username
        - Email
        - Phone Number
        - Avatar
        - Banner Color (with className - color-picker)
- Create state in the edit profile component that is a copy of the user state passed down from App
- Populate inputs with initial values from user state object
- Create onChange handler that updates controlled form state
- Create onSubmit handler that:
    - Prevents default
    - Sends PATCH or PUT
    - (Pessimistically) Updates state (After response received)        
    - Demo Optimistic rendering
