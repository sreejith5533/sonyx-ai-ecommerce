import "../../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-sm-6 col-md-3">
            <div className="footer-div">
              <h4 className="footer-logo">SONYX</h4>

              <p className="footer-description">
                Engineering premium electronics that blend innovation,
                performance, and exceptional design for everyday life.
              </p>

              <div className="social-icons"></div>
            </div>
          </div>

          {/* Company */}
          <div className="col-sm-6 col-md-3">
            <div className="footer-div">
              <h6>Company</h6>

              <ul className="footer-list">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="col-sm-6 col-md-3">
            <div className="footer-div">
              <h6>Legal</h6>

              <ul className="footer-list">
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-sm-6 col-md-3">
            <div className="footer-div">
              <h6>Newsletter</h6>

              <p className="subscription-text">
                Get product launches, offers and technology updates.
              </p>

              <div className="input-div">
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-control"
                />

                <button className="btn join-btn">Join</button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row align-items-center bottom-row">
          <div className="col-md-6">
            <p className="copyright">
              © 2026 SONYX Engineering. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
