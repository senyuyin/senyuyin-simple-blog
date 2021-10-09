import "./cardLatest.css";
import code from "./code.png";

export function CardLatest() {
  return (
    <div className="card">
      <div className="left-content">
        <h1 className="title">long established</h1>
        <p className="content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="detail">
          <span className="time">May 20th 2020</span>
          <span className="read-more">Read more</span>
        </div>
      </div>
      <img className="code" src={code} alt="code" />
    </div>
  );
}
