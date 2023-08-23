function Button({size, innerText}) {

  function buttonStyles(){
    const bigButton = {
      backgroundColor: "#5864F2",
      width: "fit-content",
      height: "10px"
    }
    if (size === "large"){
      return bigButton
    }
  }

  return (
    <div className="btn" style={buttonStyles()}>{innerText}</div>
  )
}
export default Button