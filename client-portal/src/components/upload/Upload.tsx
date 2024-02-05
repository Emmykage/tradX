import { Upload as UploadOriginal, UploadProps as AntUploadProps } from "antd";
import type { ReactNode } from "react";
import "./upload.scss";
import MainItemCard from "../mainItemCard/MainItemCard";
import { UserIcon } from "../../assets/icons";

interface UploadProps extends AntUploadProps {
  placeholder?: string;
  icon?: ReactNode;
}

const Upload: React.FunctionComponent<UploadProps> = ({
  placeholder,
  icon,
  ...props
}) => {
  return (
    <UploadOriginal className="upload_main" {...props}>
      <MainItemCard variant={2} className="uploadContainer">
        {icon ? icon : <UserIcon />}
        <span className="uploadPlaceholder">
          {placeholder ? placeholder : "Upload"}
        </span>
      </MainItemCard>
    </UploadOriginal>
  );
};

export default Upload;
