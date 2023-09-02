import { configureStore } from '@reduxjs/toolkit'
import tabsReducer from '~store/tabs/tabs'

export default configureStore({
  reducer: {
    tabs: tabsReducer
  }
})
