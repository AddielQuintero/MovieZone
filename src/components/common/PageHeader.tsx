import { Typography } from '@material-tailwind/react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { LinkButton } from '@components'
import { PageHeaderProps, TTranslations } from '@types'

export const PageHeader = ({ category = '', keyword, t }: PageHeaderProps) => {
  const translations: TTranslations = {
    trending: t('lang.trending'),
    categories: t('lang.categories'),
    popular: t('lang.popular'),
    upcoming: t('lang.upcoming'),
    favorites: t('lang.favorites'),
  }

  const translate = keyword === null ? translations[category] || category : keyword

  return (
    <div className="flex justify-between items-center mb-2 gap-5">
      <Typography
        variant="h3"
        className="mr-2 cursor-pointer py-1.5 font-bold text-pink-400 capitalize w-[58%] md:w-[78%] break-words max-md:text-[27px]"
      >
        {translate}
      </Typography>
      <LinkButton
        className="flex items-center gap-1 text-pink-400 align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1.5 px-4 rounded-lg border border-pink-500  hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] "
        classIcon="h-5 w-5 inline"
        classTypography="font-bold text-xs"
        title={`${t('lang.goBack')}`}
        redirect="-1"
        IconComponent={ArrowLongLeftIcon}
      />
    </div>
  )
}
