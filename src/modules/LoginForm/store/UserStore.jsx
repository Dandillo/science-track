import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
  name: 'userStore',
  initialState: {
    role: null,
    name: null,
    offName: null
  },
  reducers: {
    setName: (state, action) => {
        state.name = action.payload
    },

    setOffName: (state, action) => {
      state.offName = action.payload
    },

    setRole: (state, action) => {
        state.role = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setRole, setOffName } = userStore.actions;

export default userStore.reducer