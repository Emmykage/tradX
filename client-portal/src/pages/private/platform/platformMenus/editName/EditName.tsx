import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./editName.scss";
import { Dispatch, SetStateAction } from "react";
import { RightSubDrawerContent } from "../../types";
import { InfoCircleIcon } from "../../../../../assets/icons";

interface EditNameProps {
  setIsRightSubDrawerContent: Dispatch<SetStateAction<RightSubDrawerContent>>;
}

const EditName: React.FunctionComponent<EditNameProps> = ({
  setIsRightSubDrawerContent,
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
          setIsRightSubDrawerContent("settings");
        }}
      />
    </div>
  );
};

export default EditName;
