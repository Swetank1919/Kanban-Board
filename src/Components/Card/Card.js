import "./Card.css";
function Card(props) {
  
  return (
    <div className="card">
      <span>{props?.id}</span>
      <span className="card_title">{props?.title}</span>
      {
        props?.tag.map((item)=><span className="card_top_labels">{item}</span>)
      }
    </div>
  );
}

export default Card