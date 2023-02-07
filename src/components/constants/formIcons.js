import { v4 as uuidv4 } from "uuid";
import AppleIcon from "../../assets/AppleIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";

export const formIcons = [
  {
    id: uuidv4(),
    url: AppleIcon,
  },
  {
    id: uuidv4(),
    url: GoogleIcon,
  },
  {
    id: uuidv4(),
    url: FacebookIcon,
  },
];
