import { CgWebsite } from "react-icons/cg";
const MediaWebsiteButton = ({ href, name }: { href: string; name: string }) => {
  return (
    <>
      <a
        title={`${name} HomePage`}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="inline link_hover hover:text-blue-600"
      >
        <CgWebsite />
        <span className="sr-only">{`${name} HomePage`}</span>
      </a>
    </>
  );
};

export default MediaWebsiteButton;
