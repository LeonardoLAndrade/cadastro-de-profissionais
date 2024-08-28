const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {text}
    </label>
  );
};

export default Label;
