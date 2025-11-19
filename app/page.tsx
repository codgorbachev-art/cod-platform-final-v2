"use client";
import React from 'react';
// ИСПРАВЛЕННЫЙ ПУТЬ: Смена '@/store/calculatorStore' на '../store/calculatorStore'
import { useCalculatorStore } from '../store/calculatorStore';
import { motion } from 'framer-motion';

export default function SpeedCalculator() {
  const { baseTimeMinutes, bonuses, setBaseTime, setBonus, calculateFinalTime } = useCalculatorStore();
  
  const finalTime = calculateFinalTime();
  const savedTime = baseTimeMinutes - finalTime;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cod-panel p-6 rounded-xl border border-slate-700 text-white shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-cod-gold mb-4">⏳ Калькулятор Ускорений</h2>
      
      <div className="grid gap-4 mb-6">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Базовое время (минуты)</label>
          <input 
            type="number" 
            value={baseTimeMinutes}
            onChange={(e) => setBaseTime(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white focus:border-cod-gold outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.keys(bonuses).map((key) => (
            <div key={key}>
              <label className="block text-sm text-slate-400 mb-1 capitalize">{key} Bonus (%)</label>
              <input 
                type="number"
                value={bonuses[key as keyof typeof bonuses]}
                onChange={(e) => setBonus(key as any, Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white focus:border-cod-gold outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 p-4 rounded-lg border border-cod-gold/30">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-slate-400 text-sm">Итоговое время:</p>
            <p className="text-3xl font-bold text-green-400">{finalTime.toFixed(1)} мин</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-sm">Сэкономлено:</p>
            <p className="text-xl font-bold text-cod-gold">{savedTime.toFixed(1)} мин</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}