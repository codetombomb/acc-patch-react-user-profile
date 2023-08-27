import { v4 as uuidv4 } from "uuid";
import InfoRow from "./InfoRow";

const InfoContainer = (props) => {
  const infoRows = Object.entries(props);

  return (
    <div className="info-container">
      {infoRows.slice(0, infoRows.length - 1).map((entry) => {
        return (
          <InfoRow
            key={uuidv4()}
            rowName={entry[0]}
            rowValue={entry[1]}
            clickHandler={props.clickHandler}
          />
        );
      })}
    </div>
  );
}
export default InfoContainer;
