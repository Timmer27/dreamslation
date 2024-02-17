import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <div
        style={{
          background: "black",
          display: "flex",
          color: "white",
          padding: "15px 40px",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex" }}>
          <div>경제/</div>
          <div>운세</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>다시보기/</div>
          <div>공유하기</div>
        </div>
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          gap: "20px"
        }}
      >
        <Link to={'/'}>back</Link>
        <Link to={'/test'}>오늘의 운세</Link>
      </nav>
    </div>
  );
}
