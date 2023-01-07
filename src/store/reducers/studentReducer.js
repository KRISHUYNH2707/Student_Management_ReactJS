const DEFAULT_STATE = {
    userList: [
      {
        maSV: 1,
        hoTen: "Khanh Huynh",
        soDienThoai: "12345678",
        email: "khanh@gmail.com",
      },
    ],
    selectedUser: null,
  };


export const studentReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload } = action

    switch (type) {
      case 'ADD_USER':{
        const data = [...state.userList]
        data.push({
          ...payload,
          id: Date.now()
        })

        state.userList = data
        break;
      }

      case 'SET_SELECTED_USER': {
        state.selectedUser = payload;
        console.log(state.selectedUser)
        break
      }

      case 'UPDATE_USER': {
        // const data = [...state.userList]
        // const idx = data.findIndex((element) => element.id === payload.id)
        // data[idx] = payload
        // state.userList = data
        state.selectedUser = null;
        state.userList = state.userList.map(element => element.id === payload.id ? payload : element)
        break;
    }

    case 'DELETE_USER': {
      // const data = [...state.userList]
      // const idx = data.findIndex(ele => ele.id === payload.id)
      // data.splice(idx, 1)
      // state.userList = data

      state.userList = state.userList.filter(ele => ele.id === payload.id ? false : true);

      break;


  }

      default:
        break;
    }

    return {...state};
}
