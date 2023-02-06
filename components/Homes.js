
import BestFullBody from "./BestFullBody";
import Healthy from "./Healthy";
import Hero from "./Hero";
import Nav from "./Nav";
import StaticBar from "./StaticBar";



const Homes = () => {
    return (
        <div className="">
           <Nav></Nav>
           <Hero></Hero>
           <Healthy></Healthy>
           <StaticBar></StaticBar>
           <BestFullBody></BestFullBody>
        </div>
    );
};

export default Homes;