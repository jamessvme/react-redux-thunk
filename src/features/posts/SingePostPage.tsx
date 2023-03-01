import { useAppSelector } from "../../app/hooks";
import { MATCH } from "../../types"


export const SinglePostPage = ({ match }: { match: MATCH }) => {

  const postId = match.params;

  const post = useAppSelector( state => 
    state.posts.find(item => item.id === postId)    
  );

  if (!post) {
    return (
      <section>
        <h1>Post not found!</h1>
      </section>
    )
  } else {
    return (
      <article 
        className="border mt-5 p-5" 
        key={post.id}
      >
        <h1 className="font-bold">{post.title}</h1>
        <p className="mt-2">{post.content.substring(0,100)}</p>
      </article>
    )
  }


  return (
    <div>

    </div>
  )
}