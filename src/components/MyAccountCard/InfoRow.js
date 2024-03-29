import Button from '../Button'
const InfoRow = ({ rowName, rowValue, clickHandler }) => {
  return (
    <div className="info-row">
      <div className="row-name-value-wrapper">
        <h4 className="info-row-name">{rowName}</h4>
        <p>{rowValue}</p>
      </div>
      <Button size="small" innerText="Edit" clickHandler={clickHandler}/>
    </div>
  );
}
export default InfoRow;
