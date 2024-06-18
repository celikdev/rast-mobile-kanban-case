import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalHeader = ({ children }: any) => (
  <header className="w-full flex justify-between">{children}</header>
);
const ModalBody = ({ children }: any) => <section>{children}</section>;
const ModalFooter = ({ children }: any) => <footer>{children}</footer>;

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  ReactModal.setAppElement("html");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(1px)",
          zIndex: 999999999,
        },
        content: {
          width: "50%",
          height: "50%",
          margin: "auto",
          padding: "16px",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
