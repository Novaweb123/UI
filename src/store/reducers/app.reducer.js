import {createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        defaultLanguage: null,
        languageText: null,
        userInfo: null,
        storeItemData:null,
    },
    reducers: {
        setLanguageText: (state, action) => {
            state.languageText = action.payload
        },
        setUserInfo: (state, action)=> {
            state.userInfo = action.payload
        },
        
        setItemData:(state,action)=>{
            state.storeItemData = action.payload
        }
        
    }
})

// Action creators are generated for each case reducer function
export const {setLanguageText, setUserInfo,setItemData} = appSlice.actions

export default appSlice.reducer
