import "./DepositInput.scss";

const DepositInput = ({ CardsIconList, placeholder }: any) => {
  return (
    <div className="deposit-Input-Wrapper">
      <input
        className="deposit-input"
        type="number"
        placeholder={placeholder}
      />
      {CardsIconList &&
        CardsIconList.map((card: any, index: number) => (
          <div key={index} className="credit-cards">
            {card.icon}
          </div>
        ))}
    </div>
  );
};

export default DepositInput;
