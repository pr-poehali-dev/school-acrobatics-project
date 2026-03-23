import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/staff", label: "Тренеры" },
  { href: "/branches", label: "Филиалы" },
  { href: "/schedule", label: "Расписание" },
  { href: "/prices", label: "Цены" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-[#3d1a2e] font-body overflow-x-hidden">
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-pink-100/60 animate-blob blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-pink-50/80 animate-blob animation-delay-2000 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-rose-100/40 animate-blob animation-delay-4000 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-[#3d1a2e]">
            Flexi<span className="shimmer-text">я</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm px-4 py-2 rounded-full transition-all font-body ${
                  location.pathname === href
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-[#8c6478] hover:text-pink-500 hover:bg-pink-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-[#8c6478] hover:text-pink-500 transition-colors px-3 py-1.5 font-body"
            >
              Клиентам
            </a>
            <a
              href="#"
              className="text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-200 font-body font-medium"
            >
              Записаться
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-pink-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1 border-t border-pink-100">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm px-4 py-2.5 rounded-xl transition-all ${
                  location.pathname === href
                    ? "bg-pink-100 text-pink-600 font-medium"
                    : "text-[#8c6478]"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-pink-100 flex flex-col gap-2">
              <a href="#" className="text-sm text-[#8c6478] px-4 py-2">Клиентам</a>
              <a
                href="#"
                className="text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2.5 rounded-full text-center font-medium"
              >
                Записаться
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-pink-100 relative z-10 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <Link to="/" className="font-display text-2xl font-bold text-[#3d1a2e] block mb-3">
                Flexi<span className="shimmer-text">я</span>
              </Link>
              <p className="text-sm text-[#8c6478] leading-relaxed">Студия воздушной гимнастики в Перми</p>
              <a href="tel:+79630149305" className="block mt-3 text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
                +7 (963) 014-93-05
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-pink-400 mb-4">Разделы</p>
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} to={href} className="text-sm text-[#8c6478] hover:text-pink-500 transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-pink-400 mb-4">Студии</p>
              <div className="flex flex-col gap-2 text-sm text-[#8c6478]">
                <p>ул. Советской Армии, 6</p>
                <p>ул. Уинская, 41</p>
                <p className="mt-1">Пн — Сб, 8:00 — 23:00</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-pink-400 mb-4">Документы</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-[#8c6478] hover:text-pink-500 transition-colors">Пользовательское соглашение</a>
                <a href="#" className="text-sm text-[#8c6478] hover:text-pink-500 transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#8c6478]">© 2025 Flexiя · Студия воздушной гимнастики</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
