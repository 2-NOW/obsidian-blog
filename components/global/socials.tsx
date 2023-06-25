import { FaTwitter, FaLinkedinIn, FaGithubAlt, FaAt } from "react-icons/fa";

interface SocialsProps {
  iconSize: `${number}px` | `${number}rem`;
}

export const Socials = ({ iconSize }: SocialsProps) => {
  return (
    <div className="flex gap-4">
      {[
        {
          href: "https://github.com/2-NOW",
          Icon: FaGithubAlt,
          label: "Github",
        },
        {
          href: "https://www.linkedin.com/in/%ED%98%84%EC%9E%AC-%EC%9D%B4-376251212/",
          Icon: FaLinkedinIn,
          label: "LinkedIn",
        },
        {
          href: "mailto:kj109888@gmail.com",
          Icon: FaAt,
          label: "Email",
        },
        {
          href: "https://twitter.com/wha_1e",
          Icon: FaTwitter,
          label: "Twitter",
        },
      ].map(({ href, Icon, label }) => (
        <a
          key={`social-${href}`}
          className="text-gray-400 hover:text-gray-500"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="sr-only">{label}</span>
          <Icon
            aria-hidden="true"
            style={{ width: iconSize, height: iconSize }}
          />
        </a>
      ))}
    </div>
  );
};
