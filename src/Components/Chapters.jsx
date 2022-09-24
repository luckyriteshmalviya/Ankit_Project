import { useMemo } from "react";
import "/src/App.css";

function Chapters({ status }) {
  const checkStatus = useMemo(() => {
    let currStatus = "notOpened";
    if (status == "completed") {
      currStatus = "/src/assets/img/rotate-cw.svg";
    } else {
      currStatus = "/src/assets/img/Icon feather-arrow-right.svg";
    }
    return currStatus;
  }, [status]);

  const checkStyle = useMemo(() => {
    let currStatus = "notOpened";
    if (status == "completed") {
      currStatus = {
        background: "#FFF5EB",
      };
    } else if (status == "current") {
      currStatus = {
        background: "linear-gradient(90deg, #fc5d73, #ff993f)",
      };
    } else {
      currStatus = {
        background: "#DADADA",
      };
    }
    return currStatus;
  }, [status]);

  const checkProgress = useMemo(() => {
    let currStatus = "notOpened";
    if (status == "completed") {
      currStatus = "/src/assets/img/noun_done_1606832.svg";
    } else if (status == "current") {
      currStatus = "/src/assets/img/pending.jpeg";
    } else {
      currStatus = "/src/assets/img/locked.jpeg";
    }
    return currStatus;
  }, [status]);

  return (
    <>
      <div className="course-tracker-container">
        <div className="course-card">
          <div className="course-icon course-icon-filled">
            <img src={checkProgress} />
          </div>

          <div className="card-description">
            <div className="course-description">
              <div className="course-title">ART &amp; CULTURE</div>
              <div className="course-meta">Chapter 1</div>
            </div>

            <div style={checkStyle} className="course-card-action-icon">
              <img src={checkStatus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Chapters;
