import { Link } from "react-router-dom";
import "../OrderPizza.css";
import { Button, Form } from "reactstrap";
export default function SummaryPizza({
  isValid,
  secimlerFiyat,
  toplamFiyat,
  handleSubmit,
}) {
  return (
    <section className="summary-container">
      <div className="summary-border">
        <p className="summary-head">Sipariş Toplamı</p>
        <div>
          <p>Seçimler</p>
          <p>{secimlerFiyat} ₺</p>
        </div>
        <div>
          <p>Toplam</p>
          <p>{toplamFiyat} ₺</p>
        </div>
      </div>
      <button
        disabled={isValid}
        className="submit-button"
        data-cy="submit-button"
        type="submit"
      >
        Siparişi Ver
      </button>
    </section>
  );
}
