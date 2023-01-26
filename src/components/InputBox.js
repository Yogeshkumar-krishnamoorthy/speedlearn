export default function InputBox({
  className,
  type = "text",
  placeholder = "empty",
  value = "empty",
}) {
  if (placeholder !== "empty") {
    return (
      <>
        <div className="inputbox">
          <input className={className} type={type} placeholder={placeholder} />
        </div>
      </>
    );
  } else if (value !== "empty") {
    return (
      <>
        <div className="inputbox">
          <input className={className} type={type} value={value} />
        </div>
      </>
    );
  }
}
