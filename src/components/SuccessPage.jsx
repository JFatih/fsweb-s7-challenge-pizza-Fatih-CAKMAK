import "./SuccessPage.css";
export default function SuccessPage({ orderForm }) {
  console.log(orderForm);
  return (
    <section className="success-page">
      <section className="success-comment">
        <p className="baslık1">lezzetin yolda</p>
        <p className="baslık2">SİPARİŞ ALINDI</p>
        <div className="grey-line"></div>
      </section>
      <section className="pizza-data">
        <p className="Bold Center">{orderForm.pizzaAdı}</p>
        <div>
          <p>
            Boyut: <span className="Bold">{orderForm.boyutSec}</span>
          </p>
          <p>
            Hamur: <span className="Bold">{orderForm.hamurKalınlıgı}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span className="Bold">{orderForm.ekMalzemeler.join(", ")}</span>
          </p>
        </div>
      </section>
      <section className="pizza-bill Bold">
        <p>Sipariş Toplamı</p>
        <div>
          <p>Seçimler</p>
          <p>{orderForm.secimler} ₺</p>
        </div>
        <div>
          <p>Toplam</p>
          <p>{orderForm.toplam} ₺</p>
        </div>
      </section>
    </section>
  );
}
