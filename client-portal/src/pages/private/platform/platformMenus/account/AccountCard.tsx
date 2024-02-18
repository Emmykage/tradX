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
          className={`new-card ${isDropdownVisible ? "" : "backgroundColor"}`}
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
                  <div className="dropdownMenuContent">
                    <div className="dropdownMenuIcon">
                      <DepositsIcon2 />
                    </div>
                    <div
                      className="dropdownMenuItem"
                      onClick={() => {
                        setIsRightSubDrawerOpen(true);
                        setIsRightSubDrawerContent("payments-deposit");
                      }}
                    >
                      Deposit
                    </div>
                  </div>
                  <div className="dropdownMenuContent">
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
                  <div className="dropdownMenuContent">
                    <div className="dropdownMenuIcon">
                      <TransactionIcon2 />
                    </div>
                    <div
                      className="dropdownMenuItem"
                      onClick={() => {
                        setIsRightSubDrawerOpen(true);
                        setIsRightSubDrawerContent("transfer");
                      }}
                    >
                      Transfer
                    </div>
                  </div>
                  <div className="dropdownMenuContent">
                    <div className="dropdownMenuIcon">
                      <HistoryIcon />
                    </div>
                    <div
                      className="dropdownMenuItem"
                      onClick={() => navigate("/transactions")}
                    >
                      Transactions
                    </div>
                  </div>
                  <div className="dropdownMenuContent">
                    <div className="dropdownMenuIcon">
                      <RenameIcon />
                    </div>
                    <div className="dropdownMenuItem">Rename</div>
                  </div>
                  <div className="dropdownMenuContent">
                    <div className="dropdownMenuIcon">
                      <ArchiveIcon />
                    </div>
                    <div className="dropdownMenuItem">Archive</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="buttons">
            <button
              className="buttons-1"
              onClick={() => {
                setIsRightSubDrawerOpen(true);
                setIsRightSubDrawerContent("withdraw");
              }}
            >
              Withdraw
            </button>
            <button
              className="buttons-2"
              onClick={() => {
                setIsRightSubDrawerOpen(true);
                setIsRightSubDrawerContent("payments-deposit");
              }}
            >
              Deposit
            </button>
          </div>
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
