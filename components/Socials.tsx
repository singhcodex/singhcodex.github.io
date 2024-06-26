import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/singhcodex"},
    {icon: <FaLinkedinIn />, path: "https://github.com/singhcodex"},
    {icon: <FaYoutube />, path: "https://github.com/singhcodex"},
    {icon: <FaTwitter />, path: "https://github.com/singhcodex"},
];
const Socials = ({containerStyles, iconStyle}: any) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return (
                <Link href={social.path} key={index} className={iconStyle}>
                {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials