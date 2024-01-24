import HeroHead from "@/components/HeroHead";
import TheFour from "@/components/TheFour";
import TheSecond from "@/components/TheSecond";
import TheThird from "@/components/TheThird";
import TheFooter from "@/components/TheFooter";
import TheContacts from "@/components/TheContacts";
import ThePartners from "@/components/ThePartners";
import { texts } from "@/ads";

export default function HomePage() {
  return (
    <main className="main-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <HeroHead lang={texts.ukr} />
      <div id="section_about">
        <TheSecond lang={texts.ukr} />
      </div>
      <TheThird lang={texts.ukr} />
      <div id="section_partners">
        <ThePartners lang={texts.ukr} />
      </div>
      <div id="section_prime">
        <TheFour lang={texts.ukr} />
      </div>
      <div id="section_contacts">
        <TheContacts lang={texts.ukr} />
      </div>
      <TheFooter lang={texts.ukr} />
    </main>
  );
}
