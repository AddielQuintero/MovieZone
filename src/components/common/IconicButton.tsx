import { Button, Typography } from '@material-tailwind/react'
import { IconicButtonProps } from '@types'

export const IconicButton = ({ className, classTypography, classIcon, color, IconComponent, name }: IconicButtonProps) => {
  return (
    <Button className={className} color={color}>
      <IconComponent className={classIcon} strokeWidth={2} />
      <Typography className={classTypography}>{name}</Typography>
    </Button>
  )
}
