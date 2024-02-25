import SocialIcons from "./SocialIcons";
import AmountNeeded from "./AmountNeeded";
import Campaigner from "./Campaigner";
import TopInvestor from "./TopInvestor";
import TotalInvestor from "./TotalInvestor";
import ShareWithUs from "./ShareWithUs";
const DetailsSidebar = ({ isDonate }: { isDonate: boolean }) => {
  return (
    <main className="flex flex-col gap-4">
      <AmountNeeded isDonate={isDonate} />
      <ShareWithUs />
      <Campaigner />
      <TopInvestor isDonate={isDonate} />
      {!isDonate && <TotalInvestor totalInvestor={84} />}
    </main>
  );
};

export default DetailsSidebar;
