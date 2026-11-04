export interface NavLink { label: string; href: string; description?: string }

export const productLinks: NavLink[] = [
  { label: "Bench Boost", href: "/bench-boost", description: "Interactive PE and health learning" },
  { label: "K–5 Curriculum", href: "/k-5-curriculum", description: "36 weeks of physical education" },
  { label: "Fitness Tools", href: "/fitness-tools", description: "Analyzer and shuttle-run scoreboard" },
];

export const primaryLinks: NavLink[] = [
  { label: "For PE Teachers", href: "/for-pe-teachers" },
  { label: "For Homeschool Families", href: "/for-homeschool-families" },
];

export const secondaryLinks: NavLink[] = [
  { label: "Free Resources", href: "/free-resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  { title: "Audiences", links: primaryLinks },
  { title: "Products", links: productLinks },
  { title: "Company", links: [...secondaryLinks, { label: "Contact", href: "/contact" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }] },
];
