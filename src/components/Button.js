function Button({size, innerText}) {

  function buttonStyles(){
    const bigButton = {
      backgroundColor: "#5864F2"
    }
    const smallButton = {
      backgroundColor: "#6B6E77"
    }
    if (size === "large"){
      return bigButton
    } else if (size == "small"){
      return smallButton
    }
  }

  return (
    <div className="btn" style={buttonStyles()}>{innerText}</div>
  )
}
export default Button