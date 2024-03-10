import { Link, NavLink } from "react-router-dom";
import "./OrderPizza.css";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

import CounterPizza from "./pizzacomponents/CounterPizza";
import SummaryPizza from "./pizzacomponents/SummaryPizza";
import { useState } from "react";
import HamurSec from "./pizzacomponents/HamurSec";

const initialValues = {
  boyutSec: "",
  hamurKalınlıgı: "",
  ekMalzemeler: [],
  adı: "",
  soyadı: "",
  yorum: "",
};

export default function OrderPizza({ pizzaData }) {
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({
    boyutSec: false,
    hamurKalınlıgı: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <nav className="nav-links">
            <NavLink
              to="/"
              activeClassName="selected"
              activeStyle={{
                color: "white",
              }}
            >
              Anasayfa
            </NavLink>
            <> - </>
            <NavLink
              to="/OrderPizza"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              Sipariş Oluştur
            </NavLink>
          </nav>
        </div>
      </header>
      <section className="data-container">
        <h3>{pizzaData.pizaAdı}</h3>
        <div className="header-data">
          <h2>{pizzaData.fiyat}₺</h2>
          <div className="header-rating">
            <p>{pizzaData.yıldız}⭐⭐⭐⭐⭐</p>
            <p>{pizzaData.yorum}</p>
          </div>
        </div>
        <p>{pizzaData.acıklama}</p>
      </section>
      <section className="choose-container">
        <div className="boyut-hamur">
          <Form className="boyut-sec">
            <h5>Boyut Seç</h5>
            {pizzaData.boyutSec.map((boyut) => {
              return (
                <FormGroup check>
                  <Input
                    name="boyutSec"
                    onChange={handleChange}
                    id={boyut}
                    type="radio"
                    value={boyut}
                    key={boyut}
                  />{" "}
                  <Label for={boyut} check>
                    {boyut}
                  </Label>
                </FormGroup>
              );
            })}
          </Form>
          <Form className="hamur-sec">
            <h5>Hamur Seç</h5>
            <HamurSec
              hamurKalınlıgı={pizzaData.hamurKalınlıgı}
              handleChange={handleChange}
            />
          </Form>
        </div>
        <FormGroup className="checkbox2">
          <Label sm={3}>Ek Malzemeler</Label>
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
                      checked={formData.ekMalzemeler.includes(malzeme)}
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
        <FormGroup>
          <Label for="adı">Adınız :</Label>
          <Input
            id="adı"
            name="adı"
            placeholder="Adınızı Girin"
            type="text"
            onChange={handleChange}
            value={formData.adı}
          />
        </FormGroup>
        <FormGroup>
          <Label for="soyadı">Soyadınız:</Label>
          <Input
            id="soyadı"
            name="soyadı"
            placeholder="Soyadınızı Girin"
            type="text"
            value={formData.soyadı}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="order-note">
          <Label for="exampleText">Sipariş Notu</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı ?"
            row="5"
            onChange={handleChange}
            value={formData.yorum}
          />
        </FormGroup>
      </section>
      <div className="line">
        <div class="grey-line"></div>
      </div>
      <section className="order-summary">
        <CounterPizza />
        <div>
          <SummaryPizza isValid={isValid} />
        </div>
      </section>
    </>
  );
}
