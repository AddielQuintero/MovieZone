import { ClassNameProps } from "@types"

export const MovieBackgroundImage = ({ className }: ClassNameProps) => {
  return (
    <>
      <div className={`absolute top-0 inset-0 -z-10  bg-[url('https://image.tmdb.org/t/p/original//1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg')] bg-cover bg-top ${className}`}>
        <div className="inset-0 h-full w-full bg-gradient-to-b from-transparent to-white" />
      </div>
    </>
  )
}
