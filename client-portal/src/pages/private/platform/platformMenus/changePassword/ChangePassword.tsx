import { Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Form } from "antd";

import useChangePassowrd, {
  ChangePasswordForm,
} from "api/user/useChangePassword";
// import Input from "../../../../../components/input/Input";
import "./changePassword.scss";
import StrengthMeter from "./StrengthMeter";

import { RightSubDrawerContent } from "../../types";
import PrimaryButton from "../../../../../components/primaryButton/PrimaryButton";

interface ChangePasswordProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const ChangePassword: React.FunctionComponent<ChangePasswordProps> = ({
  setIsRightSubDrawerContent,
}) => {
  const [cookies] = useCookies(["access_token"]);
  const { handleSubmit, register, watch } = useForm<ChangePasswordForm>();
  const newPass = watch("new_password");

  const { mutate, isPending } = useChangePassowrd({
    onSuccess: () => {
      setIsRightSubDrawerContent("password-success");
    },
  });

  const onSubmit = handleSubmit((data) =>
    mutate({ token: cookies.access_token, formData: data })
  );

  return (
    <div className="changePassword">
      <Form
        className="forgotPassContainer w-100"
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item
          name="old_password"
          rules={[{ required: true, message: "Old password is required" }]}
        >
          <input
            id="old_password"
            title="Old Password"
            type="password"
            placeholder="Enter old password"
            {...register("old_password")}
          />
        </Form.Item>

        <Form.Item
          name="new_password"
          rules={[{ required: true, message: "New password is required" }]}
        >
          <input
            id="new_password"
            title="New Password"
            type="password"
            placeholder="Enter new password"
            {...register("new_password")}
          />
        </Form.Item>

        <Form.Item
          name="new_password_confirm"
          rules={[{ required: true, message: "Confirm password is required" }]}
        >
          <input
            id="new_password_confirm"
            title="Confirm New Password"
            type="password"
            placeholder="Confirm password"
            {...register("new_password_confirm")}
          />
        </Form.Item>

        <StrengthMeter password={newPass} />
        <PrimaryButton
          className="changePwButton"
          Title="Change Password"
          htmlType="submit"
          loading={isPending}
        />
      </Form>
    </div>
  );
};

export default ChangePassword;
