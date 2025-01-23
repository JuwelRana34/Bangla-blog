import {Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import Link from 'next/link';

async function Blog({params}) {
  const  {id } = await params;
  const data = await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await data.json();

  return (
    <>
    <h1 className="text-2xl text-[#f2780c] font-bold text-center my-5 ">Details Blog post ( {id} )</h1>
    <Card className=" flex flex-col max-w-1/2 h-96 m-2 p-2 text-center">
      <div className='md:w-1/2 mx-auto flex-grow'>

      <CardHeader>
        <CardTitle className='mt-5 capitalize'>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{post.body}</CardDescription>
      </CardContent>
      </div>
      <Link className='my-5' href={"/"} >
      <Button className="bg-[#f2780c] text-white "> Go Back </Button>
     
      </Link>
    </Card>
    </>
  )
}

export default Blog