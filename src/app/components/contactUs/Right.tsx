import Image from "next/image";
import Background from "../../../../public/images/bgSquare.png";
import Button from "../buttons";
import Input from "../Input";
function RightSide() {
  return (
    <div className="mt-16 ml-15">
      <div className=" ml-48 absolute mb-11">
        <div className="justify-between">
          <div className="flex ml-7">
            <div className="w-80">
              <Image src={Background} alt="Background" />
            </div>
            <div className="w-80"></div>
          </div>
          <div className="flex">
            <div className="w-64"></div>
            <div className="w-80 mt-4 ml-14">
              <Image src={Background} alt="Background" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute mt-7 ml-60">
        <div className="border-2 ml-4 rounded-xl shadow-md bg-white h-4/5 w-4/5">
          <div className="ml-8 mt-8 text-4xl h-14 font-bold">Contact Us</div>
          <div className="h-11 w-11/12 mt-px ml-9">
            <p className=" text-base font-Noto Sans">
              Our Community Support team is here to help! Send us a note using
              the form below.
            </p>
          </div>

          <div className="h-16 w-10/12 ml-8 mt-7">
            <Input placeholder="Your Name" type="text" name="name" />
          </div>
          <div className="h-16 w-10/12 ml-8 mt-7">
            <Input placeholder="Your Email Address" type="email" name="email" />
          </div>
          <div className="h-40 w-10/12 ml-8 mt-7 bg-grey">
            <input
              placeholder="You can type any suggestions or queries you might have.Let us help you!"
              type="text"
              className="bg-grey w-full text-xl font-Noto Sans h-36 mb-24  "
            />
          </div>
          <div className="flex pb-4 mb-2 mt-2">
            <div className="mt-5 ml-48">
              <Button type="primary" href="/">
                Cancel
              </Button>
            </div>
            <div className="mt-5 ml-4">
              <Button type="secondary" href="/">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSide;
