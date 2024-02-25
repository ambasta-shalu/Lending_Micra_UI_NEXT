import Image from "next/image";
import Back from "../../../../public/images/map2.png";
import Background from "../../../../public/images/map.png";
import maps from "../../../../public/images/rectanglemap.png";
import SocialIcons from "../SocialIcons";
function LeftSide() {
  return (
    <>
      <div className="ml-32 w-fit">
        <p className="mt-16 font-bold text-4xl">Here is how to reach us!</p>
        <div>
          <div className="flex-col">
            <div className="flex">
              <div className="mt-7">
                <div className="inline-block text-center rounded-full bg-lightyellow">
                  <div className="flex -ml-8">
                    <Image
                      src="/images/mail1.png"
                      alt="email1"
                      height="50"
                      width="50"
                      className="-mr-4"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      // className="w-6 h-6"
                      style={{ height: 50, width: 50 }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-7 ml-11">
                <p className="text-sm font-Noto-Sans">Email</p>
                <p className="text-base font-bold font-Noto Sans">
                  info@lendingmicra.com
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mt-7">
                <div className="inline-block text-center rounded-full bg-lightyellow w-12 h-12 ">
                  <Image
                    src="/images/call.png"
                    alt="email1"
                    height="50"
                    width="50"
                    className="-ml-4"
                  />
                </div>
              </div>

              <div className="mt-7 ml-11">
                <p className="text-sm font-Noto-Sans">Mobile</p>
                <p className="text-base font-bold font-Noto Sans">
                  123-456-789
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mt-7">
                <div className="inline-block text-center rounded-full bg-lightyellow w-12 h-12 ">
                  <Image
                    src="/images/home.png"
                    alt="home"
                    height="50"
                    width="50"
                    className="-ml-4"
                  />
                </div>
              </div>

              <div className="mt-7 ml-11">
                <p className="text-sm font-Noto-Sans">Address</p>
                <p className="text-base font-bold font-Noto Sans">
                  A-890 Vimal Nagar, Gandhi Marg, Lucknow,
                  <span>
                    <br />
                    Uttar Pradesh - 226016
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="-ml-6 mt-6">
            <div>
              <div>
                <div className="absolute mt-5">
                  <div className="justify-between">
                    <div className="flex ml-7">
                      <div>
                        <Image src={Background} alt="Background" />
                      </div>
                      <div>
                        <Image src={Background} alt="Background" />
                      </div>
                      <div>
                        <Image src={Background} alt="Background" />
                      </div>
                    </div>

                    <div className="flex ml-7">
                      <div>
                        <Image src={Back} alt="Back" />
                      </div>
                      <div>
                        <Image src={Back} alt="Back" />
                      </div>
                      <div>
                        <Image src={Back} alt="Back" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute">
                <Image src={maps} alt="maps" className="mt-8 ml-9" />
              </div>
            </div>
          </div>

          <div className="flex mt-80 ml-6 mb-6">
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSide;
