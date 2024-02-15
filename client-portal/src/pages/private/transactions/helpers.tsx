import { FC, ReactNode } from "react";
import { BankCardIcon } from "../../../assets/icons";
import { MethodsType } from "./types";

export function methodIconHandler(method: MethodsType): ReactNode | null{
    switch(method){
        case "Bank Card":
            return (
              <div style={{
                display: "flex",
                alignItems: "center"
              }}>
                <BankCardIcon />
                <span style={{marginLeft: "8px"}}>Bank Card</span>
              </div>
            );
        default:
            return null;
    }
}

export const StatusHandler:FC<{status: "success" | "failed" | "pending"}>=({status}) => (
    <p status={status} className="tb-td-transaction-status">{status}</p>
);