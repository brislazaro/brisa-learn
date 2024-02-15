import "./Input.css";

function Input({ label, name, onChange, value, errorState }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        name={name}
        className="input"
        onChange={onChange}
        value={value}
      ></input>
      {errorState && <p className="error">Campo no valido</p>}
    </div>
  );
}

export default Input;
