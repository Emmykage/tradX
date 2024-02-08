import { InfoCircleIcon } from "../../../../../assets/icons";
import Input from "../../../../../components/input/Input";
import MenuListCard from "../../../../../components/menuListCard/MenuListCard";
import "./editName.scss";

interface EditNameProps {}

const EditName: React.FunctionComponent<EditNameProps> = () => {
  return (
    <div className="editNameMenu">
      <Input
        placeholder="Eneter your name"
        title="Name"
        defaultValue="Support"
        type="text"
        suffixIcon={<InfoCircleIcon />}
      />

      <MenuListCard textCenter title="Save name" />
    </div>
  );
};

export default EditName;
