import { useNavigate } from "react-router-dom";
import API from "../services/axios";


function LogoutContent() {
  const navigate = useNavigate();

  const handlelogout = async () => {
    try{
      const response = await API.post("/account/logout/",{
        refresh : localStorage.getItem("refresh")
      });

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");

      navigate("/login");
    }catch(err){
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  return (
    <div className="card logout-content-div">
      <span className="close-icon">
        <i class="fa-solid fa-power-off logout-icon"></i>
      </span>
      <h4 className="logout-title">Logout</h4>
      <p className="logout-paragraph">Are you sure you want to logout of your SONYX account?</p>
      <button className="btn logout-btn" onClick={handlelogout}>
        <span>Logout</span>
      </button>
    </div>
  );
}

export default LogoutContent;
