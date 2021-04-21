import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">메인</Link>
      <Link to="/post:id">게시글 확인</Link>
      <Link to="/post">게시글 조회</Link>
      <Link to="/memberList">회원 목록</Link>
      <Link to="/postList">게시글 목록</Link>
    </div>
  );
}

export default Navigation;
