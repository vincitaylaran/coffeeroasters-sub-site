import footerStyles from "../styles/Footer.module.scss"
import Logo from "./Logo"
import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon"
import InstagramIcon from "./InstagramIcon"
import { Links } from "./Nav"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.content}>
        <div className={footerStyles.logoLinksContainer}>
          <div className={footerStyles.logo}>
            <Logo fill="#ffffff" />
          </div>

          <Links />
        </div>

        <div className={footerStyles.socialMedia}>
          <div style={{ cursor: "pointer" }}>
            <FacebookIcon />
          </div>
          <div style={{ cursor: "pointer" }}>
            <TwitterIcon />
          </div>
          <div style={{ cursor: "pointer" }}>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
