import { useEffect, useState } from "react";
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

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const schedule: Record<string, { time: string; title: string; trainer: string; branch: string; age: string; color: string }[]> = {
  "Пн": [
    { time: "10:00", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 1", age: "от 4 лет", color: "pink" },
    { time: "12:00", title: "Фитнес", trainer: "Анна С.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "17:00", title: "Акробатика", trainer: "Daria V.", branch: "Студия 1", age: "от 6 лет", color: "pink" },
    { time: "19:00", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 1", age: "взрослые", color: "rose" },
    { time: "20:30", title: "Воздушные полотна", trainer: "Daria V.", branch: "Студия 2", age: "взрослые", color: "pink" },
  ],
  "Вт": [
    { time: "09:00", title: "Фитнес", trainer: "Анна С.", branch: "Студия 1", age: "взрослые", color: "rose" },
    { time: "11:00", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 2", age: "взрослые", color: "pink" },
    { time: "16:00", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 1", age: "дети", color: "rose" },
    { time: "18:00", title: "Акробатика", trainer: "Daria V.", branch: "Студия 2", age: "от 4 лет", color: "pink" },
    { time: "20:00", title: "Воздушные полотна", trainer: "Анна С.", branch: "Студия 1", age: "взрослые", color: "rose" },
  ],
  "Ср": [
    { time: "10:00", title: "Акробатика", trainer: "Daria V.", branch: "Студия 1", age: "от 4 лет", color: "pink" },
    { time: "12:00", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "17:30", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 1", age: "взрослые", color: "pink" },
    { time: "19:00", title: "Фитнес", trainer: "Анна С.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "20:30", title: "Воздушные полотна", trainer: "Daria V.", branch: "Студия 1", age: "взрослые", color: "pink" },
  ],
  "Чт": [
    { time: "09:00", title: "Воздушные полотна", trainer: "Daria V.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "11:00", title: "Акробатика", trainer: "Мария К.", branch: "Студия 1", age: "от 4 лет", color: "pink" },
    { time: "16:00", title: "Фитнес", trainer: "Анна С.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "18:30", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 1", age: "дети", color: "pink" },
    { time: "20:00", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 1", age: "взрослые", color: "rose" },
  ],
  "Пт": [
    { time: "10:00", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 2", age: "взрослые", color: "pink" },
    { time: "12:30", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 1", age: "от 4 лет", color: "rose" },
    { time: "17:00", title: "Воздушные полотна", trainer: "Daria V.", branch: "Студия 2", age: "взрослые", color: "pink" },
    { time: "19:00", title: "Акробатика", trainer: "Анна С.", branch: "Студия 1", age: "от 6 лет", color: "rose" },
    { time: "20:30", title: "Фитнес", trainer: "Анна С.", branch: "Студия 2", age: "взрослые", color: "pink" },
  ],
  "Сб": [
    { time: "10:00", title: "Детская акробатика", trainer: "Daria V.", branch: "Студия 1", age: "от 4 лет", color: "pink" },
    { time: "11:30", title: "Воздушное кольцо", trainer: "Мария К.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "13:00", title: "Pole sport", trainer: "Elizaveta V.", branch: "Студия 1", age: "взрослые", color: "pink" },
    { time: "15:00", title: "Воздушные полотна", trainer: "Daria V.", branch: "Студия 2", age: "взрослые", color: "rose" },
    { time: "17:00", title: "Фитнес", trainer: "Анна С.", branch: "Студия 1", age: "взрослые", color: "pink" },
  ],
};

export default function Schedule() {
  useReveal();
  const [activeDay, setActiveDay] = useState("Пн");
  const [activeBranch, setActiveBranch] = useState("Все");

  const classes = schedule[activeDay] || [];
  const filtered = activeBranch === "Все" ? classes : classes.filter((c) => c.branch === activeBranch);

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-up mb-12">
            <p className="text-xs font-medium tracking-widest text-pink-400 uppercase mb-4 font-body">Запись на занятия</p>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-tight mb-6">
              <span className="shimmer-text font-semibold">Расписание</span>
            </h1>
            <p className="text-[#8c6478] text-lg font-body font-light">Выберите день и студию — найдите удобное время.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 reveal">
            <div className="flex gap-2 flex-wrap">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                    activeDay === day
                      ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg shadow-pink-200"
                      : "bg-pink-50 text-[#8c6478] hover:bg-pink-100 border border-pink-100"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="flex gap-2 sm:ml-auto">
              {["Все", "Студия 1", "Студия 2"].map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBranch(b)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                    activeBranch === b
                      ? "bg-[#3d1a2e] text-white"
                      : "bg-pink-50 text-[#8c6478] hover:bg-pink-100 border border-pink-100"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule grid */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#8c6478] font-body">
                <Icon name="CalendarX" size={40} className="mx-auto mb-4 text-pink-200" />
                <p>В этот день занятий нет</p>
              </div>
            ) : (
              filtered.map((cls, i) => (
                <div
                  key={i}
                  className="reveal flex items-center gap-5 bg-white border border-pink-100 rounded-2xl p-5 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 transition-all group"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="w-20 text-center flex-shrink-0">
                    <span className="font-display text-2xl font-semibold text-[#3d1a2e]">{cls.time}</span>
                  </div>
                  <div className={`w-1 h-12 rounded-full flex-shrink-0 ${cls.color === "pink" ? "bg-gradient-to-b from-pink-400 to-pink-200" : "bg-gradient-to-b from-rose-400 to-rose-200"}`} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-semibold text-[#3d1a2e] mb-1">{cls.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon name="User" size={12} className="text-pink-400" />
                        <span className="text-xs text-[#8c6478] font-body">{cls.trainer}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon name="MapPin" size={12} className="text-pink-400" />
                        <span className="text-xs text-[#8c6478] font-body">{cls.branch}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon name="Users" size={12} className="text-pink-400" />
                        <span className="text-xs text-[#8c6478] font-body">{cls.age}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex-shrink-0 text-xs bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all shadow-md shadow-pink-200 font-body font-medium opacity-0 group-hover:opacity-100"
                  >
                    Записаться
                  </a>
                </div>
              ))
            )}
          </div>

          {/* Note */}
          <div className="mt-8 reveal">
            <div className="flex items-start gap-3 bg-pink-50 border border-pink-200 rounded-2xl p-5">
              <Icon name="Info" size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#8c6478] font-body leading-relaxed">
                Расписание носит ознакомительный характер. Актуальное расписание и запись — в личном кабинете. Воскресенье — выходной.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
