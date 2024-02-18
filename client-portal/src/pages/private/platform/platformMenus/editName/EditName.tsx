import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./editName.scss";
import { Dispatch, SetStateAction } from "react";
import { RightDrawerContent } from "../../types";
import { InfoCircleIcon } from "../../../../../assets/icons";

interface EditNameProps {
  setIsRightSubDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRightDrawerContent: Dispatch<SetStateAction<RightDrawerContent>>;
}

const EditName: React.FunctionComponent<EditNameProps> = ({
  setIsRightSubDrawerOpen,
  setIsRightDrawerContent,
}) => {
  return (
    <div className="editNameMenu">
      <Input
        placeholder="Name"
        title="Name"
        defaultValue="John Doe"
        type="text"
        suffixIcon={<InfoCircleIcon />}
      />
      <MenuListCard
        variant={2}
        textCenter
        title="Save name"
        onClick={() => {
          setIsRightSubDrawerOpen(false);
          setIsRightDrawerContent("account");
        }}
      />
    </div>
  );
};

export default EditName;
