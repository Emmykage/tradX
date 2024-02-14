import "./DepositInput.scss";

const DepositInput = ({
  CardsIconList,
  placeholder,
  classname,
  border,
  placeholderColor,
  marginTop,
}: any) => {
  return (
    <div
      className={`deposit-Input-Wrapper ${
        marginTop ? "marginTop" : "marginTop2"
      } ${border ? "border" : "border2"} ${classname}`}
    >
      <input
        className={`deposit-input ${
          placeholderColor ? "placeholderColor" : "placeholderColor2"
        }`}
        type="text"
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
