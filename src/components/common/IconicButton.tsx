import { Button, Typography } from '@material-tailwind/react'
import { IconicButtonProps } from '@types'

export const IconicButton = ({ className, classTypography, classIcon, color, IconComponent, name, refButton, onClick }: IconicButtonProps) => {
  return (
    <Button className={className} color={color} onClick={onClick} ref={refButton}>
      <IconComponent className={classIcon} strokeWidth={2} />
      {name && <Typography className={classTypography}>{name}</Typography>}
    </Button>
  )
}
