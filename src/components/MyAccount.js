import Avatar from "./MyAccountCard/Avatar"
import Banner from "./MyAccountCard/Banner"

function MyAccount({bannerColor, avatar}) {
  return (
    <div className="my-account">
        <Banner bannerColor={bannerColor}/>
        <Avatar avatar={avatar}/>
    </div>
  )
}
export default MyAccount