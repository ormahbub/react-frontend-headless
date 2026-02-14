import "./ClientsLogo.css";

import clientLogo1 from "../../../assets/clients-logo/clients-logo-1.png";
import clientLogo2 from "../../../assets/clients-logo/clients-logo-2.png";
import clientLogo3 from "../../../assets/clients-logo/clients-logo-3.png";
import clientLogo4 from "../../../assets/clients-logo/clients-logo-4.png";

const ClientsLogo = () => {
  return (
    <div className="clients-logo container">
      <div className="clients-logo-title">
        <h3>Trusted by top brands</h3>
      </div>
      <div className="clients-logo-gird">
        <img src={clientLogo1} alt="Client Logo 1" />
        <img src={clientLogo2} alt="Client Logo 2" />
        <img src={clientLogo3} alt="Client Logo 3" />
        <img src={clientLogo4} alt="Client Logo 4" />
      </div>
    </div>
  );
};

export default ClientsLogo;
