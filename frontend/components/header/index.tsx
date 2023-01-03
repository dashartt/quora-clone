import { useMediaQuery } from '@mui/material'
import DHeader from './DHeader'
import MHeader from './MHeader'

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return <>{isDesktop ? <DHeader /> : <MHeader />}</>
}
