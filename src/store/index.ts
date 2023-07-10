/*
 * @Date: 2023-07-10 14:38:31
 * @LastEditors: kenan
 * @LastEditTime: 2023-07-10 14:43:35
 */
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
  reducer:{
    
  }
})
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=ReturnType<typeof store.dispatch>;