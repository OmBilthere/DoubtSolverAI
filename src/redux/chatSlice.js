import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    question: "",
    answer: "",
  },

  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    clearChat: (state) => {
      state.question = "";
      state.answer = "";
    }
  },
});

export const { setQuestion, setAnswer, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
