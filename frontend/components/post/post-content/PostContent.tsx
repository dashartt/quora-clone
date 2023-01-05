import { ButtonBase, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { useState } from 'react'

export default function PostContent() {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => setShowMore(true)

  return (
    <Box
      onClick={toggleShowMore}
      className={`flex flex-col space-y-2 ${!showMore && 'cursor-pointer'}`}
    >
      <Link href='#' className='no-underline text-inherit hover:underline'>
        <Typography variant='body1' className='font-bold'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Typography>
      </Link>
      <Box className='relative'>
        <Typography className={`${!showMore && 'line-clamp-2'}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sint modi, ratione esse
          facere, dolor nobis, nesciunt dicta ex neque nisi libero? Esse sequi nobis deserunt quam!
          Voluptas, quam laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          laudantium asperiores eaque voluptatibus tempore libero qui at quas voluptatem officiis?
          Cumque alias dolorum, placeat provident amet odio corrupti assumenda doloremque. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sint modi, ratione esse
          facere, dolor nobis, nesciunt dicta ex neque nisi libero? Esse sequi nobis deserunt quam!
          Voluptas, quam laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          laudantium asperiores eaque voluptatibus tempore libero qui at quas voluptatem officiis?
          Cumque alias dolorum, placeat provident amet odio corrupti assumenda doloremque.
        </Typography>
        <ButtonBase
          className={`absolute right-0 bottom-2 bg-transparent hover:underline text-[#1653ec] text-md ${
            showMore && 'hidden'
          }`}
        >
          (mais)
        </ButtonBase>
      </Box>
    </Box>
  )
}
