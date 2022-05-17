import React, { useState } from "react";
import InputTypes from "./InputTypes";
import MultiSelectDD from "./MultiSelectDD";
import "../App.css";

const Dropdown = [
  {
    id: 1,
    name: "Amount",
  },
  {
    id: 2,
    name: "Frequency",
  },
  { id: 3, name: "Type" },
  { id: 4, name: "Date" },
  { id: 5, name: "Alert" },
];

const AmountDropdown = [
  { id: 1, name: "Less Than" },
  {
    id: 2,
    name: "between",
  },
  {
    id: 3,
    name: "greater than",
  },
];

const FrequencyDropdown = [
  {
    id: 1,
    name: "Weekly",
  },
  {
    id: 2,
    name: "Monthly",
  },
  {
    id: 3,
    name: "Quarterly",
  },
  {
    id: 4,
    name: "Yearly",
  },
];

const AccountType = [
  {
    id: 1,
    name: "Debit",
  },
  {
    id: 2,
    name: "Credit",
  },
];

const alertDropdown = [
  { id: 1, name: "Salary Credit" },
  { id: 2, name: "Loan Credit" },
  { id: 3, name: "Cheque Bounce" },
];

const UserAccounts = () => {
  const [amount, setAmount] = useState();
  const [show, setShow] = useState(false);

  const handleShowDropDown = () => {
    const amount = Dropdown.find((amount) => amount.name === "Amount");
    // console.log(.find());
    console.log("Amount");
    if (amount && show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <div>
        <select onChange={handleShowDropDown}>
          <option>Open this select menu</option>
          {Dropdown.map((list) => {
            return <option key={list.id}>{list.name}</option>;
          })}
        </select>
        <select className={show ? "hideDropDown" : "showDropDown"}>
          {AmountDropdown.map((amtList) => {
            return (
              <option value={amtList.name} key={amtList.id}>
                {amtList.name}
              </option>
            );
          })}
        </select>
        <InputTypes
          type="text"
          name="lessThan"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
        <InputTypes type="date" />
      </div>
      <div>
        <select>
          {FrequencyDropdown.map((amtList) => {
            return (
              <option value={amtList.name} key={amtList.id}>
                {amtList.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select name="" id="" multiple>
          {AccountType.map((type) => {
            return (
              <option value={type.name} key={type.id}>
                {type.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <MultiSelectDD options={alertDropdown} />
      </div>
    </>
  );
};

export default UserAccounts;
