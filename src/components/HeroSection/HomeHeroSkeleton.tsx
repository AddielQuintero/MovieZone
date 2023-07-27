import { MovieSkeleton } from '@types'

export const HomeHeroSkeleton = ({ reflection, cardCount }: MovieSkeleton) => {
  return (
    <>
      <div
        className={`relative grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 min-h-[620px] pt-12 pb-64 px-5 sm:px-10 md:px-12 xl:px-24 2xl:px-48 animate-pulse dark:bg-slate-950 ${
          reflection ? 'bg-gray-400 h-[calc(100vh-50px)]' : ''
        }`}
      >
        <div className="bg-gray-300 dark:bg-slate-700/95 h-64 w-4/5 mx-auto mb-2 rounded-2xl" />
        <div className="w-full relative text-gray-300">
          <div className="space-y-1 mb-4">
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              <div className="h-4 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
            </div>
          </div>

          <div className="h-8 mb-4 bg-gray-300 dark:bg-slate-700/95 rounded"></div>

          <div className="h-16 hidden sm:block bg-gray-300 dark:bg-slate-700/95 rounded"></div>

          <div className="grid grid-cols-2 pt-6">
            <div className="h-8 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
          </div>

          <div className="space-y-1 pt-6">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="h-8 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
              <div className="h-8 bg-gray-300 dark:bg-slate-700/95 rounded col-span-1"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end h-full w-full bg-gray-5000">
          <div className="h-8 w-24 bg-gray-300 dark:bg-slate-700/95 rounded"></div>
        </div>
      </div>
      {reflection && (
        <div className="h-0 px-5 sm:px-10 md:px-12 xl:px-24 2xl:px-48 animate-pulse">
          <div className="card flex justify-center -translate-y-full gap-4 pt-8">
            {Array(cardCount)
              .fill({})
              .map((_, index) => (
                <div key={index}>
                  <div className="h-28  min-w-[156px] bg-gray-100 dark:bg-slate-700/95 rounded"></div>
                  <div className="h-10"></div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
