import { createSlice } from '@reduxjs/toolkit'

export const tabsManger = createSlice({
  name: 'tabsManger',
  initialState: {
    tabs: []
  },
  reducers: {
    addTab: (state, action) => {
      state.tabs.push(action.payload)
    },
    init:(state, action) => {
      state.tabs = action.payload
    }
  }
})

export const { addTab } = tabsManger.actions

export default tabsManger.reducer
