'use client';

import { useState } from "react";
import styles from "./styles.module.css"; // CSS module for styling

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}>
            <div className={styles.menuItems}>
                {/* Add menu items here */}
                <div className={styles.menuItem}>
                    <span className={styles.icon}> 1</span>
                    {isExpanded && <span className={styles.label}>Home</span>}
                </div>
                <div className={styles.menuItem}>
                    <span className={styles.icon}></span>
                    {isExpanded && <span className={styles.label}>Search</span>}
                </div>
                <div className={styles.menuItem}>
                    <span className={styles.icon}>️</span>
                    {isExpanded && <span className={styles.label}>Settings</span>}
                </div>
            </div>
            <button className={styles.toggleButton} onClick={toggleSidebar}>
                {isExpanded ? "⟨" : "⟩"}
            </button>
        </div>
    );
}
