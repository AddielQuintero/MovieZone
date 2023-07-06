import { Typography } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import { LinkButtonProps } from '@types'

export const LinkButton = ({ className, classTypography, title, redirect, IconComponent, classIcon }: LinkButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    redirect === '-1' && navigate(-1)
  }
 
  const to = redirect === '-1' ? '#' : redirect

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {IconComponent && <IconComponent className={classIcon} strokeWidth={2} />}
      <Typography className={classTypography}>{title}</Typography>
    </Link>
  )
}
