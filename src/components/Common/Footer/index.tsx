import Link from 'next/link';
import {
  FooterWrapper,
  FooterTopSection,
  FooterLeftSection,
  FooterLinksCtn,
  FooterBottomSection,
  FooterSocialsLinks,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopSection>
        <FooterLeftSection>
          <h1>Thabang Moeketsi</h1>
          <p>Photograph & Visual Artist</p>
        </FooterLeftSection>
        <FooterLinksCtn>
          <h3>Menu</h3>

          <Link href="#">Home</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Exhibitions</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </FooterLinksCtn>
        <FooterLinksCtn>
          <h3>Info</h3>

          <Link href="#">Styleguide</Link>
          <Link href="#">Licensing</Link>
          <Link href="#">Changelog</Link>
        </FooterLinksCtn>
      </FooterTopSection>
      <FooterBottomSection>
        <p>
          <span>
            © All rights reserved
          </span>
  
        </p>

        <FooterSocialsLinks>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">FAcebook</Link>
        </FooterSocialsLinks>
      </FooterBottomSection>
    </FooterWrapper>
  );
};

export default Footer;
