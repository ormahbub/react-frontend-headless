import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-left">
          <ul className="social-list">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} - All reserved by Mahbub
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
