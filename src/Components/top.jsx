function Top() {
  return (
    <div style={{ width: "393px", height: "26px" }}>
      <div
        style={{
          float: "right",
          width: "46px",
          heigth: "10px",
          display: "flex",
          margin: "10px",
          gap: "4px",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "black",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "black",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "100",
            height: "100",
            borderStyle: "solid",
            borderWidth: "10px 7px 0 7px",
            borderColor: "#000000 transparent transparent transparent",
          }}
        ></div>
      </div>
    </div>
  );
}
export default Top;
