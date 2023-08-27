const Avatar = ({ avatar }) => {
  return (
    <>
      <img className="avatar" src={avatar} alt="User Avatar"></img>
      <div className="online-status"></div>
    </>
  );
}
export default Avatar;
