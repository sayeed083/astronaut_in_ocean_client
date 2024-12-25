import CounterUp from "../CounterUp/CounterUp";
import DiscoverTheUniverse from "../DiscoverTheUniverse/DiscoverTheUniverse";
import FeaturedResearch from "../FeaturedResearch/FeaturedResearch";
import HomeBanner from "../HomeBanner/HomeBanner";
import VisionAndMission from "../VisionAndMission/VisionAndMission";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <VisionAndMission></VisionAndMission>
            <CounterUp></CounterUp>
            <DiscoverTheUniverse></DiscoverTheUniverse>
            <FeaturedResearch></FeaturedResearch>

            
        </div>
    );
};

export default Home;