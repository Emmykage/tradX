import "./addAccount.scss";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import {
  ApeXProtocolFlag,
  ArbitrumFlag,
  AvalancheFlag,
  BahrainiFlag,
  BinanceCoinFlag,
  BitCoinFlag,
  BitcoinCashFlag,
  BritishFlag,
  CardanoFlag,
  CaymanFlag,
  CelestiaFlag,
  ChainLinkFlag,
  CosmosFlag,
  DaiFlag,
  DodgeCoinFlag,
  EnergySwapFlag,
  EthereumClassicFlag,
  EtheriumFlag,
  EuroFlag,
  FileCoinFlag,
  FirstDigitalFlag,
  GibraltarFlag,
  HederaFlag,
  HongKongFlag,
  InjectiveFlag,
  InmutableXFlag,
  InternetComputerFlag,
  JordanianFlag,
  KaspaFlag,
  KuwaitFlag,
  LeoFlag,
  LidoDaoTokenFlag,
  LiteCoinFlag,
  MakerFlag,
  MoneroFlag,
  NearProtocolFlag,
  OKBFlag,
  OmaniFlag,
  PancakeSwapFlag,
  PinnedIcon,
  PolkadotFlag,
  PolygonFlag,
  RenderTokenFlag,
  RocketPoolFlag,
  RussianFlag,
  SearchIcon,
  ShibaFlag,
  SolanaFlag,
  StacksFlag,
  StellarFlag,
  SwissFlag,
  TheGraphFlag,
  ToncoinFlag,
  TronFlag,
  USDCoinFlag,
  USDTBSCFlag,
  USDTERFlag,
  UniswapFlag,
  UsdIcon2,
  UsdtIcon,
  VechainFlag,
  WEMIXTkenFlag,
  WrappedBTCFlag,
  WrappedEtherFlag,
  WrappedLiquidFlag,
  XRPFlag,
} from "../../../../../assets/icons";
import MainItemCard from "../../../../../components/mainItemCard/MainItemCard";

