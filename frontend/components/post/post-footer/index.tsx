import { Box, Divider } from '@mui/material'
import { RxThickArrowDown, RxThickArrowUp } from 'react-icons/rx'
import { FaRegComment } from 'react-icons/fa'
import { GrUpdate } from 'react-icons/gr'

export default function PostFooter() {
  return (
    <Box className='flex px-4 py-2 items-center space-x-4'>
      <Box className='flex items-center bg-[#f2f2f2] rounded-full space-x-2 px-2 py-1'>
        <RxThickArrowUp className='text-2xl hover:cursor-pointer hover:bg-[#fffff] hover:rounded-full rounded-full' />
        <Divider orientation='vertical' variant='middle' flexItem />
        <RxThickArrowDown className='text-2xl hover:cursor-pointer hover:bg-[#fffff] hover:rounded-full' />
      </Box>

      <FaRegComment className='text-2xl hover:cursor-pointer hover:bg-[#fffff] hover:rounded-full text-[1.3rem]' />
      <GrUpdate className='text-2xl hover:cursor-pointer hover:bg-[#e8e8e8] hover:rounded-full text-[1.2rem]' />
    </Box>
  )
}
