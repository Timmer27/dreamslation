import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        background: "gray",
        display: "flex",
        width: '100%',
        justifyContent: 'center',
        padding: '10px 30px'
      }}
    >
      <div>뭐 대충 copyright to me</div>
    </div>
  );
}
