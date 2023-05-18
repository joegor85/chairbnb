import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMedal  } from "@fortawesome/free-solid-svg-icons";
import styles from "./Host.module.css";

function HostInfo() {
  const [name, setName] = useState([]);
  const [numOfReviews, setNumOfReviews] = useState([]);
  const [aboutHost, setAboutHost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/api/users/1")
      .then((res) => res.json())
      .then((data) => {
        setName(data.fname + " " + data.lname);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/api/hosts/about/1")
      .then((res) => res.json())
      .then((data) => {
        setAboutHost(data.about);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setNumOfReviews(data.length);
      });
  }, []);

  let superHostDesc =
    "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.";

    return (
      <>
        <div className={styles["userContainer"]}>
          <div className={styles["userHeader"]}>
            <img
              className={styles["userPicture"]}
              src="http://cdn.onlinewebfonts.com/svg/img_87237.png"
              alt="Logo"
            />
            <div>
              <h2>Host By {name}</h2>
              <p>Joined in March 2021</p>
            </div>
          </div>
          <div className={styles["numbReviews"]}>
            <h3>
              <span className={styles["starIcon"]}>&#9733;</span>
              {numOfReviews} Reviews
            </h3>
            <h3>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles["checkIcon"]}
              />
              <span className={styles["checkIconText"]}>Identity Verified</span>
            </h3>
            <h3>
              <FontAwesomeIcon
                icon={faMedal}
                className={styles["medalIcon"]}
              />
              Super Host
            </h3>
          </div>
          <div className={styles["aboutHost"]}>{aboutHost}</div>
          <div className={styles["superHost"]}>
            <h3>
              <strong>{name} is a Superhost</strong>
            </h3>
            <p className={styles["superHostDesc"]}>{superHostDesc}</p>
          </div>
          <div className={styles["contactSection"]}>
            <div className={styles["contactInfo"]}>
              <p>Response rate: 100%</p>
              <p>Response time: within an hour</p>
            </div>
            <button className={styles["contactButton"]}>Contact Host</button>
          </div>
        </div>
      </>
    );
    
    
    
}

export default HostInfo;
