import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { UserSliceState, setUser } from "@store/slices/user";
import useUpdateUser from "api/user/useUpdateUser";

import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./confirmPhone.scss";

interface ConfirmPhoneProps {}

const ConfirmPhone: React.FunctionComponent<ConfirmPhoneProps> = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(["access_token"]);

  const { user } = useAppSelector(
    (state: { user: UserSliceState }) => state.user
  );

  const { mutate, isPending } = useUpdateUser({
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success("You Phone number has been updated.");
    },
  });

  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number);

  const onUpdatePhone = () => {
    mutate({
      data: {
        phone_number: phoneNumber,
      },
      token: cookies.access_token,
    });
  };

  return (
    <div className="confirmPhoneMenu">
      <p className="sectionTitle">
        We do not spam call and do not impose hidden charges. A telephone number
        is only a necessary for the security of your account.
      </p>

      <Input
        placeholder="Enter your phonenumber"
        title="Mobile phone number"
        defaultValue={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard
        onClick={onUpdatePhone}
        disabled={!!(user?.phone_number == phoneNumber) || isPending}
        textCenter
        title="Confirm"
      />
    </div>
  );
};

export default ConfirmPhone;
