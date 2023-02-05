
import Healthy from "./Healthy";
import Hero from "./Hero";
import Nav from "./Nav";
import Navbar from "./Navbar";
import StaticBar from "./StaticBar";


const Homes = () => {
    return (
        <div className="">
           {/* <Navbar></Navbar>  */}
           {/* <Header></Header> */}
           <Nav></Nav>
           <Hero></Hero>
           <Healthy></Healthy>
           <StaticBar></StaticBar>
        </div>
    );
};

export default Homes;