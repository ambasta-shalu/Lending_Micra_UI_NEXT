import BannerCard from "./BannerCard";
import { getDashboard } from "@/libs/dashboard";
import { formatAmountInMillion } from "@/libs/helper";

const Dashboard = async () => {
  const time = Math.floor(Math.random()*5+1)*1000
  await new Promise(resolve=>setTimeout(resolve,time))
  const dashboardData = await getDashboard();
  const totalFundRaised = "$" + formatAmountInMillion(dashboardData.totalFundRaised) + " +";
  const totalDonations = formatAmountInMillion(dashboardData.totalDonations) + " +";
  const totalCampaigns = formatAmountInMillion(dashboardData.totalCampaigns) + " +";
  if (!dashboardData) {
    return (
      <>
        <p className="mt-10 text-center">Sorry, no dashboard available.</p>
      </>
    );
  }
  return (
    <>
      <div className="divide-y-2 md:divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-black flex flex-col lg:flex-row items-center md:gap-16 lg:gap-16 sm:gap-0 justify-center mb-4 ">
        <BannerCard
          amount={totalCampaigns}
          title="Campaigns"
          image="/images/campaigns.svg"
        />
        <div className="xl:pl-10">
          <BannerCard
            amount={totalFundRaised}
            title="Money Raised"
            image="/images/moneyRaised.svg"
          />
        </div>
        <div className="xl:pl-6">
          <BannerCard
            amount={totalDonations}
            title="Donations"
            image="/images/donations.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
