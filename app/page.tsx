import Banner from "@/components/home/Banner";
import Campaigns from "@/components/home/Campaigns";
import HomeAbout from "@/components/home/HomeAbout";
import OurWork from "@/components/home/OurWork";
import Stats from "@/components/home/Stats";
import WhoWeAre from "@/components/home/WhoWeAre";
import CTA from "@/components/shared/cta";
import Faqs from "@/components/shared/faqs";

export default async function Home() {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <Stats />
      <WhoWeAre />
      <OurWork />
      {/* <HomeProjects /> */}
      <Campaigns />
      <Faqs />
      <CTA />
    </div>
  );
}
