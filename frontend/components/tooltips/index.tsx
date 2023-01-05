import styled from '@emotion/styled'
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'

export const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#3a3939',
    color: '#ffffff',
    fontSize: 11,
    padding: '5px 1.2em',
  },
}))

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 11,
    borderRadius: '2em',
    padding: '5px 1.2em',
    border: '0.2px solid #c8c4c4',
  },
}))
