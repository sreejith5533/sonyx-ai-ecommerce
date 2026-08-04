import SignupContent from "../components/SignupContent";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";
import "../styles/signup.css";
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-heading ">
        <h2 className="signup-title">Sign Up</h2>
        <p className="already-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <SignupContent />
        </div>
        <div className="col-md-6">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
