function UserHeadingInformation() {
  return (
    <div className="user-heading-info">
      <div className="user-account-info">
        <h2 className="user-account-title">My Account</h2>
        <p className="user-account-paragraph">Manage your SONYX account</p>
      </div>
      <button className="btn user-edit-profile-btn" data-bs-toggle="modal" data-bs-target="#userProfileModal">Edit Profile</button>
    </div>
  );
}

export default UserHeadingInformation;
