export const applyTheme = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedTheme = localStorage.getItem('theme') || systemTheme

  document.body.classList.toggle('dark', storedTheme === 'dark' || storedTheme === true)
}
