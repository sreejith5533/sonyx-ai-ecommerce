import UserProfileInfoHeading from "./UserProfileInfoHeading"
import UserProfileDatas from "./UserProfileDatas"

function UserProfileInfo({userProfile, setUserProfile}){
  return(
    <div>
      <UserProfileInfoHeading />
      <UserProfileDatas   userProfile={userProfile} setUserProfile={setUserProfile} />
    </div>
  )
}

export default UserProfileInfo