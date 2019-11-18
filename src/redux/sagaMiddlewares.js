import createSagaMiddleWare from 'redux-saga';

export const sagaSendSignupDataMiddleware = createSagaMiddleWare();
export const sagaSendLoginDataMiddleware = createSagaMiddleWare();
export const sagaSendPaymentDataMiddleware = createSagaMiddleWare();
export const sagaGetPaymentDataMiddleware = createSagaMiddleWare();
export const sagaGetAddressListMiddleware = createSagaMiddleWare();