import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
      <Link to="/OrderPizza" className="btn">
        <button>Acıktım</button>
      </Link>
    </div>
  );
}
