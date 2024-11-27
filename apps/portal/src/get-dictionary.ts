import { Dictionary } from '@/locales';

const dictionaries = {
  en: (): Promise<Dictionary> => import('./locales/en.json').then((module) => module.default),
  vi: (): Promise<Dictionary> => import('./locales/vi.json').then((module) => module.default)
};

export const getDictionary = async (locale: string): Promise<Dictionary> => (dictionaries as Record<string, () => Promise<Dictionary>>)[locale]?.() ?? dictionaries.vi();
