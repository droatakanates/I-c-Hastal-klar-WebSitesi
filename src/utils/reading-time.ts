/**
 * Markdown gövdesinden tahmini okuma süresini hesaplar.
 * Türkçe için 200 kelime/dakika varsayılan (akademik yazı için biraz daha yavaş).
 */
export function calculateReadingTime(text: string, wpm = 200): string {
  if (!text) return '1 dk';
  // Markdown sentaksını sayma dışı bırakmak için basit temizlik
  const cleaned = text
    .replace(/```[\s\S]*?```/g, '') // kod blokları
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // resimler
    .replace(/\[[^\]]+\]\([^)]+\)/g, '$1') // linkler
    .replace(/[#*_>~`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleaned.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} dk`;
}
