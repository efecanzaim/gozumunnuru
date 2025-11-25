import Link from "next/link";
import { House, ScanSearch, ShoppingCart, Heart, UserRound } from "lucide-react";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Anasayfa",
    href: "/",
    icon: House,
    isActive: true,
  },
  {
    id: "categories",
    label: "Koleksiyon",
    href: "/koleksiyonlar",
    icon: ScanSearch,
  },
  {
    id: "favorites",
    label: "Favoriler",
    href: "/favoriler",
    icon: Heart,
  },
  {
    id: "cart",
    label: "Sepet",
    href: "/sepet",
    icon: ShoppingCart,
    count: 2,
  },
  {
    id: "account",
    label: "Hesabım",
    href: "/hesabim",
    icon: UserRound,
  },
];

const MobileNavigation = () => {
  return (
    <nav className="navigation" aria-label="Mobil alt navigation">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`navigation__link ${item.isActive ? "-active" : ""}`}
        >
          <span className="navigation__icon" aria-hidden="true">
            <item.icon size={22} strokeWidth={1.5} />
            {typeof item.count === "number" && item.count > 0 ? (
              <span className="navigation__count">{item.count}</span>
            ) : null}
          </span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavigation;

