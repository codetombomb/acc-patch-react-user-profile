import { useEffect, useState } from "react";
import "./App.css";
import EscButton from "./components/EscButton";
import MyAccount from "./components/MyAccount";
import Sidebar from "./components/Sidebar";

function App() {
  const [userOptions, setUserOptions] = useState([
    "My Account",
    "Edit Profile",
  ]);
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    phoneNumber: "",
    bannerColor: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/users/1")
      .then((resp) => resp.json())
      .then((data) => setUser({ ...data }));
  }, []);

  return (
    <div className="App">
      <Sidebar userOptions={userOptions} />
      <section className="main-content">
        <div className="my-account-wrapper">
          <h1>My Account</h1>
          <MyAccount
            bannerColor={user.bannerColor}
            avatar={user.avatar}
            displayName={user.displayName}
          />
        </div>
        <EscButton />
      </section>
    </div>
  );
}

export default App;
