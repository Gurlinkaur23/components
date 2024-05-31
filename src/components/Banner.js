import Button from "./Button";

function Banner(props) {
  return (
    <div className="container banner">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <Button text={props.btnPrimaryText} type="primary" />
      <Button text={props.btnSecondaryText} type="secondary" />
    </div>
  );
}

export default Banner;
