import React, { createRef, useState } from "react";
import { useEffect } from "react";
import { useScreenshot } from "use-react-screenshot";

export default function Image() {
  var QRCode = require("qrcode.react");
  const cat = "https://ibb.co/87kYJ3X";
  const ref = createRef(null);
  const [width, setWidth] = useState(300);
  const [image, takeScreenShot] = useScreenshot();

  useEffect(() => {
    console.log(`send this`, image);
  }, [image]);

  const getImage = () => {
    takeScreenShot(ref.current);
    console.log(image);
  };
  return (
    <div>
      <div ref={ref}>
        {" "}
        <QRCode
          onClick={() => {
            console.log("click click");
          }}
          renderAs="svg"
          value={cat}
        />
      </div>

      <div>
        <button style={{ marginBottom: "10px" }} onClick={getImage}>
          Take screenshot
        </button>
        <label style={{ display: "block", margin: "10px 0" }}>
          Width:
          <input value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
      </div>
      <img width={width} src={image} alt={"ScreenShot"} />
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}
