import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { game } from "../hooks/game";

// Define a type for the slice state
interface CounterState {
  value: number;
  playing: boolean;
  score: number;
  element: "rock" | "paper" | "scissors";
  randomElement: "rock" | "paper" | "scissors";
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  playing: false,
  score: 0,
  element: "rock",
  randomElement: "rock",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    elementChosen: (
      state,
      action: PayloadAction<"rock" | "paper" | "scissors">
    ) => {
      const allChoices: ["rock", "paper", "scissors"] = [
        "rock",
        "paper",
        "scissors",
      ];
      const randomPcElement =
        allChoices[Math.floor(Math.random() * allChoices.length)];
      state.randomElement = randomPcElement;
      state.element = action.payload;
      state.playing = true;
      const result = game(action.payload, randomPcElement);
      if (result == "WIN") {
        state.score += 1;
      }

    },
    
  },
});

export const { elementChosen } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer;