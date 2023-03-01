import { useAppSelector } from "../../app/hooks";

export const PostLists = () => {

  const posts = useAppSelector(state => state.posts);

  const renderedPosts = posts.map(post => 
    <article 
      className="border mt-5 p-5" 
      key={post.id}
      >
        <h1 className="font-bold">{post.title}</h1>
        <p className="mt-2">{post.content.substring(0,100)}</p>
    </article>
    )
  
  return (
    <section>
      <h1 className="text-2xl font-bold mt-10 text-center uppercase">posts</h1>
      {renderedPosts}
    </section>
  )
}