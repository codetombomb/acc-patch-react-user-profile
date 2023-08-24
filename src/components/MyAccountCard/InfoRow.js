import Button from '../Button'
function InfoRow({ rowName, rowValue }) {
  return (
    <div className="info-row">
      <div className="row-name-value-wrapper">
        <h4 className="info-row-name">{rowName}</h4>
        <p>{rowValue}</p>
      </div>
      <Button size="small" innerText="Edit"/>
    </div>
  );
}
export default InfoRow;
