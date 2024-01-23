import HeroHead from "@/components/HeroHead";
import TheFour from "@/components/TheFour";
import TheSecond from "@/components/TheSecond";
import TheThird from "@/components/TheThird";
import TheFooter from "@/components/TheFooter";
import TheContacts from "@/components/TheContacts";
import ThePartners from "@/components/ThePartners";

export default function HomePage() {
  return (
    <main className="main-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <HeroHead />
      <div id="section_about">
        <TheSecond />
      </div>
      <TheThird />
      <div id="section_partners">
        <ThePartners />
      </div>
      <div id="section_prime">
        <TheFour />
      </div>
      <div id="section_contacts">
        <TheContacts />
      </div>
      <TheFooter />
    </main>
  );
}
