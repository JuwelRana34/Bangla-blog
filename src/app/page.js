import { PostCard } from "@/components/PostCard";

export default async function Home() {
  const data = await fetch(" https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div className="container  mx-auto px-2">
      <h1 className="text-2xl md:text-4xl text-[#f2780c] font-bold text-center my-5 ">All Blogs</h1>
      <div className=" rounded justify-items-center bg-slate-100 my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.body}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}