interface AddAccountMenuProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const AccountsList = [
  {
    icon: <UsdIcon2 />,
    title: "USD Account",
    amount: "USD 0.00",
  },
  {
    icon: <UsdtIcon />,
    title: "USDT Account",
    amount: "USDT 0.00",
  },
  {
    icon: <UsdIcon2 />,
    title: "USD Account 3",
    amount: "USD 0.00",
  },
  {
    icon: <KuwaitFlag />,
    title: "Kuwaiti dinar",
    amount: "KWD 0.00",
  },
  {
    icon: <BahrainiFlag />,
    title: "Bahraini dinar",
    amount: "KWD 0.00",
  },
  {
    icon: <OmaniFlag />,
    title: "Omani rial",
    amount: "KWD 0.00",
  },
  {
    icon: <JordanianFlag />,
    title: "Jordanian dinar",
    amount: "JOD 0.00",
  },
  {
    icon: <BritishFlag />,
    title: "British pound",
    amount: "GBP 0.00",
  },
  {
    icon: <GibraltarFlag />,
    title: "Gibraltar pound",
    amount: "GIP 0.00",
  },
  {
    icon: <CaymanFlag />,
    title: "Cayman Islands dollar",
    amount: "KYD 0.00",
  },
  {
    icon: <SwissFlag />,
    title: "Swiss franc",
    amount: "CHF 0.00",
  },
  {
    icon: <EuroFlag />,
    title: "Euro",
    amount: "EUR 0.00",
  },
  {
    icon: <RussianFlag />,
    title: "Russian Ruble",
    amount: "RUB 0.00",
  },
  {
    icon: <HongKongFlag />,
    title: "Hong Kong Dollar",
    amount: "HDK 0.00",
  },
  {
    icon: <USDTERFlag />,
    title: "USDT (ERC20)",
    amount: "USDT 0.00",
  },
  {
    icon: <USDTBSCFlag />,
    title: "USDT (BSC BEP-20)",
    amount: "USDT 0.00",
  },
  {
    icon: <BitCoinFlag />,
    title: "Bitcoin",
    amount: "BTC 0.00",
  },
  {
    icon: <ShibaFlag />,
    title: "Shiba Inu",
    amount: "SHIB 0.00",
  },
  {
    icon: <DodgeCoinFlag />,
    title: "Dodge Coin (BSC BEP-20)",
    amount: "DOGE 0.00",
  },
  {
    icon: <SolanaFlag />,
    title: "Solana",
    amount: "SOL 0.00",
  },
  {
    icon: <PolygonFlag />,
    title: "Polygon",
    amount: "MATIC 0.00",
  },
  {
    icon: <BinanceCoinFlag />,
    title: "Binance Coin (BSC BEP-20)",
    amount: "BNB 0.00",
  },
  {
    icon: <TronFlag />,
    title: "Tron",
    amount: "TRX 0.00",
  },
  {
    icon: <USDCoinFlag />,
    title: "USD Coin (TRC20)",
    amount: "USDC 0.00",
  },
  {
    icon: <XRPFlag />,
    title: "XRP",
    amount: "XRP 0.00",
  },
  {
    icon: <EtheriumFlag />,
    title: "Ethereum",
    amount: "ETH 0.00",
  },
  {
    icon: <CardanoFlag />,
    title: "Cardano",
    amount: "ADA 0.00",
  },
  {
    icon: <AvalancheFlag />,
    title: "Avalanche",
    amount: "AVAX 0.00",
  },
  {
    icon: <ChainLinkFlag />,
    title: "Chainlink ",
    amount: "LINK 0.00",
  },
  {
    icon: <WrappedLiquidFlag />,
    title: "Wrapped liquid staked Ether 2.0 ",
    amount: "wstETH 0.00",
  },
  {
    icon: <PolkadotFlag />,
    title: "Polkadot",
    amount: "DOT 0.00",
  },
  {
    icon: <WrappedEtherFlag />,
    title: "Wrapped Ether",
    amount: "WETH 0.00",
  },
  {
    icon: <WrappedBTCFlag />,
    title: "Wrapped BTC",
    amount: "WBTC 0.00",
  },
  {
    icon: <InmutableXFlag />,
    title: "Inmutable X",
    amount: "IMX 0.00",
  },
  {
    icon: <UniswapFlag />,
    title: "Uniswap",
    amount: "UNI 0.00",
  },
  {
    icon: <InternetComputerFlag />,
    title: "Internet Computer ",
    amount: "ICP 0.00",
  },
  {
    icon: <LiteCoinFlag />,
    title: "Litecoin",
    amount: "LTC 0.00",
  },
  {
    icon: <BitcoinCashFlag />,
    title: "Bitcoin Cash",
    amount: "BHC 0.00",
  },
  {
    icon: <PancakeSwapFlag />,
    title: "PancakeSwap ",
    amount: "CAKE 0.00",
  },
  {
    icon: <KaspaFlag />,
    title: "Kaspa",
    amount: "KAS 0.00",
  },
  {
    icon: <LeoFlag />,
    title: "LEO",
    amount: "LEO 0.00",
  },
  {
    icon: <DaiFlag />,
    title: "Dai",
    amount: "DAI 0.00",
  },
  {
    icon: <FileCoinFlag />,
    title: "Filecoin",
    amount: "FIL 0.00",
  },
  {
    icon: <EthereumClassicFlag />,
    title: "Ethereum Classic",
    amount: "ETC 0.00",
  },
  {
    icon: <RenderTokenFlag />,
    title: "Render Token",
    amount: "RNDR 0.00",
  },
  {
    icon: <HederaFlag />,
    title: "Hedera",
    amount: "HBAR 0.00",
  },
  {
    icon: <CosmosFlag />,
    title: "Cosmos",
    amount: "ATOM 0.00",
  },
  {
    icon: <OKBFlag />,
    title: "OKB",
    amount: "OKB 0.00",
  },
  {
    icon: <ToncoinFlag />,
    title: "Toncoin",
    amount: "TON 0.00",
  },
  {
    icon: <InjectiveFlag />,
    title: "Injective Protocol",
    amount: "INJ 0.00",
  },
  {
    icon: <VechainFlag />,
    title: "VeChain",
    amount: "VET 0.00",
  },
  {
    icon: <FirstDigitalFlag />,
    title: "First Digital USD",
    amount: "FDUSD 0.00",
  },
  {
    icon: <LidoDaoTokenFlag />,
    title: "Lido Dao Token",
    amount: "LDO 0.00",
  },
  {
    icon: <CelestiaFlag />,
    title: "Celestia",
    amount: "TIA 0.00",
  },
  {
    icon: <StacksFlag />,
    title: "Stacks",
    amount: "STX 0.00",
  },
  {
    icon: <ArbitrumFlag />,
    title: "ARBITRUM",
    amount: "ARB 0.00",
  },
  {
    icon: <StellarFlag />,
    title: "Stellar",
    amount: "XLM 0.00",
  },
  {
    icon: <MoneroFlag />,
    title: "Monero",
    amount: "XMR 0.00",
  },
  {
    icon: <EnergySwapFlag />,
    title: "EnergySwap",
    amount: "ENS 0.00",
  },
  {
    icon: <WEMIXTkenFlag />,
    title: "WEMIX Token",
    amount: "WEMIX 0.00",
  },
  {
    icon: <TheGraphFlag />,
    title: "The Graph",
    amount: "GRT 0.00",
  },
  {
    icon: <MakerFlag />,
    title: "Maker",
    amount: "MKR 0.00",
  },
  {
    icon: <ApeXProtocolFlag />,
    title: "ApeX Protocol",
    amount: "APEX 0.00",
  },
  {
    icon: <NearProtocolFlag />,
    title: "Near Protocol",
    amount: "NEAR 0.00",
  },
  {
    icon: <RocketPoolFlag />,
    title: "Rocket Pool ETH",
    amount: "RETH 0.00",
  },
];

const AddAccountMenu: React.FunctionComponent<AddAccountMenuProps> = (
  {
    // setIsRightSubDrawerOpen,
    // setIsRightSubDrawerContent,
  }
) => {
  return (
    <div className="addAccount">
      <div className="searchAccount">
        <SearchIcon />
        <input type="text" />
      </div>
      <MainItemCard className="AccountPinned" variant={2}>
        <div className="PinnedValue">
          <UsdIcon2 />
          <div>
            <h2>USD Account</h2>
            <p>USD 0.00</p>
          </div>
        </div>
        <PinnedIcon />
      </MainItemCard>
      {AccountsList.map((item, index) => (
        <div key={index} className="AccountsData">
          {item.icon}
          <div>
            <h2>{item.title}</h2>
            <p>{item.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddAccountMenu;
