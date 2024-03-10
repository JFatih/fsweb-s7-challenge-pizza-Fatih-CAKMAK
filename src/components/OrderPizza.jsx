import { Link, NavLink } from "react-router-dom";
import "./OrderPizza.css";
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
} from "reactstrap";
import CounterPizza from "./pizzacomponents/CounterPizza";
import SummaryPizza from "./pizzacomponents/SummaryPizza";

export default function OrderPizza({ pizzaData }) {
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
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>{boyut}</Label>
                </FormGroup>
              );
            })}
          </Form>
          <Form className="hamur-sec">
            <h5>Hamur Seç</h5>
            <UncontrolledDropdown group>
              <Button color="primary">Hamur Kalınlığı</Button>
              <DropdownToggle caret color="primary" />
              <DropdownMenu>
                {pizzaData.hamurKalınlıgı.map((kalınlık) => {
                  return <DropdownItem>{kalınlık}</DropdownItem>;
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Form>
        </div>
        <FormGroup className="checkbox2">
          <Label sm={3}>Ek Malzemeler</Label>
          <Col
            sm={{
              size: 13,
            }}
          >
            <div className="icerikler">
              {pizzaData.ekMalzemeler.map((malzeme) => {
                return (
                  <FormGroup check className="icerik">
                    <Input id="checkbox2" type="checkbox" />{" "}
                    <Label check>{malzeme}</Label>
                  </FormGroup>
                );
              })}
            </div>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="name">Adınız :</Label>
          <Input
            id="name"
            name="name"
            placeholder="Adınızı Girin"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Soyadınız:</Label>
          <Input
            id="surname"
            name="surname"
            placeholder="Soyadınızı Girin"
            type="text"
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
          />
        </FormGroup>
      </section>
      <div className="line">
        <div class="grey-line"></div>
      </div>
      <section className="order-summary">
        <CounterPizza />

        <div>
          <SummaryPizza />
        </div>
      </section>
    </>
  );
}
