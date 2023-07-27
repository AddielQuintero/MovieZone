import { QueryParamProps, TFunctionProps } from '@types'
import { color } from '@material-tailwind/react/types/components/button'

export interface ClassNameProps {
  className?: string
  classIcon?: string
  classTypography?: string
  classImage?: string
  classImageReflection?: string
  classListGenres?: string
  variant?: string
}

export interface LinkButtonProps extends ClassNameProps {
  IconComponent?: React.ElementType
  title: string
  redirect: string
  showIcon?: boolean
}

export interface IconicButtonProps extends ClassNameProps {
  IconComponent: React.ElementType
  color: color
  name?: string
  onClick?: () => void
  refButton?: React.Ref<HTMLButtonElement>
}

export interface PageHeaderProps extends QueryParamProps, TFunctionProps {}
