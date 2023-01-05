import { Box, Card } from '@mui/material'
import PostHeader from './post-header'
import PostComment from './post-card/post-comment'
import PostContent from './post-content/PostContent'
import PostFooter from './post-footer'

export default function PostCard() {
  return (
    <Card className='shadow-xl w-full bg-white hover:bg-[#f7f5f5] flex flex-col justify-between space-y-2 rounded-sm'>
      <Box className='p-4'>
        <PostHeader />
        <PostContent />
      </Box>
      <PostFooter />
    </Card>
  )
}
