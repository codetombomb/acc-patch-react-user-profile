import { useEffect, useState } from "react";
import EscButton from "./components/EscButton";
import MyAccount from "./components/MyAccountCard/MyAccount";
import Sidebar from "./components/Sidebar/Sidebar";
import EditProfile from "./components/EditProfile/EditProfile";

const App = () => {
  const userOptions = [
    "My Account",
    "Edit Profile",
  ];
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    phoneNumber: "",
    bannerColor: "",
  });

  const [selectedOption, setSelectedOption] = useState("My Account");

  useEffect(() => {
    fetch("http://localhost:3001/users/1")
      .then((resp) => resp.json())
      .then((data) => setUser({ ...data }));
  }, []);

  const handleSidebarSelection = (option) => {
    setSelectedOption(option);
  }

  const handleUpdateUser = (updatedUser) => {
    setUser({ ...updatedUser });
    setSelectedOption("My Account")
  }

  const onEditClick = () => {
    setSelectedOption("Edit Profile")
  }

  return (
    <div className="App">
      <Sidebar
        userOptions={userOptions}
        selectedOption={selectedOption}
        onSidebarSelection={handleSidebarSelection}
      />
      <section className="main-content">
        <div className="my-account-wrapper">
          <h1>My Account</h1>
          {selectedOption === "My Account" ? (
            <MyAccount user={user} handleEditClick={onEditClick}/>
          ) : (
            <EditProfile  />
          )}
        </div>
        <EscButton />
      </section>
    </div>
  );
}

export default App;
