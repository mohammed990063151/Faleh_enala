export const roleIds = ["enala", "tourism", "shabab", "furniture"] as const;
export const valueIds = ["sincerity", "loyalty", "excellence", "leadership"] as const;
export const statIds = ["years", "properties", "cities", "roles"] as const;
export const timelineIds = ["dream", "launch", "major", "member", "chairman", "shabab"] as const;
export const visionPointIds = ["domestic", "v2030", "first", "identity"] as const;
export const testimonialIds = ["amer", "enala", "nehal"] as const;
export const enalaPropertyIds = [
  "qResort",
  "private",
  "theOne",
  "cloud",
  "khobar",
  "umluj",
  "erfad",
  "tabuk",
] as const;
export const socialLinkIds = ["x", "enala", "enalaX"] as const;

export const roles = [
  {
    id: roleIds[0],
    icon: "hotel",
    link: "https://enala.sa",
    highlight: true,
  },
  {
    id: roleIds[1],
    icon: "landmark",
    highlight: true,
  },
  {
    id: roleIds[2],
    icon: "trophy",
    highlight: true,
  },
  {
    id: roleIds[3],
    icon: "building",
    highlight: false,
  },
];

export const stats = [
  { id: statIds[0], value: 15, suffix: "+" },
  { id: statIds[1], value: 10, suffix: "+" },
  { id: statIds[2], value: 4, suffix: "" },
  { id: statIds[3], value: 3, suffix: "" },
];

export const timeline = [
  { id: timelineIds[0], yearAr: "1429هـ / 2008", yearEn: "1429 AH / 2008" },
  { id: timelineIds[1], yearAr: "1434هـ / 2013", yearEn: "1434 AH / 2013" },
  { id: timelineIds[2], yearAr: "2021", yearEn: "2021" },
  { id: timelineIds[3], yearAr: "يناير 2025", yearEn: "January 2025" },
  { id: timelineIds[4], yearAr: "فبراير 2025", yearEn: "February 2025" },
  { id: timelineIds[5], yearAr: "يوليو 2025", yearEn: "July 2025" },
];

export const enalaProperties = [
  {
    id: enalaPropertyIds[0],
    type: "resort" as const,
    image: "https://enala.sa/images/hotels/gallery/q-resort_630a3f8e7a7a71661616014.webp",
    link: "https://enala.sa/resort/q-resort",
  },
  {
    id: enalaPropertyIds[1],
    type: "resort" as const,
    image: "https://enala.sa/images/hotels/gallery/enala-resort_630cdf9437a221661788052.webp",
    link: "https://enala.sa/resort/private-resort",
  },
  {
    id: enalaPropertyIds[2],
    type: "resort" as const,
    image: "https://enala.sa/images/hotels/gallery/the-one-resort_633ef9292e4d01665071401.webp",
    link: "https://enala.sa/resort/the-one-resort",
  },
  {
    id: enalaPropertyIds[3],
    type: "resort" as const,
    image: "https://enala.sa/images/hotels/gallery/670e8e30cb3811729007152.webp",
    link: "https://enala.sa/resort/cloud-resort",
  },
  {
    id: enalaPropertyIds[4],
    type: "hotel" as const,
    image: "https://enala.sa/images/hotels/gallery/enala-alkhobar-hotel_643dff59ec68d1681784665.webp",
    link: "https://enala.sa/hotel/enala-alkhobar-hotel",
  },
  {
    id: enalaPropertyIds[5],
    type: "hotel" as const,
    image: "https://enala.sa/images/hotels/gallery/66f3fc1c1d6db1727265820.webp",
    link: "https://enala.sa/hotel/enala-umluj-hotel",
  },
  {
    id: enalaPropertyIds[6],
    type: "hotel" as const,
    image: "https://enala.sa/images/hotels/gallery/66cc6c36c6aad1724673078.webp",
    link: "https://enala.sa/hotel/erfad",
  },
  {
    id: enalaPropertyIds[7],
    type: "apartments" as const,
    image: "https://enala.sa/images/hotels/gallery/enala-tabuk-hotel_6314605427f0d1662279764.webp",
    link: "https://enala.sa/hotel/enala-tabuk-hotel",
  },
];

export const socialLinks = [
  {
    id: socialLinkIds[0],
    handle: "@falehalfaleh123",
    url: "https://x.com/falehalfaleh123",
  },
  {
    id: socialLinkIds[1],
    handle: "enala.sa",
    url: "https://enala.sa",
  },
  {
    id: socialLinkIds[2],
    handle: "@enala_sa",
    url: "https://x.com/enala_sa",
  },
];

export const ceoQuoteLink = "https://enala.sa/blog/speech-by-ceo";

export const galleryImages = [
  { key: "shabab" as const, src: "/images/profile-shabab.png" },
  { key: "election" as const, src: "/images/profile-election.png" },
  { key: "character" as const, src: "/images/profile-smile.png" },
];

export const profileImage = "/images/profile-main.png";
