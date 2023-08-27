import { v4 as uuidv4 } from "uuid";

const Sidebar = ({ userOptions, onSidebarSelection, selectedOption }) => {
  
  const handleSetSelected = ({ target }) => {
    onSidebarSelection(target.textContent);
  }

  return (
    <div className="side-bar">
      <div className="options-wrapper">
        <h5 className="side-bar-heading">USER SETTINGS</h5>
        {userOptions.map((option) => (
          <div
            key={uuidv4()}
            className="side-bar-option"
            onClick={handleSetSelected}
            style={
              selectedOption === option ? { backgroundColor: "#3f4248" } : null
            }
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
