export const formatRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const formattedTime = `${hours}h ${minutes}m`
  return formattedTime
}
