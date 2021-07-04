import "./css/catagory.css";
import Card from "./cards/card"
interface Catagorys{
  name: string;
  id: number;
}
interface Props{
  catagorys: Catagorys[];
}
const Catagory: React.FC<Props> = (props) => {
  return (
    <div className="catagorys">
      {
      props.catagorys.map((catagory:Catagorys)=>(
        <Card card={catagory}/>
      ))
    }
    </div>
  );
}

export default Catagory;
