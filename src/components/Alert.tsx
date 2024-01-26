import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
  onClick: () => void;
}

const Alert = ({ children, text, onClick }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong> {children} </strong> {text}
      <button
        className="btn-close"
        data-bs-dimsiss="alert"
        aria-label="Close"
        onClick={onClick}
      />
    </div>
  );
};

export default Alert;
