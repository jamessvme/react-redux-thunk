import { TODO } from './../../types/index';

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useId } from 'react';

const initialState: TODO[] = [
  {id: '1', title: 'How are you', content: 'I am fine'},
  {id: '2', title: 'How are you', content: 'I am fine'},
  {id: '3', title: 'How are you', content: 'I am fine'}
] 

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, actions) => {
      const { title, content} = actions.payload;
      const todo = state.find(item => item.title === title && item.content === content );
      if (!todo) {
        const id = nanoid();
        state.push({ id, title, content})
      }
    }
  }
});

export const { addNewTodo } = todoSlice.actions;

export default todoSlice.reducer;