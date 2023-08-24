import InfoRow from "./InfoRow"

function InfoContainer(props) {

  return (
    <div className="info-container">
      {Object.entries(props).map((entry) => {
        return <InfoRow rowName={entry[0]} rowValue={entry[1]}/>
      })}
    </div>
  )
}
export default InfoContainer