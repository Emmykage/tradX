import { Modal as ModalOriginal } from "antd";
import "./modal.scss";
import { CloseIcon } from "../../assets/icons";

interface ModalProps {
  children?: React.ReactNode;
  rootClassName?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  footer?: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  rootClassName,
  open,
  setOpen,
  onOk,
  onCancel,
  title,
  footer,
}) => {
  return (
    <ModalOriginal
      rootClassName={rootClassName}
      title={title}
      centered
      open={open}
      onOk={(e) => (onOk ? onOk(e) : setOpen(false))}
      onCancel={(e) => (onCancel ? onCancel(e) : setOpen(false))}
      footer={footer ? footer : null}
      closeIcon={<CloseIcon />}
    >
      {children}
    </ModalOriginal>
  );
};

export default Modal;
