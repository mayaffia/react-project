
import { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import styles from "./styles.module.css";

export default function NavBar() {

    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const onClick = () => {
      setIsComponentVisible(!isComponentVisible);
    };
  

  return (
    <div className={styles.navBar}>
        <button onClick={onClick}>
        <img src='side.png' />
        </button>
        {isComponentVisible && 
            <Sidebar />
        }
       
        <text>Товары</text>
        <text>Склады</text>
        <text>О системе</text>
        <img src='acc3.png' />
    </div>
  )
}

