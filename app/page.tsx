"use client";
import { useEffect, useState } from "react";
import HeroHead from "@/components/HeroHead";
import TheFour from "@/components/TheFour";
import TheSecond from "@/components/TheSecond";
import TheThird from "@/components/TheThird";
import TheFooter from "@/components/TheFooter";
import TheContacts from "@/components/TheContacts";
import ThePartners from "@/components/ThePartners";
import TheNavbar from "@/components/TheNavbar";
import { texts } from "@/ads";
export default function HomePage() {
  const [lang, setLang] = useState(texts.ukr);
  //lang is english?
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    if (toggler) {
      setLang(texts.eng);
    } else {
      setLang(texts.ukr);
    }
  }, [toggler]);

  return (
    <main className="main-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <TheNavbar lang={lang} setToggler={setToggler} />
      <HeroHead lang={lang} />
      <div id="section_about">
        <TheSecond lang={lang} />
      </div>
      <TheThird lang={lang} />
      <div id="section_partners">
        <ThePartners lang={lang} />
      </div>
      <div id="section_prime">
        <TheFour lang={lang} />
      </div>
      <div id="section_contacts">
        <TheContacts lang={lang} />
      </div>
      <TheFooter lang={lang} />
    </main>
  );
}
