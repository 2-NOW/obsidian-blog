import Link from "next/link";
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      {[
        { href: "/twitter", Icon: FaTwitter, label: "Twitter" },
        { href: "/linkedin", Icon: FaLinkedinIn, label: "LinkedIn" },
        { href: "/github", Icon: FaGithubAlt, label: "Github" },
      ].map(({ href, Icon }) => (
        <Link
          key={`social-${href}`}
          className="text-gray-400 hover:text-gray-500"
          href={href}
        >
          <span className="sr-only">{Icon.name}</span>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="px-4">
      <div className="border-t border-gray-200" />
      <div className="flex justify-between py-4">
        <div>© 2023 2-NOW</div>
        <Socials />
      </div>
    </footer>
  );
};
