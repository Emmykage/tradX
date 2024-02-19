import { FC, ReactNode } from "react";
import { BankCardIcon } from "../../../assets/icons";
import { MethodsType } from "./types";

export function methodIconHandler(method: MethodsType): ReactNode | null {
  switch (method) {
    case "Bank Card":
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BankCardIcon />
          <span style={{ marginLeft: "8px" }}>Bank Card</span>
        </div>
      );
    default:
      return null;
  }
}

export const StatusHandler: FC<{
  status: "success" | "failed" | "pending";
}> = ({ status }) => (
  <p
    className="tb-td-transaction-status"
    style={{
      background:
        status === "pending"
          ? "#70808C"
          : status === "failed"
          ? "#ED5444"
          : "#1D9747",
    }}
  >
    {status}
  </p>
);
