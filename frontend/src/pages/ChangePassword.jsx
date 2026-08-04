import ChangePasswordForm from "../components/ChangePasswordForm";
function ChangePassword() {
  return (
    <div>
      <div className="change-password-heading">
        <h2>Change Password</h2>
        <p>
          Modify your authentication credentials to maintain structural
          integrity and secure your digital perimeter.
        </p>
      </div>
      <ChangePasswordForm />
    </div>
  );
}

export default ChangePassword;
