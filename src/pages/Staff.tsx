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

const trainers = [
  {
    name: "Elizaveta Vakhrusheva",
    role: "Основатель · Тренер по Pole sport",
    exp: "7 лет опыта",
    tags: ["Pole sport", "Воздушное кольцо", "Соревнования"],
    desc: "Действующая спортсменка, многократный призёр региональных соревнований. Специализируется на технике пилона и подготовке к выступлениям.",
    icon: "User",
  },
  {
    name: "Daria Vakhrusheva",
    role: "Тренер по воздушной гимнастике",
    exp: "5 лет опыта",
    tags: ["Воздушные полотна", "Акробатика", "Дети"],
    desc: "Специалист по воздушным полотнам и детской акробатике. Умеет найти подход к самым маленьким ученикам и раскрыть их потенциал.",
    icon: "User",
  },
  {
    name: "Анна Смирнова",
    role: "Тренер по фитнесу и акробатике",
    exp: "4 года опыта",
    tags: ["Фитнес", "Акробатика", "Взрослые"],
    desc: "Сертифицированный фитнес-тренер. Ведёт функциональные тренировки и помогает ученикам подготовить тело к воздушным дисциплинам.",
    icon: "User",
  },
  {
    name: "Мария Козлова",
    role: "Тренер по воздушному кольцу",
    exp: "3 года опыта",
    tags: ["Воздушное кольцо", "Растяжка", "Дети"],
    desc: "Специалист по воздушному кольцу для детей и взрослых. Создаёт безопасную и вдохновляющую среду на каждом занятии.",
    icon: "User",
  },
];

export default function Staff() {
  useReveal();

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up mb-16">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Наша команда</p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              <span className="shimmer-text font-semibold">Тренеры</span>
            </h1>
            <p className="text-[#8c6478] text-xl max-w-xl leading-relaxed font-body font-light">
              Профессионалы, которые сами занимаются тем, чему учат. Каждый тренер — практикующий спортсмен с реальным опытом.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainers.map(({ name, role, exp, tags, desc, icon }, i) => (
              <div
                key={name}
                className="reveal group bg-white border border-pink-100 rounded-3xl p-8 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100 transition-all"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center flex-shrink-0 group-hover:from-pink-300 group-hover:to-rose-300 transition-colors">
                    <Icon name={icon} size={28} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#3d1a2e] mb-1">{name}</h3>
                    <p className="text-sm text-[#8c6478] font-body">{role}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Icon name="Clock" size={12} className="text-pink-400" />
                      <span className="text-xs text-pink-400 font-body">{exp}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#8c6478] leading-relaxed font-body mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pink-50 text-pink-500 border border-pink-200 px-3 py-1 rounded-full font-body">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl border border-pink-100 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl font-light text-[#3d1a2e] mb-2">Хотите заниматься у нас?</h2>
              <p className="text-[#8c6478] text-sm font-body">Запишитесь на пробное занятие с любым из тренеров.</p>
            </div>
            <a
              href="#"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium px-8 py-4 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-200 text-sm"
            >
              Записаться на пробное <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
