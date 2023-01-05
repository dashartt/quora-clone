import { Avatar, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { BlackTooltip } from '../../tooltips'
import { GrFormClose } from 'react-icons/gr'
import { HiOutlineDotsHorizontal as DotHorizontal } from 'react-icons/hi'

export default function PostHeader() {
  return (
    <Box className='flex justify-between'>
      <Box className='flex items-center space-x-2'>
        <Avatar
          alt='user photo'
          className='hover:cursor-pointer'
          src='https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2022/10/ichigo-kurosaki-retorno-bleach.jpg?fit=1280%2C720&ssl=1'
        />
        <Box className='flex flex-col -space-y-1'>
          <Box className='flex space-x-1'>
            <Typography variant='body1' className='font-bold hover:underline'>
              Username
            </Typography>
            <Typography variant='body1'>·</Typography>
            <Typography variant='body1' className='text-[#1567e1]'>
              Seguir
            </Typography>
          </Box>
          <Box className='flex space-x-1'>
            <Typography variant='body1'>Resume bio user</Typography>
            <Typography variant='body1'>·</Typography>
            <Typography variant='body1'>Datetime post</Typography>
          </Box>
        </Box>
      </Box>
      <Box className='space-x-3'>
        <BlackTooltip title='More' arrow placement='top' className=''>
          <IconButton>
            <DotHorizontal className='text-2xl hover:rounded-full hover:bg-gray-200 cursor-pointer  ' />
          </IconButton>
        </BlackTooltip>
        <BlackTooltip title="I'm not interested in that" arrow placement='top'>
          <IconButton>
            <GrFormClose className='text-2xl hover:rounded-full hover:bg-gray-200 cursor-pointer ' />
          </IconButton>
        </BlackTooltip>
      </Box>
    </Box>
  )
}
