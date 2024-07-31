import { Col, Row } from "antd";
import {
  DepositsIcon2,
  EuroFlag,
  InfoCircleIcon,
} from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import "./transferMenu.scss";
import TransferInput from "../../../../../components/transferInput/TransferInput";
import { Dispatch, FC, SetStateAction, useEffect, useReducer } from "react";
import { RightSubDrawerContent } from "../../types";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";
import SelectAccount from "../selectAccount/SelectAccount";
import { InitialAccountsListProps } from "../add-account/constants";
import { useAppSelector } from "@store/hooks";
import { useDispatch } from "react-redux";
import { setWalletToTransferFrom, setWalletToTransferTo } from "@store/slices/wallet";

interface TransferMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const TransferMenu: FC<TransferMenuProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightSubDrawerContent,
}) => {
  const dispatch = useDispatch();
  const { walletToTransferFrom, walletToTransferTo } = useAppSelector((state) => state.wallet);
  
  const initialState = {
    openFirstAccountSelection: false,
    openSecondAccountSelection: false,
  };
  const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);
  const {openFirstAccountSelection, openSecondAccountSelection } = state;

  const toggleShowFirstAccountSelection = () => {
    setState({
      openFirstAccountSelection: !openFirstAccountSelection
    });
  };

  const toggleShowSecondAccountSelection = () => {
    setState({
      openSecondAccountSelection: !openSecondAccountSelection
    });
  };

  const handleFirstAccountSelection = (item: InitialAccountsListProps) => {
    dispatch(setWalletToTransferFrom(item))
    toggleShowFirstAccountSelection();
  };
  const handleSecondAccountSelection = (item: InitialAccountsListProps) => {
    dispatch(setWalletToTransferTo(item))
    toggleShowSecondAccountSelection();
  };

  useEffect(() => {
    // Clean up
    return () => {
      setState({
          ...initialState,
      });
    };
  }, []);

  const renderItem = () => {
    if(openFirstAccountSelection){
      return(
        <SelectAccount 
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen} 
          setIsRightSubDrawerContent={setIsRightSubDrawerContent} 
          hasParent 
          onitemSelection={handleFirstAccountSelection}
        />
      )
    }else if(openSecondAccountSelection){
      return(
        <SelectAccount
          setIsRightSubDrawerOpen={setIsRightSubDrawerOpen} 
          setIsRightSubDrawerContent={setIsRightSubDrawerContent} 
          hasParent
          onitemSelection={handleSecondAccountSelection}
        />
      )
    }else{
      return(
        <div className="transferMenu">
          {/* <div className="withdrawTitle">Withdraw</div> */}
          <TransferInput
            subtitle="From"
            className="promoCodeInput"
            icon={walletToTransferFrom?.icon}
            title={walletToTransferFrom?.title}
            placeholder={walletToTransferFrom?.amount}
            suffixIcon={<InfoCircleIcon stroke="#F58615" />}
            onClick={() => {
              toggleShowFirstAccountSelection()
            }}
          />
          {walletToTransferTo?.amount ? (
            <TransferInput
              subtitle="From"
              className="promoCodeInput"
              icon={walletToTransferTo?.icon}
              title={walletToTransferTo?.title}
              placeholder={walletToTransferTo?.amount}
              suffixIcon={<InfoCircleIcon stroke="#F58615" />}
              onClick={() => {
                toggleShowSecondAccountSelection()
              }}
            />
          ): (
            <>
              <MenuListCard
                variant={2}
                icon={<DepositsIcon2 />}
                title="Select Account"
                onClick={() => {
                  toggleShowSecondAccountSelection();
                }}
              />
            </>
          )}
          
          <div className="amountInputs">
            <Row gutter={[20, 12]} justify="start">
              <Col span={12}>
                <Input variant={2} title={walletToTransferFrom?.amount? "Amount," : "" } subTitle={walletToTransferFrom?.title || "" } />
              </Col>
              <Col span={12}>
                <Input variant={2} title={walletToTransferTo?.amount? "Amount," : "-" } subTitle={walletToTransferTo?.title || "" } />
              </Col>
            </Row>
          </div>
          <PrimaryButton
            Title="Transfer"
            onClick={() => {
              setIsRightSubDrawerOpen(true);
              setIsRightSubDrawerContent("transfer-successful");
            }}
          />
        </div>
      )
    }
  };
  return (
    <>
      {renderItem()}
    </>
  );
 
};

export default TransferMenu;
