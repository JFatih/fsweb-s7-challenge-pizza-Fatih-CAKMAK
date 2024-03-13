import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-page">
        <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
        <Link to="/OrderPizza" className="btn" data-cy="OrderPage-Button">
          <button>Acıktım</button>
        </Link>
      </section>
      <nav className="nav-menu">
        <div>
          <img src="/Assets/mile2-aseets/icons/1.svg" alt="1" />
          <p>Yeni! Kore</p>
        </div>
        <div>
          <img src="/Assets/mile2-aseets/icons/2.svg" alt="1" />
          <p>Pizza</p>
        </div>
        <div>
          <img src="/Assets/mile2-aseets/icons/3.svg" alt="1" />
          <p>Burger</p>
        </div>
        <div>
          <img src="/Assets/mile2-aseets/icons/4.svg" alt="1" />
          <p>Kızartmalar</p>
        </div>
        <div>
          <img src="/Assets/mile2-aseets/icons/5.svg" alt="1" />
          <p>Fast food</p>
        </div>
        <div>
          <img src="/Assets/mile2-aseets/icons/6.svg" alt="1" />
          <p>Gazlı İçecekler</p>
        </div>
      </nav>
      <section className="home-body">
        <container>
          <div className="camp1">
            <div className="background1"></div>
            <div className="background2"></div>
            <div className="camp1-data">
              <p>Özel Lezzetus</p>
              <p>Position:Absolute Acı Burger</p>
              <button className="camp-button">Sipariş Ver</button>
            </div>
          </div>
          <div className="camp2">
            <div className="background1"></div>
            <div className="camp2-data">
              <p>Hacathlon burger menu</p>
              <button className="camp-button">Sipariş Ver</button>
            </div>
          </div>
          <div className="camp3">
            <div className="background1"></div>
            <div className="camp3-data">
              <p>
                <span>Çoooook</span> hızlı npm gibi kurye
              </p>
              <button className="camp-button">Sipariş Ver</button>
            </div>
          </div>
        </container>
        <main className="menu-footer">
          <p className="Satisfy">en çok paketlenen menüler</p>
          <p className="barlow">Acıktıran Kodlara Doyuran Lezzetler</p>
          <div className=".menu-footer">
            <button>
              <img src="/Assets/mile2-aseets/icons/1.svg" alt="Heart Icon" />
              Ramen
            </button>
            <button>
              <img src="/Assets/mile2-aseets/icons/2.svg" alt="Heart Icon" />
              Pizza
            </button>
            <button>
              <img src="/Assets/mile2-aseets/icons/3.svg" alt="Heart Icon" />
              Burger
            </button>
            <button>
              <img src="/Assets/mile2-aseets/icons/4.svg" alt="Heart Icon" />
              French fries
            </button>
            <button>
              <img src="/Assets/mile2-aseets/icons/5.svg" alt="Heart Icon" />
              Fast food
            </button>
            <button>
              <img src="/Assets/mile2-aseets/icons/6.svg" alt="Heart Icon" />
              Soft drinks
            </button>
          </div>
          <div className="product-container">
            <div className="product one">
              <h6>Terminal Pizza</h6>
              <div>
                <p>4.9</p>
                <p>(200)</p>
                <p>60Tl</p>
              </div>
            </div>
            <div className="product two">
              <h6>Position Absolute Acı Pizza</h6>
              <div>
                <p>4.9</p>
                <p>(928)</p>
                <p>85Tl</p>
              </div>
            </div>
            <div className="product three">
              <h6>useEffect Tavuklu Burger</h6>
              <div>
                <p>4.9</p>
                <p>(482)</p>
                <p>75Tl</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
