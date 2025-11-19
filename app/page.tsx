import SpeedCalculator from '../components/SpeedCalculator'; 
import Link from 'next/link';
import liliyaData from '../data/heroes/liliya.json';

export default async function Home() {
  const hero = liliyaData;

  return (
    <main className="min-h-screen bg-cod-dark text-slate-200 p-4 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cod-gold to-orange-600 mb-4">
            Call of Dragons Community
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Интерактивная платформа стратегического анализа и планирования. 
            Математически точные расчеты, гайды и инструменты.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Блок с Калькулятором */}
          <section>
            <SpeedCalculator />
          </section>

          {/* Блок с данными Героя (Демонстрация Content as Code) */}
          <section className="bg-cod-panel p-6 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-cod-gold mb-4">🔥 Герой Месяца</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <h3 className="text-xl font-bold text-white">{hero.name.ru}</h3>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/50 uppercase">
                  {hero.rarity}
                </span>
              </div>
              
              <div className="flex gap-2">
                {hero.role.map((r: string) => (
                  <span key={r} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">{r}</span>
                ))}
              </div>

              <div className="bg-slate-900/50 p-4 rounded border border-slate-700 mt-4">
                <h4 className="font-bold text-blue-400 mb-1">{hero.skills[0].name.ru}</h4>
                <p className="text-sm text-slate-400">{hero.skills[0].description.ru}</p>
                <p className="text-xs text-slate-500 mt-2 text-right">Коэффициент урона: {hero.skills[0].damageFactor}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-700 text-center">
              <p className="text-xs text-slate-500 mb-2">
                Данные подгружаются напрямую из GitHub JSON
              </p>
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded transition text-sm">
                Посмотреть полное дерево талантов →
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}