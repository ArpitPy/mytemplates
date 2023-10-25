'use client'
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Darkmode from "darkmode-js";

const Page = () => {
  useEffect(() => {
    const options = {
      time: "0.5s",
      mixColor: "#fff",
      backgroundColor: "#fff",
      buttonColorDark: "white",
      buttonColorLight: "black",
      saveInCookies: true,
      label: "🌓",
      autoMatchOsTheme: true,
    };
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  }, []); // Empty dependency array to run the effect only once when the component mounts.

  return (
    <div>
      <div className={styles.text}>Text here</div>
      <button className={styles.butt}>Dark mode</button>
    </div>
  );
};

export default Page;
