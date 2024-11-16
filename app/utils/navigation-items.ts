interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[]  = [
  { name: "Start Here", href: "/" },
  { name: "Behind the Code", href: "/about" },
  { name: "Get @ Me", href: "/contact" },
  { name: "The Code", href: "/portfolio" },
];
