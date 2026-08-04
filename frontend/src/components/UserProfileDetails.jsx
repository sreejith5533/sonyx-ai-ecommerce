import API from "../services/axios";
import { useEffect, useState } from "react";

function UserProfileDetails({ userProfile, setUserProfile }) {
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await API.get("/account/profile/");
        setUserProfile((prev) => ({
          ...prev,
          ...response.data,
          first_name: response.data.first_name ?? "",
          last_name: response.data.last_name ?? "",
          username: response.data.username ?? "",
          email: response.data.email ?? "",
          phone: response.data.phone ?? "",
          gender: response.data.gender ?? "",
          dob: response.data.dob ?? "",
        }));
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="user-profile-details-div row">
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">First Name</span>
          <h5>{userProfile?.first_name}</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">Last Name</span>
          <h5>{userProfile?.last_name}</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">Email Address</span>
          <h5>{userProfile?.email}</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">Phone Number</span>
          <h5>{userProfile?.phone}</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">Gender</span>
          <h5>{userProfile?.gender}</h5>
        </div>
      </div>
      <div className="col-md-6">
        <div className="data-div">
          <span className="data-name">Date of Birth</span>
          <h5>{userProfile?.dob}</h5>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetails;
