import { Dispatch, SetStateAction, useState } from "react";
import {
  ArchiveIcon,
  DepositsIcon2,
  HistoryIcon,
  ReloadIcon,
  RenameIcon,
  TransactionIcon2,
  WithdrawIcon2,
} from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";
import "./account.scss";
import { RightSubDrawerContent } from "../../types";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import { Col, Row } from "antd";
import SecondaryButton from "../../../../../components/secondaryButton/SecondaryButton";

interface AccountCardProps {
  icon: React.ReactNode;
  suffixIcon: React.ReactNode;
  accountType: string;
  amount?: string;
  secAmount: string;
  selected?: boolean;
  tag?: string;
  onClick: () => void;
  selectedCard: boolean | null;
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const AccountCard: React.FunctionComponent<AccountCardProps> = ({
  icon,
  accountType,
  amount,
  secAmount,
  suffixIcon,
  selected,
  selectedCard,
  tag,
  onClick,
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const handleSuffixIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      onClick={onClick}
      className={`accountCardWrapper ${selected ? "selected" : ""}`}
    >
      {selectedCard ? (
        <MainItemCard
          variant={2}
          className={`new-card ${
            isDropdownVisible ? "backgroundNone" : "backgroundColor"
          }`}
        >
          <div className="leftSide-card">
            <div className="leftSide">
              <div className="icon">{icon}</div>
              <div className="accountDeets">
                <div className="accountType">{accountType}</div>
                {amount ? <div className="amount">{amount}</div> : null}
                <div className="secAmount">{secAmount}</div>
              </div>
            </div>
            <div
              className="suffixIcon"
              onBlur={() => setDropdownVisible(false)}
              onClick={handleSuffixIconClick}
            >
              {tag ? <div className="tag">{tag}</div> : null}

              {suffixIcon}
              {isDropdownVisible && (
                <div className="dropdownMenu">
                  <div
                    onClick={() => {
                      setIsRightSubDrawerOpen(true);
                      setIsRightSubDrawerContent("payments-deposit");
                    }}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <DepositsIcon2 />
                    </div>
                    <div className="dropdownMenuItem">Deposit</div>
                  </div>
                  <div
                    onClick={() => {
                      setIsRightSubDrawerOpen(true);
                      setIsRightSubDrawerContent("withdraw");
                    }}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <WithdrawIcon2 />
                    </div>
                    <div
                      className="dropdownMenuItem"
                      onClick={() => {
                        setIsRightSubDrawerOpen(true);
                        setIsRightSubDrawerContent("withdraw");
                      }}
                    >
                      Withdraw
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setIsRightSubDrawerOpen(true);
                      setIsRightSubDrawerContent("transfer");
                    }}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <TransactionIcon2 />
                    </div>
                    <div className="dropdownMenuItem">Transfer</div>
                  </div>
                  <div
                    onClick={() => navigate("/transactions")}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <HistoryIcon />
                    </div>
                    <div className="dropdownMenuItem">Transactions</div>
                  </div>
                  <div
                    onClick={() => {
                      setIsRightSubDrawerOpen(true);
                      setIsRightSubDrawerContent("account-rename");
                    }}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <RenameIcon />
                    </div>
                    <div className="dropdownMenuItem">Rename</div>
                  </div>
                  <div
                    onClick={() => {
                      setIsRightSubDrawerOpen(true);
                      setIsRightSubDrawerContent("account-archive-menu");
                    }}
                    className="dropdownMenuContent"
                  >
                    <div className="dropdownMenuIcon">
                      <ArchiveIcon />
                    </div>
                    <div className="dropdownMenuItem">Archive</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Row gutter={10} className="buttons">
            <Col span={11}>
              <SecondaryButton
                className="buttons-1"
                Title="Withdraw"
                onClick={() => {
                  setIsRightSubDrawerOpen(true);
                  setIsRightSubDrawerContent("withdraw");
                }}
              />
            </Col>
            <Col span={11}>
              <PrimaryButton
                className="buttons-2"
                Title="Deposit"
                onClick={() => {
                  setIsRightSubDrawerOpen(true);
                  setIsRightSubDrawerContent("payments-deposit");
                }}
              />
            </Col>
          </Row>
        </MainItemCard>
      ) : (
        <>
          <div className="leftSide">
            <div className="icon">{icon}</div>
            <div className="accountDeets">
              <div className="accountType">{accountType}</div>
              {amount ? <div className="amount">{amount}</div> : null}
              <div className="secAmount">{secAmount}</div>
            </div>
          </div>
          <div className="suffixIcon" onClick={handleSuffixIconClick}>
            {tag ? <div className="tag">{tag}</div> : null}
            {selected ? <ReloadIcon /> : suffixIcon}
          </div>
        </>
      )}
    </div>
  );
};

export default AccountCard;
