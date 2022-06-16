import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 비동기 처리 함수 구현
export const example = createAsyncThunk('path/example', async (payload, {rejectWuthValue}) => {
  let result = null;

  try {
    result = await axios.get();
  } catch(err) {
    result = rejectWuthValue(err.response);
  }

  if(result.data.faultInfo !== undefined) {
    const err = new Error();
    err.reponse = { status: 500, statusText: result.data.faultInfo.message };
    throw err;
  };

  return result;
});

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: {
    [example.pending]: (state, {payload}) => {  // pending -> 로딩
      return {...state, loading: true}
    },

    [example.fulfilled]: (state, {payload}) => {  // fulfilled -> ajax완료
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },

    [example.rejected]: (state, {payload}) => {  // rejected -> error
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

export default exampleSlice.reducer;