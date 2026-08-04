import LoginContent from "../components/LoginContent.jsx";
import LoginForm from "../components/LoginForm.jsx";
import '../styles/login.css';
function Login(){
  return(
    <div className="login-container">
      <div className="row">
        <div className="col-md-6">
          <LoginContent />
        </div>
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </div>
  )

}


export default Login;