import footerStyles from "../styles/Footer.module.scss"
import Image from "next/image"
import Logo from "./Logo"
import FacebookIcon from "./FacebookIcon"
import TwitterIcon from "./TwitterIcon"
import InstagramIcon from "./InstagramIcon"
import { Links } from "./Nav"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.logo}>
        <Logo fill="#ffffff" />
      </div>

      {/* <div className={footerStyles.links}>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CREATE YOUR PLAN</a>
      </div> */}

      <Links />

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
    </footer>
  )
}

export default Footer