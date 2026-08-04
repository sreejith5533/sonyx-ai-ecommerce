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
        src={`http://127.0.0.1:8000${userProfile}`}
        alt="profile-image"
        className="user-profile-image"
      />
    </div>
  );
}

export default UserProfileImage;
