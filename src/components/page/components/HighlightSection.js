import "./highlightSection.css";
import matebook from "./matebook.png";

export function HighlightSection() {
  return (
    <div className="highlight-section">
      <div className="highlight-left-content">
        <h1 className="highlight-title">What is Lorem Ipsum?</h1>
        <p className="highlight-content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution...
        </p>
        <div className="highlight-tool">
          <span className="highlight-time">May 20</span>
          <span className="highlight-more">Read more</span>
        </div>
      </div>
      <img className="highlight-img" src={matebook} alt="" />
    </div>
  );
}
