export const languages: { code: string; name: string }[] = [
  { code: 'vi', name: 'Vietnamese' },
  { code: 'en', name: 'English' }
];
export const locales: string[] = languages.map((language) => language.code);
