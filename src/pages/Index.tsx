import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7255356c-8552-44f8-98ab-e1c3fedaa38d/files/7ab61139-7874-489e-b636-02fe036c6c84.jpg";
const STUDIO_IMAGE = "https://cdn.poehali.dev/projects/7255356c-8552-44f8-98ab-e1c3fedaa38d/files/38e6635b-9da0-4204-b389-ffcf1944a7e2.jpg";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

const directions = [
  { num: "01", title: "Pole sport", desc: "Спортивная дисциплина на пилоне. Сила, гибкость, координация и пластика — с нуля.", icon: "Star" },
  { num: "02", title: "Воздушное кольцо", desc: "Элегантные позы, вращения и поддержки в воздухе. Берём с 5 лет.", icon: "Circle" },
  { num: "03", title: "Воздушные полотна", desc: "Акробатика на шёлке. Один из самых красивых видов — развивает тело в целом.", icon: "Wind" },
  { num: "04", title: "Акробатика", desc: "Стойки, перекиды, колесо. Смелость и ловкость для любого возраста.", icon: "Zap" },
  { num: "05", title: "Фитнес", desc: "Функциональные тренировки — отличная база для любого направления.", icon: "Flame" },
  { num: "06", title: "Соревнования", desc: "Готовим к выступлениям. Наши тренеры — практикующие спортсмены с победами.", icon: "Trophy" },
];

const stats = [
  { num: "5+", label: "лет работы" },
  { num: "2", label: "студии в Перми" },
  { num: "6", label: "направлений" },
  { num: "5 лет", label: "минимальный возраст" },
];

const audiences = [
  {
    tag: "Детям",
    title: "Дети от 5 лет",
    desc: "Игровой формат, терпеливые тренеры и безопасная среда. Ребёнок развивает координацию, смелость и уверенность.",
    icon: "Heart",
  },
  {
    tag: "Взрослым",
    title: "Взрослые и подростки",
    desc: "Приходите с нуля — всему научим. Красивое тело, новые ощущения и хорошая компания.",
    icon: "Sparkles",
  },
  {
    tag: "Спорт",
    title: "Спортсмены",
    desc: "Готовим к соревнованиям, повышаем технику, работаем со сложными элементами. Индивидуально и в группах.",
    icon: "Award",
  },
];

const whyUs = [
  { title: "Профессиональные тренеры", desc: "Elizaveta и Daria Vakhrusheva — действующие спортсмены с победами на соревнованиях.", icon: "Users" },
  { title: "Личный кабинет онлайн", desc: "Расписание, посещаемость, абонементы — всё в приложении. Оплата без очередей.", icon: "Smartphone" },
  { title: "Пробное занятие", desc: "Первый раз — всегда пробный урок. Попробуйте без обязательств.", icon: "Gift" },
  { title: "Удобное расписание", desc: "Пн — Сб с 8:00 до 23:00. Выберите время, которое подходит именно вам.", icon: "Clock" },
];

