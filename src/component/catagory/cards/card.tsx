import "./css/card.css"

interface Cards{
    id: number;
    name: string;
}

interface Props{
    card: Cards;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="card">

      <div className="title">
        {props.card.name}
      </div>
    </div>
  );
}

export default Card;
