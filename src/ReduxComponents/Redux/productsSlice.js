import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'items',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {    
        filterCategory: (state, action) => {
          state.selectedCategory = action.payload;
        },
      },
    })
  
export const getSelectedCategory = state => state.items.selectedCategory
export const { filterCategory } = itemSlice.actions
export default itemSlice.reducer