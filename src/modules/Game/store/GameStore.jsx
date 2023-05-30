import { createSlice } from '@reduxjs/toolkit'

export const gameStore = createSlice({
  name: 'gameStore',
  initialState: {
    idGame: 0,
    globalEvent: null,
    localEvent: null,
    localSolution: null
  },
  reducers: {
    setIdGame: (state, action) => {
        state.idGame = action.payload
    },

    setGlobalEvent: (state, action) => {
        state.globalEvent = action.payload
    },

    setLocalEvent: (state, action) => {
        state.localEvent = action.payload
    },

    setLocalSolution: (state, action) => {
        state.localSolution = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIdGame, setGlobalEvent, setLocalEvent, setLocalSolution } = gameStore.actions;

export default gameStore.reducer