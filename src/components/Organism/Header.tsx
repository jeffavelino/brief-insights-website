import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logoImg from "@/assets/Brief_Insights_name_color.png";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggle from "../ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { href: "/#problem", label: t("nav.problem") },
    { href: "#product", label: t("nav.product") },
    { href: "#security", label: t("nav.security") },
    { href: "#before-after", label: t("nav.results") },
    { href: "#about", label: t("nav.about") },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-foreground/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <div className="overflow-hidden h-9 w-auto flex items-start">
            <img
              src={logoImg}
              alt="BriefInsights"
              className="h-16 w-auto object-contain dark:brightness-[1.15]"
              style={{
                transform: "translateY(-14px) scale(1.25)",
                transformOrigin: "top center",
              }}
            />
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Desktop CTA */}
          {/* <button
            onClick={onRequestDemo}
            className="hidden md:inline-flex text-sm font-medium text-primary-foreground bg-primary px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity ml-2"
          >
            {t("nav.requestDemo")}
          </button> */}

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 ml-1"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 flex flex-col gap-6 pt-12"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              {/* <button
                onClick={onRequestDemo}
                className="text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                {t("nav.requestDemo")}
              </button> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

export default Header;
