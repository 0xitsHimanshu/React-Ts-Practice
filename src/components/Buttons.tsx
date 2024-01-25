interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
