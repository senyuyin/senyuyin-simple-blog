import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./seeMore.css";

export function SeeMore() {
  return (
    <div className="seeMore">
      <button className="seeMoreBtn">
        See more
        <FontAwesomeIcon
          className="seeMore-icon"
          icon={["fas", "arrow-alt-circle-down"]}
        />
      </button>
    </div>
  );
}
