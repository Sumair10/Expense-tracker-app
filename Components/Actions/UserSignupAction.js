import * as types from "./ActionTypes";

const userSignupStart = () => ({
  type: types.USER_SIGNUP_START,
});

const userSignupSuccess = (student) => ({
  type: types.USER_SIGNUP_SUCCESS,
  payload: user,
});

const userSignupFail = (error) => ({
  type: types.USER_SIGNUP_FAIL,
  payload: error,
});

export const userSignupInitiate = (
  studentEmail,
  studentPassword,
  callBack,
  studentFirstName,
  studentLastName,
  role
) => {
  return function (dispatch) {
    //thunk concept
    dispatch(userSignupStart());
    auth
      .createUserWithEmailAndPassword(studentEmail, studentPassword)
      .then(({ student }) => {
        console.log(student);
        callBack();

        dispatch(studentSignupSuccess(student));
        // addStudent(studentEmail,studentFirstName,studentLastName,role)
      })
      // .then(()=>{
      // })
      .catch((error) => dispatch(studentSignupFail(error.message)));
  };
};
