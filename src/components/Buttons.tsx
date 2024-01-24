interface Props {
  text: string;
}

const Buttons = ({ text }: Props) => {

    const handleClick = () => {
        console.log(``)
    }

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-dark" onClick={()=>console.log("Clicked")}>{text}</button>
    </div>
  );
};

export default Buttons;
