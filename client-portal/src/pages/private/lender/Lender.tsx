import { useState } from "react";
import LenderBankCard from "../../../components/lender/lenderBankCard/LenderBankCard";
import LenderHeader from "../../../components/lender/lenderHeader/LenderHeader";
import "./lender.scss";
import { Drawer } from "antd";
import { CloseIcon } from "../../../assets/icons";

interface LenderProps {}

const Lender: React.FunctionComponent<LenderProps> = () => {
  const banks = [
    {
      id: "1",
      name: "BBVA",
    },
    {
      id: "2",
      name: "VTB",
    },
    {
      id: "3",
      name: "Raiffeisen",
    },
    {
      id: "4",
      name: "Bankinter",
    },
    {
      id: "5",
      name: "Sberbank",
    },
    {
      id: "6",
      name: "VTB",
    },
    {
      id: "7",
      name: "Kuda",
    },
    {
      id: "8",
      name: "Unicaja",
    },
  ];

  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);

  return (
    <div className="lenderWrapper">
      <LenderHeader setIsRightDrawerOpen={setIsRightDrawerOpen} />
      {isRightDrawerOpen && (
        <Drawer
          placement="right"
          open={isRightDrawerOpen}
          closeIcon={<CloseIcon />}
          onClose={() => setIsRightDrawerOpen(false)}
          className="lenderDrawer"
          width="41rem"
        >
          <p className="banksHead">Banks</p>
          <div className="smallBanksContainer">
            {banks.map((bank) => (
              <LenderBankCard key={bank.id} small name={bank.name} />
            ))}
          </div>
        </Drawer>
      )}
      <div className="lendContainer">
        <p className="lendTxt">
          The best offers from the leading banks of the country
        </p>
        <div className="blueLineGradient"></div>
        <p className="lndRemTxt">
          To find out the terms of cooperation, select a bank
        </p>
        <div className="banksWrapper">
          {banks.map((bank) => (
            <LenderBankCard key={bank.id} name={bank.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lender;
