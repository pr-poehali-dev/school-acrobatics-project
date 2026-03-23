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

const values = [
  { icon: "Heart", title: "Забота о каждом", desc: "Индивидуальный подход к каждому ученику — от 4 лет до взрослых спортсменов." },
  { icon: "Shield", title: "Безопасность", desc: "Профессиональное оборудование, страховка и постепенное освоение элементов." },
  { icon: "Star", title: "Результат", desc: "Наши ученики побеждают на соревнованиях и просто радуются своим успехам." },
  { icon: "Users", title: "Сообщество", desc: "Тёплая атмосфера, взаимная поддержка и настоящая дружба в студии." },
];

export default function About() {
  useReveal();

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Кто мы</p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              О <span className="shimmer-text font-semibold">студии</span>
            </h1>
            <p className="text-[#8c6478] text-xl max-w-2xl leading-relaxed font-body font-light">
              Flexiя — это студия воздушной гимнастики в Перми, где мечты становятся реальностью. Мы работаем уже более 5 лет и помогаем людям всех возрастов открыть в себе силу, грацию и уверенность.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100">
              <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-6 font-body">Наша история</p>
              <p className="font-display text-2xl font-light text-[#3d1a2e] leading-relaxed mb-4">
                Студия была основана с простой идеей: сделать воздушную гимнастику доступной для каждого.
              </p>
              <p className="text-[#8c6478] text-sm leading-relaxed font-body">
                За эти годы мы выросли из одного зала в две полноценные студии, собрали команду профессиональных тренеров и воспитали сотни учеников — от малышей 4 лет до взрослых, открывших для себя новый вид спорта.
              </p>
            </div>
          </div>
          <div className="reveal space-y-6">
            {[
              { year: "2019", text: "Открытие первой студии на ул. Советской Армии" },
              { year: "2021", text: "Расширение — вторая студия на ул. Уинской" },
              { year: "2022", text: "Первые победы учеников на региональных соревнованиях" },
              { year: "2024", text: "Более 300 активных учеников и 6 направлений" },
            ].map(({ year, text }) => (
              <div key={year} className="flex gap-5 items-start">
                <div className="w-16 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-white">{year}</span>
                </div>
                <p className="text-sm text-[#8c6478] font-body leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Что нами движет</p>
            <h2 className="font-display text-5xl font-light">Наши ценности</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal text-center p-8 rounded-2xl border border-pink-100 bg-white hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100 transition-all group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mx-auto mb-5 group-hover:from-pink-200 group-hover:to-rose-200 transition-colors">
                  <Icon name={icon} size={24} className="text-pink-500" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-[#3d1a2e]">{title}</h3>
                <p className="text-sm text-[#8c6478] leading-relaxed font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl p-12 text-center text-white">
            <h2 className="font-display text-4xl font-light mb-4">Станьте частью нашей семьи</h2>
            <p className="text-pink-100 mb-8 font-body">Запишитесь на пробное занятие — бесплатно и без обязательств.</p>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-pink-500 font-medium px-8 py-4 rounded-full hover:bg-pink-50 transition-all text-sm">
              Попробовать бесплатно <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
