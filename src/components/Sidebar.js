import { v4 as uuidv4 } from 'uuid';

function Sidebar({ userOptions }) {
  return (
    <div className="side-bar">
      <div className="options-wrapper">
        <h5 className="side-bar-heading">USER SETTINGS</h5>
        {userOptions.map((option) => (
          <div className="side-bar-option" key={uuidv4()}>{option}</div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
