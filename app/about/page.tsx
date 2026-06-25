import AboutIntro from "@/components/about/aboutIntro";
import GlobalCommunity from "@/components/about/globalCommunity";
import MissionAndVision from "@/components/about/missionAndVision";
import OurStory from "@/components/about/ourStory";
import JourneyMap from "@/components/about/journeyMap";
import UWTTeamComponent from "@/components/about/team";

const page = () => {
  return (
    <div className="bg-white">
      <AboutIntro />
      <MissionAndVision />
      <GlobalCommunity />
      <OurStory />
      <JourneyMap />
      <UWTTeamComponent />
    </div>
  );
};

export default page;
