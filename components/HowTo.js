import React, { useEffect, useState } from "react";
import styles from "./../styles/HowTo.module.css";

const HowTo = (props) => {
  const [searchField, setSearchField] = useState("");
  const items = [
    {
      name: "Paper/Cardboard",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#pap",
      image:
        "https://unsplash.com/photos/white-and-black-paper-lot-_dAnK9GJvdY",
    },
    {
      name: "Plastics",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#pla",
      image:
        "https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1969&q=80",
    },
    {
      name: "Glass",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#gla",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Aluminum",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#aluminum",
      image:
        "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Batteries",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#batteries",
      image:
        "https://images.unsplash.com/photo-1594255897691-9d1edad1ecfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    },
    {
      name: "Electronics",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#electronics",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Food",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#food",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Lawn Materials",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#lawn",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
      name: "Used Oil",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#oil",
      image:
        "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "Household Hazardous Waste",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#hhw",
      image:
        "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Tires",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#tir",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Metal",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#metal",
      image:
        "https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
    },
    {
      name: "Miscellaneous",
      url: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables#miscellaneous",
      image:
        "https://images.unsplash.com/photo-1553787434-45e1d245bfbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    },
  ];

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={props.support ? styles.howtosupport : styles.howto}>
      <div className={styles.title}>How to recycle</div>
      <div className={styles.input}>
        <img src="search.svg" className={styles.search} />
        {searchField.length > 0 && (
          <img
            src="searchclear.svg"
            onClick={() => setSearchField("")}
            className={styles.clear}
          />
        )}
        <input
          placeholder="Search for an item"
          value={searchField}
          onChange={handleChange}
        />
      </div>
      <div className={props.support ? styles.resultssupport : styles.results}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              className={styles.result}
              key={i}
            >
              <div
                className={styles.image}
                style={{ backgroundImage: "url(" + item.image + ")" }}
              ></div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.description}</div>
              </div>
            </a>
          ))
        ) : (
          <a
            className={styles.noresult}
            target="_blank"
            href="https://www.recyclenow.com/recycle-an-item"
          >
            <div className={styles.no}>Couldn't find any items</div>
            <div className={styles.no2}>
              Click to search for more items on recyclenow.com
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default HowTo;
