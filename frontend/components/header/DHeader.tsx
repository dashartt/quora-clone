'use client'
import AppBar from '@mui/material/AppBar'
import { VscHome } from 'react-icons/vsc'
import { BiBell, BiEdit } from 'react-icons/bi'
import { FaRegListAlt } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import Zoom from '@mui/material/Zoom'
import styled from '@emotion/styled'

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
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

export default function DHeader() {
  return (
    <AppBar position='sticky' className='py-1 bg-white flex flex-row justify-center shadow-md'>
      <Box className='flex items-center mr-8 cursor-pointer hover:opacity-70'>
        <Image src='/quora_logo.png' width={100} height={25} alt='Quora logo' />
      </Box>
      <Box className='flex  mr-8'>
        <Box className='w-16 h-full hover:bg-gray-200 flex items-center justify-center rounded-sm cursor-pointer'>
          <LightTooltip title='Home'>
            <IconButton>
              <VscHome className='text-3xl text-red-700' />
            </IconButton>
          </LightTooltip>
        </Box>

        <Box className='w-16 h-full hover:bg-gray-200 flex items-center justify-center rounded-sm cursor-pointer'>
          <LightTooltip TransitionComponent={Zoom} title='Answer'>
            <IconButton>
              <FaRegListAlt className='text-3xl text-red-700' />
            </IconButton>
          </LightTooltip>
        </Box>
        <Box className='w-16 h-full hover:bg-gray-200 flex items-center justify-center rounded-sm cursor-pointer'>
          <LightTooltip TransitionComponent={Zoom} title='Following'>
            <IconButton>
              <BiEdit className='text-3xl text-red-700' />
            </IconButton>
          </LightTooltip>
        </Box>
        <Box className='w-16 h-full hover:bg-gray-200 flex items-center justify-center rounded-sm cursor-pointer'>
          <LightTooltip TransitionComponent={Zoom} title='Notifications'>
            <IconButton>
              <BiBell className='text-3xl text-red-700' />
            </IconButton>
          </LightTooltip>
        </Box>
      </Box>
      <TextField
        className='max-h-4'
        placeholder='Pesquisar no Quora'
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <CiSearch />
            </InputAdornment>
          ),
        }}
        variant='outlined'
      />
      <Box className='flex flex-row items-center ml-8 hover:bg-gray-200 cursor-pointer w-12 h-full rounded-sm justify-center'>
        <Avatar
          className='border border-black '
          src='https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2022/10/ichigo-kurosaki-retorno-bleach.jpg?fit=1280%2C720&ssl=1'
        />
      </Box>
    </AppBar>
  )
}
