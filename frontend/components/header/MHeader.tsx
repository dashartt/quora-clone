import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { FiSearch } from 'react-icons/fi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Box } from '@mui/material'

export default function MHeader() {
  return (
    <AppBar position='sticky' className='p-3 bg-slate-100 flex flex-row justify-between'>
      <Box className='flex flex-row items-center space-x-3'>
        <Avatar
          className='border border-black'
          src='https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2022/10/ichigo-kurosaki-retorno-bleach.jpg?fit=1280%2C720&ssl=1'
        />
        <Typography className='text-black font-bold text-xl tracking-normal' variant='overline'>
          Page
        </Typography>
      </Box>
      <Box className='flex flex-row space-x-2 items-center'>
        <FiSearch color='black' className='text-2xl' />
        <IoIosAddCircleOutline color='black' className='text-2xl' />
      </Box>
    </AppBar>
  )
}
