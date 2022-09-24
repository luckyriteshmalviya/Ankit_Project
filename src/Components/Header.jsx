import "/src/App.css";
import Top from "./top";

function Header() {
  return (
    <>
      <Top />
      <header>
        <div className="primary-header">
          <div className="header-primary-menu-action">
            <i>
              <img src="/src/assets/img/Group 22.svg" alt="group22" />
            </i>
            <div className="header-menu-selection">
              <select className="mini-select-menu">
                <option>UPSC</option>
              </select>
            </div>
          </div>
          <div className="primary-header-options">
            <i>
              <img src="/src/assets/img/search.svg" />
            </i>
            <div className="primary-header-options-right">
              <i>
                <img width="25" src="/src/assets/img/Coin.png" />
              </i>
              <div className="coin-item">2400</div>
            </div>
          </div>
        </div>
        <div className="logo-title">Planning</div>
      </header>
    </>
  );
}
export default Header;
