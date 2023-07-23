export const CONFIG = {
  API_KEY: import.meta.env.VITE_API_KEY,
  API_BASE: import.meta.env.VITE_API_BASE,
  originalImage: (imgPath: string | undefined) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath: string | undefined) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}
