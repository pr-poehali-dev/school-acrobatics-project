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

const branches = [
  {
    id: "01",
    name: "Студия на Советской",
    address: "ул. Советской Армии, 6",
    city: "Пермь",
    metro: "10 мин от центра",
    hours: "Пн — Сб, 8:00 — 23:00",
    phone: "+7 (963) 014-93-05",
    directions: ["Pole sport", "Воздушное кольцо", "Акробатика"],
    features: ["Парковка", "Раздевалки", "Душевые", "Магазин формы"],
    mapUrl: "https://yandex.ru/maps/50/perm/?text=ул.+Советской+Армии+6",
  },
  {
    id: "02",
    name: "Студия на Уинской",
    address: "ул. Уинская, 41",
    city: "Пермь",
    metro: "Удобный район",
    hours: "Пн — Сб, 8:00 — 23:00",
    phone: "+7 (963) 014-93-05",
    directions: ["Воздушные полотна", "Фитнес", "Соревнования"],
    features: ["Парковка", "Раздевалки", "Большой зал", "Детская зона"],
    mapUrl: "https://yandex.ru/maps/50/perm/?text=ул.+Уинская+41",
  },
];

export default function Branches() {
  useReveal();

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up mb-16">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Где мы находимся</p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              Наши <span className="shimmer-text font-semibold">филиалы</span>
            </h1>
            <p className="text-[#8c6478] text-xl max-w-xl leading-relaxed font-body font-light">
              Две студии в Перми — выберите ту, что ближе к вам. В обеих одинаковый уровень оборудования и профессионализма.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {branches.map(({ id, name, address, city, metro, hours, phone, directions, features, mapUrl }, i) => (
              <div
                key={id}
                className="reveal bg-white border border-pink-100 rounded-3xl overflow-hidden hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-100 transition-all group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Map placeholder */}
                <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f9a8d4%22%20fill-opacity%3D%220.2%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-lg">
                      <Icon name="MapPin" size={22} className="text-white" />
                    </div>
                    <span className="font-display text-lg font-semibold text-[#3d1a2e]">{id}</span>
                  </div>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 text-xs bg-white/80 backdrop-blur-sm text-pink-500 px-3 py-1.5 rounded-full hover:bg-white transition-all flex items-center gap-1 font-body"
                  >
                    Открыть карту <Icon name="ExternalLink" size={11} />
                  </a>
                </div>

                <div className="p-8">
                  <div className="mb-5">
                    <h2 className="font-display text-2xl font-semibold text-[#3d1a2e] mb-1">{name}</h2>
                    <div className="flex items-center gap-1.5">
                      <Icon name="MapPin" size={14} className="text-pink-400" />
                      <p className="text-sm text-[#8c6478] font-body">{address}, {city}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Icon name="Navigation" size={14} className="text-pink-400" />
                      <p className="text-xs text-pink-400 font-body">{metro}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-pink-50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="Clock" size={13} className="text-pink-400" />
                        <span className="text-xs text-pink-400 font-body uppercase tracking-wide">Часы работы</span>
                      </div>
                      <p className="text-sm font-medium text-[#3d1a2e] font-body">{hours}</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="Phone" size={13} className="text-pink-400" />
                        <span className="text-xs text-pink-400 font-body uppercase tracking-wide">Телефон</span>
                      </div>
                      <a href={`tel:${phone}`} className="text-sm font-medium text-[#3d1a2e] font-body hover:text-pink-500 transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-medium uppercase tracking-widest text-pink-400 mb-3 font-body">Направления</p>
                    <div className="flex flex-wrap gap-2">
                      {directions.map((d) => (
                        <span key={d} className="text-xs bg-gradient-to-r from-pink-50 to-rose-50 text-pink-500 border border-pink-200 px-3 py-1 rounded-full font-body">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-pink-400 mb-3 font-body">Удобства</p>
                    <div className="grid grid-cols-2 gap-2">
                      {features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                          <span className="text-xs text-[#8c6478] font-body">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium px-6 py-3.5 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-200 text-sm"
                  >
                    Записаться в эту студию <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl border border-pink-100 p-10 text-center">
            <h2 className="font-display text-3xl font-light text-[#3d1a2e] mb-3">Не знаете, какую студию выбрать?</h2>
            <p className="text-[#8c6478] text-sm font-body mb-6 max-w-md mx-auto">Позвоните нам — поможем подобрать удобное время и место.</p>
            <a href="tel:+79630149305" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium px-8 py-4 rounded-full text-sm hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg shadow-pink-200">
              <Icon name="Phone" size={14} />
              +7 (963) 014-93-05
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
