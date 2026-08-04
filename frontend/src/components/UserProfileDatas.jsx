import UserProfileImage from "./UserProfileImage"
import UserProfileDetails from "./UserProfileDetails"

function UserProfileDatas({userProfile, setUserProfile}) {
  return(
    <div className="row mt-3">
      <div className="col-md-2">
        <UserProfileImage userProfile={userProfile.profile_image} />
      </div>
      <div className="col-md-10">
        <UserProfileDetails userProfile={userProfile} setUserProfile={setUserProfile} />
      </div>
    </div>
  )
}

export default UserProfileDatas