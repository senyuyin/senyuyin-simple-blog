import "./cardPanel.css";

export function CardPanel({ cardImg }) {
  return (
    <div className="card-panel">
      <img className="card-img" src={cardImg} alt="" />
      <div className="card-body">
        <h2 className="card-tittle">long established</h2>
        <p className="card-content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="card-tool">
          <span>May 20th 2020</span>
          <span className="card-more">Read more</span>
        </div>
      </div>
    </div>
  );
}
