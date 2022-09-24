import "./App.css";
import Chapters from "./Components/Chapters";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBtn from "./Components/NavBtn";

function App() {
  return (
    <>
      <div className="main-div-container">
        <Header />

        <div>
          <nav className="course-list">
            <ul className="course-list-nav">
              <li>
                <NavBtn name={"History"} active={true} percent={32} />
              </li>
              <li>
                <NavBtn name={"Civics"} percent={66} />
              </li>
              <li>
                <NavBtn name={"Geo"} percent={92} />
              </li>
              <li>
                <NavBtn name={"Maths"} percent={45} />
              </li>
            </ul>
          </nav>
          <section className="main-container">
            <Chapters status={"completed"} />
            <Chapters status={"completed"} />
            <Chapters status={"current"} />
            <Chapters status={"locked"} />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
