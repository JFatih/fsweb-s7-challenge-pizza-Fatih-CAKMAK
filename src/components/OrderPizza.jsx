import { NavLink } from "react-router-dom";
import "./OrderPizza.css";
import { Col, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import CounterPizza from "./pizzacomponents/CounterPizza";
import SummaryPizza from "./pizzacomponents/SummaryPizza";
import { useEffect, useState } from "react";
import HamurSec from "./pizzacomponents/HamurSec";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const errorMessages = {
  adı: "Ad için 3 den fazla karakter girin",
  soyadı: "Soyad için 3 den fazla karakter girin",
};

export default function OrderPizza({ pizzaData, setOrderForm, orderForm }) {
  const [isValid, setIsValid] = useState(true);
  const [toplamFiyat, setToplamFiyat] = useState(0);
  const [secimlerFiyat, setSecimlerFiyat] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(1);
  const [errors, setErrors] = useState({
    adı: false,
    soyadı: false,
  });

  const history = useHistory();

  useEffect(() => {
    if (
      orderForm.boyutSec &&
      orderForm.hamurKalınlıgı &&
      orderForm.ekMalzemeler.length >= 4 &&
      orderForm.ekMalzemeler.length <= 10 &&
      orderForm.adı.trim().length >= 3 &&
      orderForm.soyadı.trim().length >= 3
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    orderForm.pizzaAdı = pizzaData.pizzaAdı;
    orderForm.secimler = secimlerFiyat;
    orderForm.toplam = toplamFiyat;
    orderForm.adet = pizzaCount;
    setSecimlerFiyat(Number(orderForm.ekMalzemeler.length * 5 * pizzaCount));
    setToplamFiyat(
      orderForm.ekMalzemeler.length * 5 * pizzaCount +
        pizzaData.fiyat * pizzaCount
    );
  }, [orderForm]);

  useEffect(() => {
    setSecimlerFiyat(Number(orderForm.ekMalzemeler.length * 5 * pizzaCount));
    setToplamFiyat(
      orderForm.ekMalzemeler.length * 5 * pizzaCount +
        pizzaData.fiyat * pizzaCount
    );
  }, [pizzaCount]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "ekMalzemeler") {
      if (checked) {
        setOrderForm({
          ...orderForm,
          ekMalzemeler: [...orderForm.ekMalzemeler, value],
        });
      } else {
        setOrderForm({
          ...orderForm,
          ekMalzemeler: orderForm.ekMalzemeler.filter(
            (malzeme) => malzeme !== value
          ),
        });
      }
    } else {
      setOrderForm({
        ...orderForm,
        [name]: value,
      });
    }
    if (name === "adı" || name === "soyadı") {
      if (value.trim().length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderForm
      );
      console.log(response.data);
      history.push("/SuccessPage");
    } catch (error) {
      alert("İnternete bağlanılamadı");
    }
  };

  return (
    <>
      <nav className="order-page">
        <div className="order-content">
          <img src="../../Assets/mile2-aseets/pictures/form-banner.png" />
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                activeClassName="selected"
                activeStyle={{
                  color: "#292929",
                }}
              >
                Anasayfa
              </NavLink>
            </li>
            <> - </>
            <li>
              <NavLink
                to="/OrderPizza"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#CE2829",
                }}
              >
                Sipariş Oluştur
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <section className="order-background">
        <div className="order-container">
          <h3>{pizzaData.pizzaAdı}</h3>
          <div className="order-data">
            <p className="product-price">{pizzaData.fiyat}₺</p>
            <div className="header-rating">
              <p>{pizzaData.yıldız}⭐⭐⭐⭐⭐</p>
              <p>{pizzaData.yorum}</p>
            </div>
          </div>
          <p>{pizzaData.acıklama}</p>
        </div>
      </section>
      <Form onSubmit={handleSubmit} className="form-data">
        <section className="choose-container">
          <div className="boyut-hamur">
            <FormGroup className="boyut-sec">
              <h5>Boyut Seç</h5>
              <div className="boyut-secenekler">
                {pizzaData.boyutSec.map((boyut) => {
                  return (
                    <FormGroup check className="boyut-secenek">
                      <Input
                        name="boyutSec"
                        onChange={handleChange}
                        id={boyut}
                        type="radio"
                        value={boyut}
                        key={boyut}
                        data-cy="data-boyut"
                      />{" "}
                      <Label for={boyut} check className="boyut-label">
                        {boyut}
                      </Label>
                    </FormGroup>
                  );
                })}
              </div>
            </FormGroup>
            <FormGroup className="hamur-sec">
              <h5>Hamur Seç</h5>
              <HamurSec
                hamurKalınlıgı={pizzaData.hamurKalınlıgı}
                handleChange={handleChange}
                orderForm={orderForm}
              />
            </FormGroup>
          </div>
          <FormGroup className="checkbox2">
            <Label sm={3}>Ek Malzemeler</Label>
            <Label>
              {orderForm.ekMalzemeler.length === 0
                ? "En fazla 10 malzeme seçebilirsiniz Seçim 5₺"
                : "hata"}
            </Label>
            <Col>
              <div className="icerikler">
                {pizzaData.ekMalzemeler.map((malzeme) => {
                  return (
                    <FormGroup check className="icerik" key={malzeme}>
                      <Input
                        id={malzeme}
                        type="checkbox"
                        name="ekMalzemeler"
                        value={malzeme}
                        onChange={handleChange}
                        checked={orderForm.ekMalzemeler.includes(malzeme)}
                        data-cy="input-malzemeler"
                      />{" "}
                      <Label for={malzeme} check>
                        {malzeme}
                      </Label>
                    </FormGroup>
                  );
                })}
              </div>
            </Col>
          </FormGroup>
          <FormGroup className="ad-soyad">
            <FormGroup>
              <Label for="adı">Adınız :</Label>
              <Input
                id="adı"
                name="adı"
                placeholder="Adınızı Girin"
                type="text"
                onChange={handleChange}
                value={orderForm.adı}
                data-cy="input-ad"
                invalid={errors.adı}
              />
              <FormFeedback>{errorMessages.adı}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="soyadı">Soyadınız:</Label>
              <Input
                id="soyadı"
                name="soyadı"
                placeholder="Soyadınızı Girin"
                type="text"
                value={orderForm.soyadı}
                onChange={handleChange}
                data-cy="input-soyad"
                invalid={errors.soyadı}
              />
              <FormFeedback>{errorMessages.soyadı}</FormFeedback>
            </FormGroup>
          </FormGroup>
          <FormGroup className="order-note">
            <Label for="yorum">Sipariş Notu</Label>
            <Input
              id="yorum"
              name="yorum"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
              row="5"
              onChange={handleChange}
              /* value={orderForm.yorum} */
            />
          </FormGroup>
        </section>
        <div className="line">
          <div className="grey-line"></div>
        </div>
        <section className="order-summary">
          <CounterPizza
            setPizzaCount={setPizzaCount}
            pizzaCount={pizzaCount}
            handleChange={handleChange}
          />
          <div>
            <SummaryPizza
              isValid={isValid}
              secimlerFiyat={secimlerFiyat}
              toplamFiyat={toplamFiyat}
            />
          </div>
        </section>
      </Form>
    </>
  );
}
