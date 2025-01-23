import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'

async function blog({params}) {
  const  {id } = params;
  const data = await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await data.json();

  return (
    <>
    <h1 className="text-2xl text-[#f2780c] font-bold text-center my-5 ">Blog Post #{id}</h1>
    <Card className=" max-w-1/2 h-96 m-2 p-2 text-center">
      <div className='md:w-1/2 mx-auto'>

      <CardHeader>
        <CardTitle className='mt-5'>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{post.body}</CardDescription>
      </CardContent>
      </div>
     
    </Card>
    </>
  )
}

export default blog