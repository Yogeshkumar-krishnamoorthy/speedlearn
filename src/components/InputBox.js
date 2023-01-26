export default function InputBox({
  type = "text",
  placeholder = "empty",
  value = "empty",
}) {
  if (placeholder !== "empty") {
    return (
      <>
        <div class="inputbox">
          <input type={type} placeholder={placeholder} />
        </div>
      </>
    );
  } else if (value !== "empty") {
    return (
      <>
        <div class="inputbox">
          <input type={type} value={value} />
        </div>
      </>
    );
  }
}
