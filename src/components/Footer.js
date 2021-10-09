import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <span>
        <b>hotcoffee</b> 2020 copyright all rights reserved
      </span>

      <div className="social">
        <FontAwesomeIcon className="social-item" icon={["fab", "instagram"]} />
        <FontAwesomeIcon className="social-item" icon={["fab", "twitter"]} />
        <FontAwesomeIcon className="social-item" icon={["fab", "linkedin"]} />
      </div>
    </div>
  );
}
