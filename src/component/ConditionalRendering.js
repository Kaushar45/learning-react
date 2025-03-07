import React, { useState } from "react";

function ConditionalRendering() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <h3>CSS Hide Show</h3>
      <div style={{ display: "inline-block" }}>
        <p>I am Hidden By CSS</p>
      </div>
      <h3>Conditional Rendering</h3>
      {isShow && (
        <div>
          <p>I am Hidden By Conditional Rendering</p>
        </div>
      )}
    </div>
  );
}

export default ConditionalRendering;
