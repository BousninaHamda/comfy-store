const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control flex flex-col gap-y-0.5 items-center justify-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <br />
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
