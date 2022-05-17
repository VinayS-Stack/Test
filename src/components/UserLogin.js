import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/Actions/UserLogin";
import TextBox from "./InputTypes";

const UserLogin = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userLoginDetails.userDetails);
  console.log(userDetail, "userDetails");

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const onHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  console.log(user);

  const onSubmitHandler = () => {
    if (!user.email && !user.password) {
      setErrorMessage("please enter username and password");
    } else if (user.email && !user.password) {
      setErrorMessage("please enter the password");
    } else {
      dispatch(userLogin(user));
      navigate("/Dashboard");
    }
  };
  return (
    <>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <TextBox
            type="email"
            name="email"
            onChange={onHandleChange}
            id="email"
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <TextBox
            type="password"
            name="password"
            onChange={onHandleChange}
            id="password"
            value={user.password}
          />
        </div>
        <button onClick={onSubmitHandler}>Login</button>
        <div>
          <span style={{ color: "red" }}>
            {errorMessage}
            {userDetail.error}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
