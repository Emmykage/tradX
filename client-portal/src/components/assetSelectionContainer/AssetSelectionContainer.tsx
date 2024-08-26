import { CSSProperties, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  CloseIconsm,
} from "../../assets/icons";
import { AssetPairSliceState, removeAssetPair, setSelectedAssetPair} from "@store/slices/pairs";
import { ITradeAssets } from "@interfaces";
import "./assetSelectionContainer.scss";
import Tooltip from "components/tooltip/Tooltip";

interface AssetSelectionContainerProps {
    data: ITradeAssets
}
const AssetSelectionContainer: React.FunctionComponent<AssetSelectionContainerProps> = ({
  data,
}) => {
  
    const tooltipRef = useRef<HTMLButtonElement>(null);
    const  { assetPairs, selectedAsset } = useAppSelector(
        (state: {assetPair: AssetPairSliceState }) => state.assetPair
    );
    const dispatch = useAppDispatch();
    return (
        <>
            <div 
                className={`trade-assets-conversion-block relative ${selectedAsset?.name === data?.name? "selected": ""} `}
                ref={tooltipRef}
                >
                <div
                    className="trade-assets-conversion-container"
                    draggable={true}
                    onClick={() => {
                        dispatch(setSelectedAssetPair(data));
                    }}
                >
                    <div className="convImg">
                    <img
                        src={"https://cfcdn.olymptrade.com/assets1/instrument/vector/CRYPTO_X.499cebb9147e3cb84b40da3583890048.svg"}
                        alt="conv"
                    />
                    </div>
                    <div className="convDetails">
                        <div className="topConv">
                            <span className="currency">{data?.symbol}</span>
                            <span className="percent">-0.06</span>
                        </div>
                    </div>
                    
                </div>
                {assetPairs.length > 1 && (
                    <div className="close-btn-container">
                        <span
                            className="close-btn"
                            onClick={(event) => {
                                event.stopPropagation(); // Prevents the click event from bubbling up
                                dispatch(removeAssetPair(data));
                            }}
                        >
                            <CloseIconsm />
                        </span>
                    </div>
                )}
              
            </div>
            <Tooltip elementRef={tooltipRef}>
                <div>{data?.name}</div>
            </Tooltip>
        </>
    );
};

export default AssetSelectionContainer;
