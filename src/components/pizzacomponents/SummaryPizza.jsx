import { FormGroup, Input, Label } from "reactstrap";
import "../OrderPizza.css";
export default function SummaryPizza({
  isValid,
  secimlerFiyat,
  toplamFiyat,
  fastDeli,
  handleChange,
  orderForm,
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
          <p data-cy="toplam-fiyat">{toplamFiyat} ₺</p>
        </div>
        <div>
          <FormGroup check>
            <Input
              type="checkbox"
              name="hızlısiparis"
              id="hızlısiparis"
              checked={fastDeli}
              onChange={handleChange}
              value={fastDeli}
            />{" "}
            <Label check for="hızlısiparis">
              Hızlı teslimat +10₺{" "}
            </Label>
          </FormGroup>
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
