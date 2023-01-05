import { Avatar, Box, Button, Divider, Paper, Typography } from '@mui/material'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { VscEdit } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'

export default function QuickInteraction() {
  return (
    <Paper className='flex flex-col p-1 space-y-1 rounded-none' elevation={1}>
      <Box className='flex space-x-3 pt-2 px-2 '>
        <Avatar src='https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2022/10/ichigo-kurosaki-retorno-bleach.jpg?fit=1280%2C720&ssl=1' />
        <Button className='px-4 flex flex-col bg-[#f5f6f6] hover:bg-[#eceeee] rounded-full w-full cursor-pointer'>
          <Typography variant='body1' className='self-start text-gray-500 normal-case'>
            What do you want to ask or share?
          </Typography>
        </Button>
      </Box>
      <Box className='flex space-x-1'>
        <Box className='hover:rounded-full hover:bg-gray-100 flex items-center justify-center basis-4/12 space-x-2 cursor-pointer'>
          <RiQuestionnaireLine className='text-xl' />
          <Typography variant='overline' className='font-bold'>
            Ask
          </Typography>
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box className='hover:rounded-full hover:bg-gray-100 flex items-center justify-center basis-4/12 space-x-2 cursor-pointer'>
          <FiEdit className='text-xl' />
          <Typography variant='overline' className='font-bold'>
            Answer
          </Typography>
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box className='hover:rounded-full hover:bg-gray-100 flex items-center justify-center basis-4/12 space-x-2 cursor-pointer'>
          <VscEdit className='text-xl' />
          <Typography variant='overline' className='font-bold'>
            Post
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}
