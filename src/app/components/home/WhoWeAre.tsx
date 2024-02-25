import AboutCard from "./AboutCard";
import Button from "../buttons";

const WhoWeAre = () => {
  return (
    // <div className="container-fluid bg-whoweare bg-no-repeat bg-[length:600px_600px] ">
    <div className="bg-[url('/images/whoweareCircle.svg'),_url('/images/aboutCardBg.svg')] xl:bg-[length:580px,_300px] 2xl:bg-[length:710px,_400px] bg-[position:left_0px_top_0px,_right_0px_top_88px] bg-no-repeat pb-4 ">
      <div className="flex gap-14 mt-24 mx-20 xl:grid xl:grid-cols-6 ">
        <div className=" text-center lg:text-left xl:col-span-2 ">
          <p className=" font-Noto-Sans text-xl">
            <span
              className="inline-block text-center pl-3 py-2 pr-1 
        rounded-full bg-yellowbg text-black"
            >
              WH
            </span>
            <span className="-ml-1 ">O WE ARE</span>
          </p>
          <h1 className="xl:text-[32px] 2xl:text-[40px] font-bold xl:leading-8 2xl:leading-10 font-Roboto-Slab">
            {"We're on a mission"}
            <br /> of big changes.To <br />
            help people and the <br /> world.
          </h1>
          <p className="font-Noto-Sans xl:text-[21px] 2xl:text-[27px] mt-4 2xl:w-[425px] xl:w-[325px]">
            We provide a trusted donation channel for peoples of worldwide to
            support people and organizers.
          </p>
          <div className="mt-8">
            <Button type="secondary" href="/aboutus">
              About Us
            </Button>
          </div>
        </div>
        <div className="xl:col-span-4 xl:ml-6">
          <div className="flex">
            <div className="flex flex-col lg:flex-row basis-1/2 gap-10">
              <AboutCard
                title="Non-Profit"
                image={"/images/nonProfit.png"}
                paragraph="We charges NO platform fees on donations."
              />
              <AboutCard
                title="Enroll your NGO with in seconds"
                image={"/images/enroll.png"}
                paragraph="The most secure encryption technology to keep your funds safe."
              />
            </div>
          </div>
          <div className="flex mt-5 lg:ml-8">
            <div className="flex flex-col lg:flex-row basis-1/2 gap-10">
              <AboutCard
                title="Withdraw your funds faster"
                image={"/images/withdraw.png"}
                paragraph="The funds raised can be withdrawn without any hassle directly to your bank account."
              />
              <AboutCard
                title="Accessible To Everyone"
                image={"/images/accessible.png"}
                paragraph="We provide a trusted donation channel for people."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
