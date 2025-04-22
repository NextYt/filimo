import { assets } from "../assets/assets";

export const FOOTER_LINKS = [
  {
    text: "Watch on TV",
    href: "/watch-on-tv",
    className: "footer-link-item",
  },
  {
    text: "Applications",
    href: "/applications",
    className: "footer-link-item",
  },
  {
    text: "Contact Us",
    href: "/contact",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Terms",
    href: "/terms",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Support",
    href: "/support",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Join Us",
    href: "/join",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Advertise on Filimo",
    href: "/advertise",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Shop",
    href: "/shop",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Other Links",
    href: "#",
    icon: assets.caretDown,
    className:
      "footer-link-item dropDown-footer dropDown-footer-link footer-disapear-link",
    dropdownLinks: [
      {
        text: "Logo",
        href: "/logo",
      },
      {
        text: "Download Movies and Series",
        href: "/download",
      },
    ],
  },
  {
    text: "Other Links",
    href: "#",
    icon: assets.caretDown,
    className:
      "footer-link-item dropDown-footer dropDown-footer-link footer-appear-link",
    dropdownLinks: [
      {
        text: "Logo",
        href: "/logo",
      },
      {
        text: "Download Movies and Series",
        href: "/download",
      },
      {
        text: "Contact Us",
        href: "/contact",
      },
      {
        text: "Terms",
        href: "/terms",
      },
      {
        text: "Support",
        href: "/support",
      },
      {
        text: "Join Us",
        href: "/join",
      },
      {
        text: "Advertise on Filimo",
        href: "/advertise",
      },
      {
        text: "Shop",
        href: "/shop",
      },
    ],
  },
];

export const SOCIAL_MEDIA = [
  {
    name: "Youtube",
    icon: assets.youtube,
    href: "https://youtube.com/filimo",
  },
  {
    name: "Telegram",
    icon: assets.telegram,
    href: "https://t.me/filimo",
  },
  {
    name: "Twitter",
    icon: assets.twitter,
    href: "https://twitter.com/filimo",
  },
  {
    name: "Instagram",
    icon: assets.instagram,
    href: "https://instagram.com/filimo",
  },
];
