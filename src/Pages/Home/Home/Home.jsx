import CounterUp from "../CounterUp/CounterUp";
import DiscoverTheUniverse from "../DiscoverTheUniverse/DiscoverTheUniverse";
import FeaturedResearch from "../FeaturedResearch/FeaturedResearch";
import HomeBanner from "../HomeBanner/HomeBanner";
import Insight from "../Insight/Insight";
import JoinUs from "../JoinUs/JoinUs";
import Partner from "../Partner/Partner";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import VisionAndMission from "../VisionAndMission/VisionAndMission";


const Home = () => {
    return (
        <div className="text-white font-serif overflow-x-hidden">
            <HomeBanner></HomeBanner>
            <VisionAndMission></VisionAndMission>
            <CounterUp></CounterUp>
            {/* <DiscoverTheUniverse></DiscoverTheUniverse> */}
            <FeaturedResearch></FeaturedResearch>
            <Team></Team>
            <Partner></Partner>
            <Testimonial></Testimonial>
            <Insight></Insight>
            <JoinUs></JoinUs>

            
        </div>
    );
};

export default Home;