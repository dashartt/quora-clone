'use client'
import { Grid } from '@mui/material'
import PostCard from '../components/post'

export default function Home() {
  return (
    <Grid container height='100vh' alignItems='center' justifyContent='center' direction='column'>
      <PostCard />
    </Grid>
  )
}
