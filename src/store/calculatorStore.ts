import { create } from 'zustand';

interface CalculatorState {
  baseTimeMinutes: number;
  bonuses: {
    alliance: number; // %
    tech: number;     // %
    runes: number;    // %
    vip: number;      // %
  };
  setBaseTime: (time: number) => void;
  setBonus: (key: keyof CalculatorState['bonuses'], value: number) => void;
  calculateFinalTime: () => number;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  baseTimeMinutes: 60, 
  bonuses: {
    alliance: 0,
    tech: 0,
    runes: 0,
    vip: 0,
  },
  setBaseTime: (time) => set({ baseTimeMinutes: time }),
  setBonus: (key, value) =>
    set((state) => ({
      bonuses: { ...state.bonuses, [key]: value },
    })),
  calculateFinalTime: () => {
    const { baseTimeMinutes, bonuses } = get();
    const totalBonusDecimal = (bonuses.alliance + bonuses.tech + bonuses.runes + bonuses.vip) / 100;
    
    // Формула: T_base / (1 + TotalBonus)
    return baseTimeMinutes / (1 + totalBonusDecimal);
  },
}));