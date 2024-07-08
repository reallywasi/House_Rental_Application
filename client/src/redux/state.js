import { createSlice} from "@reduxjs/toolkit"

//data accessible throughout all application ,dont need to pass to different components 
// in begining these two will be null
const initialState = {
  user: null,
  token: null
}


// reducers--> modify the state to specific action

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token =null
    },
    setListings: (state,action)=>{
      state.listings=action.payload.listings
    }
  }
})

export const { setLogin , setLogout, setListings} = userSlice.actions
export default userSlice.reducer