import * as actions from "../actions/action.js";
let somearray, newarray, counter = 0;
export const queTypeUpdater = (
  state = {}, action) => {
  //   console.log('action.type', action.type)
  //   console.log(queDetails.push(action.type));
  //   return state;
  // };
  // somearray = state.queDetails;
  // console.log('state.queDetails[action.formID', somearray)




  switch (action.type) {
    case actions.ADD_TXT:

      console.log('state.queDetails', state, action)


      return { ...state, [action.formID]: { ...state[action.formID], [action.questionNo]: action.type } };
    case actions.ADD_CHECKBOX:

      console.log('state.queDetails', state, action)


      return { ...state, [action.formID]: { ...state[action.formID], [action.questionNo]: action.type } };

    case actions.ADD_RADIO:

      console.log('state.queDetails', state, action)


      return { ...state, [action.formID]: { ...state[action.formID], [action.questionNo]: action.type } };

    case "removeQue":
      console.log('state,action', state, action)

      let updatedQue = state[action.formID];
      delete updatedQue[action.questionNo]
      return { ...state, [action.formID]: { ...updatedQue } };


    default:
      return state;
  }

}
// };
// {
//   queNo:,
//     queType:,
//   data: {

//   }
// }


// state = {
//   formID: { queDetails: {} }