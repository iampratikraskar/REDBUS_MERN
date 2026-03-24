import React from "react";
import styles from "./GlobalPresence.module.css";

const countries = [
  { id: 1, name: "Colombia", img: "https://flagcdn.com/16x12/co.png" },
  { id: 2, name: "India", img: "https://flagcdn.com/16x12/in.png" },
  { id: 3, name: "Indonesia", img: "https://flagcdn.com/16x12/id.png" },
  { id: 4, name: "Malaysia", img: "https://flagcdn.com/16x12/my.png" },
  { id: 5, name: "Peru", img: "https://flagcdn.com/16x12/pe.png" },
  { id: 6, name: "Singapore", img: "https://flagcdn.com/16x12/sg.png" },
];

const stats = [
    {
        id: 1,
        title: "Customers",
        number: "23M+",
        desc: "Trusted by 23 million happy customers globally",
    },
    {
        id: 2,
        title: "Operators",
        number: "2600+",
        desc: "Network of 2600+ bus operators worldwide",
    },
    {
        id: 3,
        title: "Bus Tickets",
        number: "180M+",
        desc: "Over 180 million trips booked",
    },
];

const GlobalPresence = () => {
    return (
        <div className={styles.wrapper}>
            {/* ===== GLOBAL PRESENCE ===== */}
            <section className={styles.section}>
                <h2>Our Global Presence</h2>

                <div className={styles.grid}>
                    {countries.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img
                                src={item.img}
                                srcSet={`${item.img.replace("16x12", "32x24")} 2x, ${item.img.replace("16x12", "48x36")} 3x`}
                                alt={item.name}
                                className={styles.flag}
                            />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className={styles.section}>
                <h2>The Numbers Are Growing</h2>

                <div className={styles.statsGrid}>
                    {stats.map((item) => (
                        <div key={item.id} className={styles.statCard}>
                            <p className={styles.statTitle}>{item.title}</p>
                            <h1>{item.number}</h1>
                            <p className={styles.statDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GlobalPresence;