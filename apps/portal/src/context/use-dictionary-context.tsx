'use client';

import { getDictionary } from '@/get-dictionary';
import React, { useEffect, useState } from 'react';
import DEFAULT_DICTIONARY from '@/locales/vi.json';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = React.createContext<{ language: string; dictionary: Dictionary; setSelectedLanguage: React.Dispatch<React.SetStateAction<string>> } | null>(null);

export default function DictionaryProvider({ language, children }: { language: string; children: React.ReactNode }) {
  const [dictionary, setDictionary] = useState<Dictionary>(DEFAULT_DICTIONARY);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionaryData = await getDictionary(selectedLanguage);
      setDictionary(dictionaryData);
    };

    fetchDictionary();
  }, [language, selectedLanguage]);

  return <DictionaryContext.Provider value={{ language: selectedLanguage, dictionary, setSelectedLanguage }}>{children}</DictionaryContext.Provider>;
}

export function useDictionary() {
  const { dictionary, language, setSelectedLanguage } = React.useContext(DictionaryContext) || {};

  if (!(dictionary && language && setSelectedLanguage)) {
    throw new Error('useDictionary hook must be used within DictionaryProvider');
  }

  return { dictionary, language, setSelectedLanguage };
}
