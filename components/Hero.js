 

const Hero = () => {
    return (
        <section className="px-32 py-32">
            <div className="flex flex-row space-x-12">
                <div className="basis-1/2">
                    <span className="font-bold text-[56px] tracking-widest text-[#262524]">Healthy in side</span> <br />
                    <span className="font-bold text-[56px] tracking-widest text-[#8382EB]">fresh</span>
                    <span className="font-bold text-[56px] tracking-widest"> out side</span>
                    <div className="pt-4">
                        <span className="text-[#262524] tracking-widest opacity-60 font-normal"> Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</span>
                        <div className="pt-4"></div>
                    </div>
                </div>
                <div className="basis-1/2">
                    Hello world
                </div>

            </div>
        </section>
    );
};

export default Hero;