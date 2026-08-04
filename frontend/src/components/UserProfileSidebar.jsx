import { NavLink } from "react-router-dom";

function UserProfileSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header mb-3">
        <h2 className="sidebar-logo">SONYX</h2>
        <p className="sidebar-subheading">CORE OPERATIONS</p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/user-profile"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="fa-regular fa-user"></i>
            <span>My Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/orders"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i class="fa-solid fa-box-open"></i>
            <span>My Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/wishlist"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i class="fa-regular fa-heart"></i>
            <span>Wishlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/address"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i class="fa-solid fa-location-dot"></i>
            <span>Address</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/change-password"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i class="fa-solid fa-lock"></i>
            <span>Change Password</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/logout"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default UserProfileSidebar;