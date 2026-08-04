import { Outlet } from "react-router-dom";
import UserProfileSidebar from "../UserProfileSidebar";
function ProfileLayout() {
  return (
    <div className="profile-layout">
      <div className="row">
        <div className="col-12 col-md-4">
          <UserProfileSidebar />
        </div>
        <div className="col-12 col-md-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
