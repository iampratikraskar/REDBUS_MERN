import React from "react";
import styles from "./SelectBus.module.css";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";

const SelectBus = () => {
  return (
    <div className={styles.container}>
      {/* 🔝 Header */}
      <header className={styles.header}>
        <Header />
      </header>

      {/* 📦 Main Layout */}
      <main className={styles.main}>
        {/* 🔍 Filters Sidebar */}
        <aside className={styles.sidebar}>
          <Left />
        </aside>

        {/* 🚌 Bus Results */}
        <section className={styles.content}>
          <Right />
        </section>
      </main>
    </div>
  );
};

export default SelectBus;