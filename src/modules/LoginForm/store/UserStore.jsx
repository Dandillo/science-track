import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
  name: 'userStore',
  initialState: {
    role: null,
    id: null,
    name: null,
    offName: null,
    socialStatus: 0,
    financeStatus: 0,
    administrativeStatus: 0
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

    setId: (state, action) => {
      state.id = action.payload
    },

    setSocialStatus: (state, action) => {
      state.socialStatus = action.payload
    },

    setFinanceStatus: (state, action) => {
      state.financeStatus = action.payload
    },

    setAdministrativeStatus: (state, action) => {
      state.administrativeStatus = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setRole, setOffName, setId, setSocialStatus, setFinanceStatus, setAdministrativeStatus } = userStore.actions;

export default userStore.reducer