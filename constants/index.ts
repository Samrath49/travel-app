export const COMPANION_OPTIONS = [
  {
    id: "solo",
    title: "Just Me",
    description: "A sole traveler in exploration",
    icon: "✈️",
  },
  {
    id: "couple",
    title: "A Couple",
    description: "Two travelers in tandem",
    icon: "🥂",
  },
  {
    id: "family",
    title: "Family",
    description: "A group of fun loving adventurers",
    icon: "🏠",
  },
  {
    id: "friends",
    title: "Friends",
    description: "A bunch of thrill-seekers",
    icon: "⛵",
  },
] as const;

export const BUDGET_OPTIONS = [
  {
    id: "cheap",
    title: "Cheap",
    description: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: "moderate",
    title: "Moderate",
    description: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: "luxury",
    title: "Luxury",
    description: "Don't worry about cost",
    icon: "💎",
  },
] as const;

export const LINK_ITEMS = [
  { label: "Discover", path: "/discover" },
  { label: "My Tours", path: "/my-tours" },
] as const;

export const THINGS_TO_DO_STEPS = [
  {
    title: "Sign up",
    description:
      "Completes all the work associated with planning and processing",
    icon: "/icons/Things-icon-1.png",
    bgClass: "card-signup",
  },
  {
    title: "Worth of money",
    description:
      "After successful access then book from exclusive deals & pricing",
    icon: "/icons/Things-icon-2.png",
    bgClass: "card-worth",
  },
  {
    title: "Exciting travel",
    description: "Start and explore a wide range of exciting travel experience",
    icon: "/icons/Things-icon-3.png",
    bgClass: "card-exciting",
  },
] as const;
