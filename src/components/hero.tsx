export default function Hero({ title, subtitle, image = "" }) {
  return (
    <div className="w-full grid grid-cols-2 p-5">
      <div>
        <div className="font-bold text-4xl">{title}</div>
        <div className="font-bold text-2xl">{subtitle}</div>
      </div>
      <div>{image}</div>
    </div>
  );
}
