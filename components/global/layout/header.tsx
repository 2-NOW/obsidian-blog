import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex gap-4">
      {["about", "search"].map((item, index) => (
        <li key={index} className="capitalize">
          <Link href={`/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export const Header = () => {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link className="text-2xl font-semibold" href="/">
          2NOW 🐳
        </Link>
        <Menu />
      </div>
    </header>
  );
};
