import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div>
            <img
              width="32"
              height="32"
              src="/src/assets/img/WhatsApp Image 2022-09-24 at 1.29.02 AM.jpeg"
            />
          </div>
          Home
        </div>
        <div style={{ color: "black" }}>
          <div>
            <img width="32" height="32" src="/src/assets/img/planning.jpeg" />
          </div>
          Planning
        </div>
        <div>
          <div>
            <img width="32" height="32" src="/src/assets/img/revision.jpeg" />
          </div>
          Revision
        </div>
        <div>
          <div>
            <img width="32" height="32" src="/src/assets/img/help.jpeg" />
          </div>
          Help
        </div>
        <div>
          <div>
            <img width="32" height="32" src="/src/assets/img/stats.jpeg" />
          </div>
          Stats
        </div>
      </div>
    </>
  );
}

export default Footer;
