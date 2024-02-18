import { Col, Row } from "antd";
import "./AccountArchiveMenu.scss";
import {
  AccountEmptyIcon,
  AccountsIcon,
  SuccessIcon,
  TradesIcon2,
} from "../../../../../assets/icons";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";

const AccountArchiveMenu = () => {
  return (
    <div className="archiveMenu">
      <p className="archiveMenuText">
        Make sure all 3 of these conditions are met before you attempt to
        archive the account:
      </p>
      <Row className="archiveMenuList">
        <Col span={4}>
          <SuccessIcon width="2.011rem" height="2.011rem" />
        </Col>
        <Col span={20}>
          <div className="archiveMenuContent">
            <div className="archiveMenuItem">
              <div>
                <AccountsIcon />
              </div>
              <p>Accounts</p>
            </div>
            <p>You have more than one live account.</p>
          </div>
        </Col>
      </Row>
      <Row className="archiveMenuList">
        <Col span={4}>
          <SuccessIcon width="2.011rem" height="2.011rem" />
        </Col>
        <Col span={20}>
          <div className="archiveMenuContent">
            <div className="archiveMenuItem">
              <div>
                <AccountEmptyIcon />
              </div>
              <p>Accounts</p>
            </div>
            <p>There is no money in the account.</p>
          </div>
        </Col>
      </Row>
      <Row className="archiveMenuList">
        <Col span={4}>
          <SuccessIcon width="2.011rem" height="2.011rem" />
        </Col>
        <Col span={20}>
          <div className="archiveMenuContent">
            <div className="archiveMenuItem">
              <div>
                <TradesIcon2 />
              </div>
              <p>Trades</p>
            </div>
            <p>All trades associated with the account are closed.</p>
          </div>
        </Col>
      </Row>
      <p className="archiveMenuHelpCenter">
        For more information, please refer to the <br />
        <span>Help Center.</span>
      </p>
      <MenuListCard textCenter title="Archive Account" />
    </div>
  );
};

export default AccountArchiveMenu;
