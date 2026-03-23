import { useEffect } from "react";
import Icon from "@/components/ui/icon";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const plans = [
  {
    name: "Пробное",
    price: "0",
    period: "разовое",
    desc: "Первое занятие — бесплатно",
    features: ["1 занятие по выбору", "Любая студия", "Любой тренер", "Без обязательств"],
    cta: "Записаться",
    featured: false,
  },
  {
    name: "Абонемент 8",
    price: "3 200",
    period: "месяц",
    desc: "8 занятий в месяц",
    features: ["8 занятий", "2 раза в неделю", "Любая студия", "Перенос 1 занятия", "Доступ к расписанию"],
    cta: "Выбрать",
    featured: true,
  },
  {
    name: "Абонемент 12",
    price: "4 500",
    period: "месяц",
    desc: "12 занятий в месяц",
    features: ["12 занятий", "3 раза в неделю", "Любая студия", "Перенос 2 занятий", "Доступ к расписанию", "Скидка на форму 10%"],
    cta: "Выбрать",
    featured: false,
  },
];

const extras = [
  { title: "Разовое занятие", price: "600 ₽" },
  { title: "Индивидуальное занятие", price: "1 800 ₽" },
  { title: "Абонемент на 4 занятия", price: "2 000 ₽" },
  { title: "Детский абонемент (8 занятий)", price: "2 800 ₽" },
];

export default function Prices() {
  useReveal();

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-up mb-16 text-center">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Стоимость занятий</p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              <span className="shimmer-text font-semibold">Цены</span>
            </h1>
            <p className="text-[#8c6478] text-lg font-body font-light max-w-md mx-auto">
              Прозрачные цены без скрытых платежей. Первое занятие — всегда бесплатно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map(({ name, price, period, desc, features, cta, featured }, i) => (
              <div
                key={name}
                className={`reveal rounded-3xl p-8 transition-all ${
                  featured
                    ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-2xl shadow-pink-200 scale-105"
                    : "bg-white border border-pink-100 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {featured && (
                  <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full mb-4">
                    <Icon name="Star" size={11} className="text-white" />
                    <span className="text-xs text-white font-body font-medium">Популярный</span>
                  </div>
                )}
                <h3 className={`font-display text-2xl font-semibold mb-1 ${featured ? "text-white" : "text-[#3d1a2e]"}`}>{name}</h3>
                <p className={`text-sm mb-5 font-body ${featured ? "text-pink-100" : "text-[#8c6478]"}`}>{desc}</p>
                <div className="mb-6">
                  <span className={`font-display text-5xl font-bold ${featured ? "text-white" : "text-[#3d1a2e]"}`}>{price}</span>
                  {price !== "0" && <span className={`text-sm font-body ml-1 ${featured ? "text-pink-100" : "text-[#8c6478]"}`}>₽ / {period}</span>}
                  {price === "0" && <span className={`text-sm font-body ml-1 ${featured ? "text-pink-100" : "text-[#8c6478]"}`}>₽</span>}
                </div>
                <div className="space-y-2.5 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${featured ? "bg-white/20" : "bg-pink-100"}`}>
                        <Icon name="Check" size={10} className={featured ? "text-white" : "text-pink-500"} />
                      </div>
                      <span className={`text-sm font-body ${featured ? "text-pink-50" : "text-[#8c6478]"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all ${
                    featured
                      ? "bg-white text-pink-500 hover:bg-pink-50 shadow-lg"
                      : "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-200"
                  }`}
                >
                  {cta} <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="reveal bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl border border-pink-100 p-8 mb-10">
            <h2 className="font-display text-2xl font-semibold text-[#3d1a2e] mb-6">Дополнительные варианты</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {extras.map(({ title, price }) => (
                <div key={title} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-pink-100">
                  <span className="text-sm text-[#3d1a2e] font-body">{title}</span>
                  <span className="font-display text-lg font-semibold text-pink-500">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex items-start gap-3 bg-pink-50 border border-pink-200 rounded-2xl p-5">
            <Icon name="Info" size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#8c6478] font-body leading-relaxed">
              Цены указаны за групповые занятия. Абонементы активируются с первого посещения и действуют 30 дней. Оплата через личный кабинет или на месте.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
