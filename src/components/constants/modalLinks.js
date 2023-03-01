import { v4 as uuidv4 } from "uuid";
import Youtube from "../../assets/youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Tiktok from "../../assets/tiktok.svg";
import Insta from "../../assets/instagram.svg";

export const modalLinks = [
  {
    id: uuidv4(),
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    id: uuidv4(),
    href: "/how_to_play",
    title: "How to play",
  },
  {
    id: uuidv4(),
    href: "/rules",
    title: "Rules & scoring",
  },
  {
    id: uuidv4(),
    href: "/me/chat",
    title: "Chat",
  },
  {
    id: uuidv4(),
    href: "/me/profile",
    title: "Settings",
  },
];

export const modalLinksSup = [
  {
    id: uuidv4(),
    href: "/blog",
    title: "Blog",
  },
  {
    id: uuidv4(),
    href: "/podcast",
    title: "Podcast",
  },
  {
    id: uuidv4(),
    href: "/support",
    title: "Support",
  },
];

export const modalSocialLinks = [
  {
    id: uuidv4(),
    url: Youtube,
    href: "https://www.youtube.com/channel/UCHhzu5p4jeaXUwnXovMC5Mg",
  },
  {
    id: uuidv4(),
    url: Twitter,
    href: "https://twitter.com/rivalfantasy",
  },
  {
    id: uuidv4(),
    url: Tiktok,
    href: "https://twitter.com/rivalfantasy",
  },
  {
    id: uuidv4(),
    url: Insta,
    href: "https://www.instagram.com/rivalfantasy/",
  },
];
