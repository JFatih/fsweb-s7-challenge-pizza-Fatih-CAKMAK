import React, { useState } from "react";
import "../OrderPizza.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function HamurSec({ hamurKalınlıgı, handleChange }) {
  const [defaultName, setDefaultName] = useState("Hamur Kalınlığı");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setDefaultName(value);
  };

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{defaultName}</DropdownToggle>
        <DropdownMenu>
          {hamurKalınlıgı.map((kalınlık) => (
            <DropdownItem
              key={kalınlık}
              onClick={(handleChange1, handleChange)}
              value={kalınlık}
              name="hamurKalınlıgı"
            >
              {kalınlık}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
