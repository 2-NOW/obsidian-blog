import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

interface SocialsProps {
  iconSize: `${number}px` | `${number}rem`;
}

export const Socials = ({ iconSize }: SocialsProps) => {
  return (
    <div className="flex gap-4">
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
          <Icon
            aria-hidden="true"
            style={{ width: iconSize, height: iconSize }}
          />
        </Link>
      ))}
    </div>
  );
};
