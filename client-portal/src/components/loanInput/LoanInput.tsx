import React, { FC, InputHTMLAttributes } from "react";
import "./loanInput.scss";
import { Input } from "antd";
import { PoligonDownIcon, PoligonUpIcon } from "../../assets/icons";

interface LoanInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  password?: boolean;
  dateOfBirth?: boolean;
}

const LoanInput: FC<LoanInputProps> = ({
  password,
  dateOfBirth,
  children,
  ...props
}) => {
  return (
    <div className="LoanInput">
      {password ? (
        <Input.Password placeholder="Password" />
      ) : dateOfBirth ? (
        <div className="LoanDateInput">
          <input type="text" placeholder="Date of birth" />
          <div className="dateInputText">
            <div className="dateInputTextContent">
              Dd
              <div className="dateInputIcons">
                <PoligonUpIcon /> <PoligonDownIcon />
              </div>
            </div>
            <div className="dateInputTextContent">
              Mm
              <div className="dateInputIcons">
                <PoligonUpIcon /> <PoligonDownIcon />
              </div>
            </div>
            <div className="dateInputTextContent">
              YYYY
              <div className="dateInputIcons">
                <PoligonUpIcon /> <PoligonDownIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <input {...props} />
      )}
      {children}
    </div>
  );
};

export default LoanInput;
