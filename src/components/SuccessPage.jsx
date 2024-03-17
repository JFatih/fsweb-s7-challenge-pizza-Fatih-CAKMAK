import "./SuccessPage.css";
export default function SuccessPage({ orderForm, orderData }) {
  console.log(orderData);
  return (
    <section className="success-page">
      <section className="success-comment">
        <p className="baslık1">lezzetin yolda</p>
        <p className="baslık2">SİPARİŞ ALINDI</p>
        <p>Sipariş Tarihi : {orderData.createdAt}</p>
        <div className="grey-line"></div>
      </section>
      <section className="pizza-data">
        <p>
          Sayın{" "}
          <span className="bold">
            {orderData.adı.toUpperCase()} {orderData.soyadı.toUpperCase()}
          </span>{" "}
          sipariş bilgileriniz:
        </p>
        <p className="Bold Center">{orderData.pizzaAdı}</p>
        <div>
          <p>
            Boyut: <span className="Bold">{orderData.boyutSec}</span>
          </p>
          <p>
            Hamur: <span className="Bold">{orderData.hamurKalınlıgı}</span>
          </p>
          <p>
            Ek Malzemeler:{" "}
            <span className="Bold">{orderData.ekMalzemeler.join(", ")}</span>
          </p>
        </div>
      </section>
      <section className="pizza-bill Bold">
        <p>Sipariş Toplamı</p>
        <div>
          <p>Seçimler</p>
          <p>{orderData.secimler} ₺</p>
        </div>
        <div>
          <p>Toplam</p>
          <p>{orderData.toplam} ₺</p>
        </div>
      </section>
    </section>
  );
}
