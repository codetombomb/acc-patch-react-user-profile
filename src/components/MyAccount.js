import Avatar from "./MyAccountCard/Avatar";
import Banner from "./MyAccountCard/Banner";
import Button from "./Button";

function MyAccount({ bannerColor, avatar, displayName }) {
  return (
    <div className="my-account">
      <Banner bannerColor={bannerColor} />
      <Avatar avatar={avatar} />
      <div className="display-name-container">
        <h3>{displayName}</h3>
        <Button size="large" innerText="Edit User Profile"/>
      </div>
    </div>
  );
}
export default MyAccount;
