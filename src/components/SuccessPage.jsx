import { Link } from "react-router-dom";
import "./SuccessPage.css";
export default function SuccessPage() {
  return (
    <section className="success-page">
      <div className="succeed-order">TEBRİKLER! SİPARİŞİNİZ ALINDI!</div>
      <Link to="/">
        <button>AnaSayfaya</button>
      </Link>
    </section>
  );
}
