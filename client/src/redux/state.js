// import { createSlice} from "@reduxjs/toolkit"

// //data accessible throughout all application ,dont need to pass to different components 
// // in begining these two will be null
// const initialState = {
//   user: null,
//   token: null
// }


// // reducers--> modify the state to specific action

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setLogin: (state, action) => {
//       state.user = action.payload.user
//       state.token = action.payload.token
//     },
//     setLogout: (state) => {
//       state.user = null
//       state.token =null
//     },
//     setListings: (state,action)=>{
//       state.listings=action.payload.listings
//     },
//     setTripList: (state,action)=>{
//       state.user.setTripList=action.payload
//     }
//   }
// })

// export const { setLogin , setLogout, setListings, setTripList} = userSlice.actions
// export default userSlice.reducer


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import { createSlice} from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null
}

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
      state.token = null
    },
    setListings: (state, action) => {
      state.listings = action.payload.listings
    },
    setTripList: (state, action) => {
      state.user.tripList = action.payload
    },
    setWishList: (state, action) => {
      state.user.wishList = action.payload
    },
    setPropertyList: (state, action) => {
      state.user.propertyList = action.payload
    },
    setReservationList: (state, action) => {
      state.user.reservationList = action.payload
    },
    
  }
})

export const { setLogin, setLogout, setListings, setTripList, setWishList, setPropertyList, setReservationList } = userSlice.actions
export default userSlice.reducer