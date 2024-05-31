function Button(props) {
  return (
    <button
      className={props.type === "primary" ? "btn primary" : "btn secondary"}
    >
      {props.text}
    </button>
  );
}

export default Button;
