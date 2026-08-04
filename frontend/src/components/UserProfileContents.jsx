import UserHeadingInformation from "./UserHeadingInformation";
import UserStatsCards from "./UserStatsCards";
import UserProfileInfo from "./UserProfileInfo";

function UserProfileContents({ userProfile, setUserProfile }) {
  return (
    <div>
      <UserHeadingInformation />
      <UserStatsCards />
      <UserProfileInfo userProfile={userProfile} setUserProfile={setUserProfile} />
    </div>
  );
}

export default UserProfileContents;
