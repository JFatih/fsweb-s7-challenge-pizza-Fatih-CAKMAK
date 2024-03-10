import { Link } from "react-router-dom";
import "../OrderPizza.css";
export default function SummaryPizza({ isValid }) {
  return (
    <section className="summary-container">
      <div className="summary-border">
        <h5>Sipariş Toplamı</h5>
        <div>
          <p>Seçimler</p>
          <p>25 tl</p>
        </div>
        <div>
          <p>Toplam</p>
          <p>110.5</p>
        </div>
      </div>
      <Link to="/SuccessPage">
        <button disabled={isValid} className="submit-button">
          Siparişi Ver
        </button>
      </Link>
    </section>
  );
}
