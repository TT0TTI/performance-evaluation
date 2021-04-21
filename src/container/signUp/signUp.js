import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Member from "../member/member";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  const onChangeuserId = (e) => {
    const userId = e.target.value;
    setUserId(userId);
  };

  const onChangePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const item = {
        userId: userId,
        pw: pw,
        name: name,
        phone: phone,
        email: email,
      };
      if (
        userId !== "" &&
        pw !== "" &&
        name !== "" &&
        phone !== "" &&
        email !== ""
      ) {
        setUserList(userList.concat(item));
        <Member list={userList} />;
        history.push("/");
      } else {
        return;
      }
    },
    [email, history, name, phone, pw, userId, userList]
  );
  return (
    <form onSubmit={onSubmit} className="list-group">
      <div>
        <h5>아이디</h5>
        <input
          type="text"
          className="form-control"
          value={userId}
          onChange={onChangeuserId}
        />
      </div>
      <div>
        <h5>패스워드</h5>
        <input
          type="password"
          className="form-control"
          value={pw}
          onChange={onChangePw}
        />
      </div>
      <div>
        <h5>이름</h5>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <h5>전화번호</h5>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={onChangePhone}
        />
      </div>
      <div>
        <h5>이메일</h5>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        확인
      </button>
      <Link to="/" className="btn btn-danger">
        취소
      </Link>
    </form>
  );
};

export default SignUp;
