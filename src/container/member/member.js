import React from "react";
import { Link } from "react-router-dom";

const Member = ({ list }) => {
  //   const renderUsers = list.map((value) => {
  //     return (
  //       <li key="list-item">
  //         <table>
  //           <tr>
  //             <th>아이디</th>
  //             <th>이름</th>
  //             <th>전화번호</th>
  //             <th>이메일</th>
  //           </tr>
  //           <tr>
  //             <th>{value.id}</th>
  //             <th>{value.name}</th>
  //             <th>{value.phone}</th>
  //             <th>{value.email}</th>
  //           </tr>
  //         </table>
  //       </li>
  //     );
  //   });
  return (
    <div>
      <div className="text-xs-right">
        <Link to="/postsNew" className="btn btn-primary">
          Add a Post
        </Link>
        <Link to="/signUp" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
      <h5>조회할 아이디</h5>
      <div className="input-group">
        <input className="form-control" />
        <div className="input-group-btn">
          <button type="submit" className="btnAdd btn">
            검색
          </button>
        </div>
      </div>
      {/* <ul className="list-group">{renderUsers}</ul> 하다가 실패*/}
    </div>
  );
};

export default Member;
