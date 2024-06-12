import { fork } from 'redux-saga/effects';
import { handleSignUp } from './signup-saga';
import { handleLogin } from './login-saga';
import { handleSendPaymentData, handleGetPaymentData } from './payment-data-saga';
import { handleGetAddressList } from './address-list-saga';
import { handleGetRoute } from './route-saga';

export function* rootHandle() {
   yield fork(handleSignUp);
   yield fork(handleLogin);
   yield fork(handleSendPaymentData);
   yield fork(handleGetPaymentData);
   yield fork(handleGetAddressList);
   yield fork(handleGetRoute);
};