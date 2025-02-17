import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Desktop from "../components/Desktop";

export default function Home() {
  const [region, setRegion] = useState(0);
  const [onboarding, setOnboarding] = useState(false);
  const [check, setCheck] = useState(false);
  const [num, setNum] = useState(0);
  const [tensor, setTensor] = useState("");
  const [pred, setPred] = useState(0);

  // Saved preferences
  useEffect(() => {
    if (typeof window !== "undefined") {
      //localStorage.removeItem("region");
      //localStorage.removeItem("onboarding");

      if (localStorage.getItem("region") != null) {
        setRegion(parseInt(localStorage.getItem("region")));
      }
      if (localStorage.getItem("onboarding") != null) {
        setOnboarding(localStorage.getItem("onboarding"));
      }
      if (localStorage.getItem("num") != null) {
        setNum(parseInt(localStorage.getItem("num")));
      }

      setCheck(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          sustAInably - recycle your plastic waste with AI!
        </title>
        <meta
          name="title"
          content="sustAInably - recycle your plastic waste with AI!"
        />
        <meta
          name="description"
          content="sustAInably is an AI powered web app that helps you get smarter with recycling your plastic waste through a picture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myrecyclingrepo.vercel.app/" />
        <meta
          property="og:title"
          content="sustAInably - recycle your plastic waste with AI"
        />
      </Head>

      <main className={styles.main}>
        <Desktop
          pred={pred}
          setPred={setPred}
          tensor={tensor}
          setTensor={setTensor}
          region={region}
          setNum={setNum}
          num={num}
          onboarding={onboarding}
          setRegion={setRegion}
          check={check}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
