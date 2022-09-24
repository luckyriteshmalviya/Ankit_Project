import { useState } from "react";
import { memo, useMemo } from "react";
import "./NavBtn.css";

function NavBtn({ name, active, percent }) {
  const chipStyle = useMemo(() => {
    const style = {
      color: "white",
      background: "linear-gradient(90deg, #fc5d73, #ff993f)",
      border: "1px solid transparent",
    };
    if (!active) {
      style.color = "#DADADA";
      style.background = "transparent";
      style.border = "1px solid #DADADA";
    }
    return style;
  }, [active]);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const Calculate = useMemo(() => {
    if (percent > 66) {
      setNum1(33);
      setNum2(33);
      setNum3(100 - percent);
    }
    if (percent >= 33 && percent <= 66) {
      setNum1(33);
      setNum2(100 - percent);
    }
    if (percent < 33) {
      setNum1(percent);
    }
  }, [percent]);

  return (
    <div className="Nav">
      <div className="Navbtn" style={chipStyle}>
        {name}
      </div>
      <div style={{ display: "flex", gap: "2px" }}>
        <progress className="progress-bar" value={num1} max="33"></progress>
        <progress className="progress-bar" value={num2} max="33"></progress>
        <progress className="progress-bar" value={num3} max="33"></progress>
      </div>
    </div>
  );
}
export default memo(NavBtn);
