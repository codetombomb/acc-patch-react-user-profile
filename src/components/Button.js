function Button({size, innerText, clickHandler}) {

  function buttonStyles(){
    const bigButton = {
      backgroundColor: "#5864F2"
    }
    const smallButton = {
      backgroundColor: "#6B6E77"
    }
    if (size === "large"){
      return bigButton
    } else if (size === "small"){
      return smallButton
    }
  }

  return (
    <div className="btn" style={buttonStyles()} onClick={clickHandler}>{innerText}</div>
  )
}
export default Button