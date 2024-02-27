import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./confirmMail.scss";

import { useAppSelector } from "@store/hooks";
import { UserSliceState } from "@store/slices/user";

interface ConfirmMailProps {}

const ConfirmMail: React.FunctionComponent<ConfirmMailProps> = () => {
  const { user } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  return (
    <div className="confirmMailMenu">
      <Input
        placeholder="Enter your email"
        title="Email"
        defaultValue={user?.email}
        type="email"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard textCenter title="Continue" />
    </div>
  );
};

export default ConfirmMail;
