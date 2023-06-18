import { colors } from '@material-tailwind/react/types/generic'

export interface ClassNameProps {
  className?: string
  classIcon?: string
  classTypography?: string
}

export interface LinkButtonProps extends ClassNameProps {
  IconComponent?: React.ElementType
  title: string
  redirect: string
  showIcon?: boolean
}

export interface IconicButtonProps extends ClassNameProps {
  IconComponent: React.ElementType
  color: colors
  name: string
}
