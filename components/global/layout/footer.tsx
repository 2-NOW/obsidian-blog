import { Socials } from "../socials";

export const Footer = () => {
  return (
    <footer className="px-4">
      <div className="border-t border-gray-200" />
      <div className="flex justify-between py-4">
        <div>© 2023 2-NOW</div>
        <Socials iconSize="20px" />
      </div>
    </footer>
  );
};
