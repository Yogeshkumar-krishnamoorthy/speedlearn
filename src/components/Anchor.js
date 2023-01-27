export default function Anchor({ href = "/", className, linkText }) {
  return (
    <>
      <a href={href} className={className}>
        {linkText}
      </a>
    </>
  );
}
