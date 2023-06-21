import { MovieImageProps } from '@types'

export const MovieBackgroundImage = ({ url, className, classImage, classImageReflection,}: MovieImageProps) => {

  return (
    <>
      <div className={className}>
        <img className={`${classImage} w-full h-full object-center`} src={url} alt="" />
      </div>
      {classImageReflection && (
        <div className={`${classImageReflection} relative h-10 opacity-40 overflow-hidden px-2`}>
          <img className="w-full h-36 pt-8 rounded-b-lg -scale-y-100 transform transition-all duration-[.35s]" src={url} alt="" />
        </div>
      )}
    </>
  )
}

   //<div className="inset-0 h-full w-full bg-gradient-to-b from-transparent to-white" /> 
   //<div className={`absolute top-0 inset-0 -z-10  bg-[url('https://image.tmdb.org/t/p/original//1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg')] bg-cover bg-top ${className}`}>

