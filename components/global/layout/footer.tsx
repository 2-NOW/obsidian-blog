import { Socials } from "../socials";

export const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-gray-200 py-4">
      <div className="text-gray-500">©2023 2-NOW</div>
      <Socials iconSize="20px" />
    </footer>
  );
};
