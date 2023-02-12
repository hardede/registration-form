import { v4 as uuidv4 } from "uuid";
import HowToPlay from "../../assets/howtoplat.svg";
import Rules from "../../assets/rules.svg";
import Dashboard from "../../assets/dashboard.svg";

export const headerLinks = [
  {
    id: uuidv4(),
    href: "/challenges",
    title: "Challenges",
  },
  {
    id: uuidv4(),
    href: "/season_long",
    title: "Season long",
  },
  {
    id: uuidv4(),
    href: "/fantasy_bingo",
    title: "fantasy bingo",
  },
  {
    id: uuidv4(),
    href: "/fantasybook",
    title: "Fantasybook",
  },
];

export const headerIcon = [
  {
    id: uuidv4(),
    url: Rules,
  },
  {
    id: uuidv4(),
    url: HowToPlay,
  },
  {
    id: uuidv4(),
    url: Dashboard,
  },
];
