import UserProfileSidebar from "../components/UserProfileSidebar";
import UserProfileContents from "../components/UserProfileContents";
import '../styles/userprofile.css';
import UserProfileModel from "../components/UserProfileModel";
import { useEffect ,useState } from "react";
function MyProfile() {
    const [userProfile, setUserProfile] = useState({
    profile_image : null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender : "",
    dob: "",
  });

  return (
    <div className="user-profile-page">
      <div className="col-12">
          <UserProfileContents userProfile={userProfile} setUserProfile={setUserProfile} />
          <UserProfileModel userProfile={userProfile} setUserProfile={setUserProfile} />
        </div>
    </div>
  );
}

export default MyProfile;
