

const Healthy = () => {
    return (
        // mx-6 my-4 lg:mx-32 lg:mb-28 items-center justify-center 
        <section className=" px-6 md:px-12 ">
            {/* px-12 pt-[120px] md:pt-[200px] flex flex-col */}
            {/* max-w[1232px] flex gap-[12px] flex-col-1 md:flex-row */}
            <div className=" px-12 container flex flex-col md:flex-row  ">
                {/* textGroup side */}
                <div className=" md:w-1/2">
                    {/* font-bold text-lg lg:font-normal lg:text-[46px] text-[#262524] tracking-[.01em] leading-[39px] lg:leading-[73px] */}
                    <h1 className=" max-w-md  font-bold mb-4 tracking-[.01em] leading-[39px]  text-[28px] font-['Sporting_Grotesque'] lg:text-[56px] md:leading-[47px] lg:leading-[73px] ">
                    Healthy in side <br /> fresh out side
                    </h1>
                </div>
                {/* picer side */}
                <div className="md:w-1/2"> 
                    <p className="max-w-sm mb-12 font-normal text-[#928f8a] text-justify text-xs leading-[22px] lg:leading-[28px] lg:text-base tracking-[.01em]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day </p>
                </div>
            </div>
        </section>
    );
};

export default Healthy;