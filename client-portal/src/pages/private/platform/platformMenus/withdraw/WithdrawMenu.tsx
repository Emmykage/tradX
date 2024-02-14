import { UsdIcon2 } from "../../../../../assets/icons";
import DepositCard from "../../../../../components/depositCard/DepositCard";
import WithdrawCard from "../../../../../components/withdrawCard/WithdrawCard";
import "./withdrawMenu.scss";

interface WithdrawMenuProps {}

const WithdrawMenu: React.FunctionComponent<WithdrawMenuProps> = () => {
  return (
    <div>
      {/* <div className="withdrawTitle">Withdraw</div> */}
      <div className="withdrawMenu">
        <DepositCard
          CountryIcon={<UsdIcon2 />}
          account="From USD Account"
          amount="USD 30"
          icon
        />
        <WithdrawCard />T
      </div>
    </div>
  );
};

export default WithdrawMenu;
