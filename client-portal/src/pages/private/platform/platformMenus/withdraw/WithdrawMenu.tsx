import { ArrowRightOS, InfoCircleIcon } from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./withdrawMenu.scss";

interface WithdrawMenuProps {}

interface ContentProps {
  account: string;
  amount: string;
}

interface InfoProps {
  text: string;
  linkText: string;
}

const WithdrawMenu: React.FunctionComponent<WithdrawMenuProps> = () => {
  const Account: React.FC<ContentProps> = ({ account, amount }) => (
    <div className="cardContent">
      <div className="cardLeft">
        <div className="cardTop">
          <p className="cardTitle">{account}</p>
        </div>
        <div className="cardBottom">
          <p className="cardSubtext">{amount}</p>
        </div>
      </div>
      <div className="cardRight">
        <ArrowRightOS />
      </div>
    </div>
  );

  const Info: React.FC<InfoProps> = ({ text, linkText }) => (
    <div className="cardContent">
      <div className="cardLeft">
        <div className="cardTop">
          <p className="infoText">{text}</p>
        </div>
        <div className="cardBottom">
          <p className="cardLink">{linkText}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="withdrawMenu">
      <MenuListCard
        icon={<img src="/menu-images/us-flag.png" alt="USD" />}
        customContent={<Account account="From USD Account" amount="USD 0.00" />}
      />

      <MenuListCard
        icon={<InfoCircleIcon />}
        customContent={
          <Info
            text="You have insufficient funds to make a withdrawal from this account"
            linkText="Make Deposit"
          />
        }
      />
    </div>
  );
};

export default WithdrawMenu;
