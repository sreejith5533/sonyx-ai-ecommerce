import { useRef } from "react";

function UserProfileImage({userProfile}) {
  const inputRef = useRef();

  const handleButtonClick = (e)=>{
    e.preventDefault();
    inputRef.current.click();
  }
  return (
    <div className="user-profile-image-div">
      <input ref={inputRef} type="file" className="user-profile-image-input" />
      <img
        src={userProfile}
        alt="profile-image"
        loading="lazy"
        className="user-profile-image"
      />
    </div>
  );
}

export default UserProfileImage;
