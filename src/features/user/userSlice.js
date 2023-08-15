import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAddress from "../../services/apiGeocoding";

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    const addressObj = await getAddress(position.latitude, position.longitude);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  address: "",
  position: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem while fetching your address";
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