export default function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <span className="font-display text-2xl font-bold tracking-tight text-[#3d1a2e]">
            Flexi<span className="shimmer-text">я</span>
          </span>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="text-sm text-pink-400 hover:text-pink-600 transition-colors px-3 py-1.5 font-body">
              Клиентам
            </a>
            <a
              href="#"
              className="text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-200 font-body font-medium"
            >
              Записаться
            </a>
          </div>
          <button className="sm:hidden p-2 text-pink-400" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-3 border-t border-pink-100">
            <a href="#" className="text-sm text-pink-400 py-1">Клиентам</a>
            <a href="#" className="text-sm bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2.5 rounded-full text-center font-medium">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs font-body font-medium text-pink-500 tracking-widest uppercase">
                Студия воздушной гимнастики · Пермь
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 animate-fade-up animation-delay-200">
              Летать<br />
              <em className="shimmer-text not-italic font-semibold">умеют все</em>
            </h1>
            <p className="text-[#8c6478] text-lg max-w-md mb-10 leading-relaxed font-body font-light animate-fade-up animation-delay-400">
              Pole sport, воздушное кольцо, акробатика и полотна. Для детей от 5 лет и взрослых с любым уровнем подготовки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-xl shadow-pink-200 text-sm group"
              >
                Пробное занятие
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#directions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-50 text-pink-500 font-medium rounded-full hover:bg-pink-100 transition-all text-sm border border-pink-200"
              >
                Направления
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in animation-delay-400 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-100 rounded-[3rem] rotate-3 scale-105" />
            <img
              src={HERO_IMAGE}
              alt="Воздушная акробатика Flexia"
              className="relative rounded-[3rem] w-full h-[580px] object-cover shadow-2xl shadow-pink-200"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-pink-100 px-6 py-4 animate-float">
              <p className="text-xs text-pink-400 font-medium uppercase tracking-widest mb-1">Следующее занятие</p>
              <p className="font-display text-lg font-semibold text-[#3d1a2e]">Сегодня в 19:00</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl shadow-xl shadow-pink-200 px-5 py-3 text-white animate-float animation-delay-400">
              <p className="text-xs opacity-80 mb-0.5">Пробное</p>
              <p className="font-display text-lg font-semibold">Бесплатно</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pink-300 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl border border-pink-100 px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ num, label }, i) => (
              <div key={label} className={`reveal text-center`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-rose-500 mb-1">
                  {num}
                </p>
                <p className="text-sm text-[#8c6478] font-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section id="directions" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="reveal-left">
              <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Чему мы учим</p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
                Шесть<br /><span className="shimmer-text font-semibold">направлений</span>
              </h2>
            </div>
            <p className="text-[#8c6478] max-w-xs text-sm leading-relaxed font-body reveal">
              Выберите то, что вам подходит — или попробуйте всё. Наши тренеры помогут с нуля.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {directions.map(({ num, title, desc, icon }, i) => (
              <div
                key={num}
                className="reveal group bg-white border border-pink-100 rounded-2xl p-7 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                    <Icon name={icon} size={18} className="text-pink-400" />
                  </div>
                  <span className="text-xs font-mono text-pink-200 group-hover:text-pink-300 transition-colors">{num}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 text-[#3d1a2e]">{title}</h3>
                <p className="text-sm text-[#8c6478] leading-relaxed font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Возраст не важен</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Для кого</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map(({ tag, title, desc, icon }, i) => (
              <div
                key={title}
                className="reveal group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:border-pink-200 transition-all hover:shadow-xl hover:shadow-pink-100"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-200/30 group-hover:scale-125 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md shadow-pink-100 flex items-center justify-center mb-6">
                    <Icon name={icon} size={22} className="text-pink-400" />
                  </div>
                  <span className="inline-block text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 bg-white/70 px-3 py-1 rounded-full font-body">
                    {tag}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mb-3 text-[#3d1a2e]">{title}</h3>
                  <p className="text-sm text-[#8c6478] leading-relaxed font-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio image section */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden reveal">
            <img
              src={STUDIO_IMAGE}
              alt="Студия Flexia"
              className="w-full h-80 md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d1a2e]/70 to-transparent" />
            <div className="absolute inset-0 flex items-center px-12 md:px-20">
              <div className="text-white max-w-lg">
                <p className="text-xs font-medium tracking-widest text-pink-300 uppercase mb-4 font-body">Наша атмосфера</p>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                  Место, где рождаются мечты
                </h2>
                <p className="text-pink-100 text-sm leading-relaxed font-body font-light max-w-sm">
                  Две профессионально оборудованные студии в Перми. Просторные залы, современное оборудование и тёплая атмосфера поддержки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-left mb-16">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Наши преимущества</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">
              Почему <span className="shimmer-text font-semibold">Flexiя</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {whyUs.map(({ title, desc, icon }, i) => (
              <div
                key={title}
                className="reveal flex gap-5 p-7 rounded-2xl border border-pink-100 bg-white hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center flex-shrink-0 group-hover:from-pink-200 group-hover:to-rose-200 transition-colors">
                  <Icon name={icon} size={20} className="text-pink-500" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-[#3d1a2e]">{title}</h3>
                  <p className="text-sm text-[#8c6478] leading-relaxed font-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-[2.5rem] border border-pink-100 p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-6 font-body">Адреса</p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                Две студии<br />в Перми
              </h2>
              <p className="text-[#8c6478] text-sm mb-2 font-body">Пн — Сб, 8:00 — 23:00</p>
              <p className="text-[#8c6478] text-sm mb-8 font-body">Воскресенье — выходной</p>
              <a
                href="tel:+79630149305"
                className="font-display text-3xl font-semibold text-[#3d1a2e] hover:text-pink-500 transition-colors"
              >
                +7 (963) 014-93-05
              </a>
            </div>
            <div className="space-y-4 reveal">
              {[
                { name: "Студия 1", addr: "ул. Советской Армии, 6" },
                { name: "Студия 2", addr: "ул. Уинская, 41" },
              ].map(({ name, addr }) => (
                <div
                  key={addr}
                  className="bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    <p className="text-xs text-pink-400 uppercase tracking-widest font-medium font-body">{name}</p>
                  </div>
                  <p className="font-display text-2xl font-semibold text-[#3d1a2e]">{addr}</p>
                  <p className="text-sm text-[#8c6478] mt-1 font-body">Пермь</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block reveal">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-[3rem] blur-2xl opacity-60 animate-blob" />
            <div className="relative bg-gradient-to-br from-pink-400 to-rose-400 rounded-[2.5rem] px-12 py-16 shadow-2xl shadow-pink-200">
              <p className="text-xs font-medium tracking-widest text-pink-100 uppercase mb-6 font-body">
                Начни прямо сейчас
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
                Первое занятие —<br />пробное
              </h2>
              <p className="text-pink-100 text-lg mb-10 max-w-md mx-auto font-body font-light">
                Зарегистрируйтесь, выберите направление и студию. Это займёт 2 минуты.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-pink-500 font-medium rounded-full hover:bg-pink-50 transition-all shadow-lg font-body text-sm group"
              >
                Записаться сейчас
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-pink-100 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-bold text-[#3d1a2e]">
            Flexi<span className="shimmer-text">я</span>
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#8c6478] hover:text-pink-500 transition-colors font-body">
              Пользовательское соглашение
            </a>
            <a href="#" className="text-xs text-[#8c6478] hover:text-pink-500 transition-colors font-body">
              Публичная оферта
            </a>
          </div>
          <p className="text-xs text-[#8c6478] font-body">© 2025 Flexiя</p>
        </div>
      </footer>
    </div>
  );
}