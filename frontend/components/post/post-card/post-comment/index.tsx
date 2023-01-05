import { Avatar, Box, Button, ButtonBase, InputBase, TextField } from '@mui/material'

export default function PostComment() {
  return (
    <Box className='bg-[#f3f2f2] px-3 py-2 flex items-center space-x-2'>
      <Avatar
        alt='user photo'
        className='hover:cursor-pointer'
        src='https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2022/10/ichigo-kurosaki-retorno-bleach.jpg?fit=1280%2C720&ssl=1'
      />
      <InputBase className='rounded-full h-full px-4 bg-[#ffffff]' placeholder='Add comment...' />

      <ButtonBase className='bg-blue-500 text-white rounded-full px-3 py-2'>Add comment</ButtonBase>
    </Box>
  )
}
