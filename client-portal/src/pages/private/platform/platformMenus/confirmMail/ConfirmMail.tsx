import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { UserSliceState, setUser } from "@store/slices/user";
import useUpdateUser from "api/user/useUpdateUser";

import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./confirmMail.scss";

interface ConfirmMailProps {}

const ConfirmMail: React.FunctionComponent<ConfirmMailProps> = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);

  const { user } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  const { mutate, isPending } = useUpdateUser({
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success("You email has been updated.");
    },
  });

  const [email, setEmail] = useState(user?.email);

  const onUpdateEmail = () => {
    mutate({
      data: {
        email,
      },
      token: cookies.access_token,
    });
  };

  return (
    <div className="confirmMailMenu">
      <Input
        placeholder="Enter your email"
        title="Email"
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard
        disabled={!!(user?.email == email) || isPending}
        textCenter
        title="Continue"
        onClick={onUpdateEmail}
      />
    </div>
  );
};

export default ConfirmMail;
