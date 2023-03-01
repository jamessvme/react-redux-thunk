import { useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  const handleSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )
      setTitle('');
      setContent('');
    }
  }
  return (
    <section className="border mt-5 p-5">
      <h2 className="text-center">Add a New Post</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between mt-5">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            className="border w-2/3"
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-5">
          <label htmlFor="postContent">Content:</label>
          <textarea
            className="border w-2/3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          onClick={handleSavePost}
          className="w-1/2 block border mt-5 py-2 mx-auto"
        >
          Save Post
        </button>
      </form>
    </section>
  )
}