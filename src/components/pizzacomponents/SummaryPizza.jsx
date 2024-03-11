import { Link } from "react-router-dom";
import "../OrderPizza.css";
export default function SummaryPizza({
  isValid,
  secimlerFiyat,
  toplamFiyat,
  handleSubmit,
}) {
  return (
    <section className="summary-container">
      <div className="summary-border">
        <h5>Sipariş Toplamı</h5>
        <div>
          <p>Seçimler</p>
          <p>{secimlerFiyat} ₺</p>
        </div>
        <div>
          <p>Toplam</p>
          <p>{toplamFiyat} ₺</p>
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
