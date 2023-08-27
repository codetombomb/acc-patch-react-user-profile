import Avatar from "./Avatar";
import Banner from "./Banner";
import Button from "../Button";
import InfoContainer from "./InfoContainer";

const MyAccount = ({ user, handleEditClick }) => {

  const { bannerColor, avatar, displayName, username, email, phoneNumber } = user

  return (
    <div className="my-account">
      <Banner bannerColor={bannerColor} />
      <Avatar avatar={avatar} />
      <div className="display-name-container">
        <h3>{displayName}</h3>
        <Button size="large" innerText="Edit User Profile" clickHandler={handleEditClick}/>
      </div>
      <InfoContainer
        displayName={displayName}
        username={username}
        email={email}
        phoneNumber={phoneNumber}
        clickHandler={handleEditClick}
      />
    </div>
  );
}
export default MyAccount;
