import React, { useState } from "react";
import "../OrderPizza.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function HamurSec({ hamurKalınlıgı, handleChange, orderForm }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleChange1 = (event) => {
    const { value } = event.target;
    setDefaultName(value);
  };

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {orderForm.hamurKalınlıgı
            ? orderForm.hamurKalınlıgı
            : "Hamur Kalınlığı"}
        </DropdownToggle>
        <DropdownMenu>
          {hamurKalınlıgı.map((kalınlık) => (
            <DropdownItem
              key={kalınlık}
              onClick={(handleChange1, handleChange)}
              value={kalınlık}
              name="hamurKalınlıgı"
              data-cy="data-kalınlık"
            >
              {kalınlık}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
