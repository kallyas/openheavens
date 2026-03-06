export interface Artist {
  id: number;
  name: string;
  shortName?: string;
  image: string;
  bio: string;
}

export interface EventFeature {
  id: number;
  text: string;
  icon: string;
}

export interface ShuttleRoute {
  id: number;
  name: string;
  pickupLocations: string[];
  details: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}
import { SxProps, Theme } from "@mui/material/styles";
