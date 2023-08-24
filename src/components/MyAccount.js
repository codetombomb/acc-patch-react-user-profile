import Avatar from "./MyAccountCard/Avatar";
import Banner from "./MyAccountCard/Banner";
import Button from "./Button";
import InfoContainer from "./MyAccountCard/InfoContainer";

function MyAccount({ bannerColor, avatar, displayName, username, email, phoneNumber }) {
  return (
    <div className="my-account">
      <Banner bannerColor={bannerColor} />
      <Avatar avatar={avatar} />
      <div className="display-name-container">
        <h3>{displayName}</h3>
        <Button size="large" innerText="Edit User Profile" />
      </div>
      <InfoContainer
        displayName={displayName}
        username={username}
        email={email}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}
export default MyAccount;
