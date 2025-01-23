import { Button, Card, CardContent, CardDescription, CardTitle }  from 'keep-react'
import Link from 'next/link'

export const PostCard = ({title , description,id}) => {
  return (
    <Card className=" w-64 h-68 flex  flex-col ">
      <CardContent className='space-y-2 flex-1'>
        <CardTitle className='text-xl'>{title}</CardTitle>
        <CardDescription>
          {description.substring(0,50)}...
        </CardDescription>
      </CardContent>
      <Link href={`/blog/${id}`}>
    <Button className='m-2 bg-[#f98f32] '>Details</Button>
    </Link>
    </Card>
  )
}
