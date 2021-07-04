import "./css/home.css";
import Catagory from "./component/catagory/Catagory";

const Home: React.FC = () => {
  let catagorys = [
      {name :"Зөөврийн компьютер",id:1},
      {name :"Ширээний комьютер",id:2},
      {name :"Дагалдах хэрэгсэл",id:3}
  ]
  return (
    <div id="contents">
        <div className = "contents-grid">
            <Catagory catagorys = {catagorys}/>
        </div>
    </div>
  );
}

export default Home;
