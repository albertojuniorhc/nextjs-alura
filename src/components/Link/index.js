import NextLink from "next/link";
import StyledLink from "../StyledLink";

const Link = ({ children, href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
