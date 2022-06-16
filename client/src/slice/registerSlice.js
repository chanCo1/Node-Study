import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 비동기 처리 함수 구현
export const register = createAsyncThunk('first/register', async (payload, {rejectWithValue}) => {
  let result = null;

  try {
    result = await axios.post('/api/users/register', payload);

    if(result.data.faultInfo !== undefined) {
      const err = new Error();
      err.reponse = { status: 500, statusText: result.data.faultInfo.message };
      throw err;
    };

  } catch(err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: {
    [register.pending]: (state, {payload}) => {  // pending -> 로딩
      return {...state, loading: true}
    },

    [register.fulfilled]: (state, {payload}) => {  // fulfilled -> ajax완료
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },

    [register.rejected]: (state, {payload}) => {  // rejected -> error
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.staus ? payload.staus : 500,
          message: payload?.stausText ? payload.stausText : 'Server Error'
        }
      }
    }
  }
});

export default registerSlice.reducer;