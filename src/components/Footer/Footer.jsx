import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-left">
          <ul className="social-list">
            <li>
              <a target="_blank" href="https://www.facebook.com/mahbubat/">
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com/in/ormahbub/">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.github.com/ormahbub/">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" href="http://mahbub.kesug.com/">
                Website
              </a>
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
