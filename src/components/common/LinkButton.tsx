import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { LinkButtonProps } from '@types'

export const LinkButton = ({ className, classTypography, title, redirect, IconComponent, classIcon }: LinkButtonProps) => {
  return (
    <Link to={redirect} className={className}>
      {IconComponent && <IconComponent className={classIcon} strokeWidth={2} />}
      <Typography className={classTypography}>{title}</Typography>
    </Link>
  )
}
