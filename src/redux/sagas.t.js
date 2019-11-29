import { takeEvery } from 'redux-saga/effects';
import { handleSignUp } from './sagas';
import { SEND_DATA_SIGNUP_REQUEST } from './actions';

describe('handleSignUp', () => { // не проходит
   const action = {
      type: SEND_DATA_SIGNUP_REQUEST,
      payload: {
         userEmail: 'test@email.com',
         userName: 'Name',
         userSurname: 'Surname',
         password: '******'
      }
   }
   const gen = handleSignUp(action);

   it('takes SEND_DATA_SIGNUP_REQUEST action', () => {
      expect(gen.next().value).toEqual(takeEvery(SEND_DATA_SIGNUP_REQUEST, action.payload));
   });
})