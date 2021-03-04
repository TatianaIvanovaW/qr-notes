import React from "react";
import { useParams } from "react-router-dom";

export default function QrCode() {
  const params = useParams();
  console.log(params);
  return <div>hi</div>;
}
