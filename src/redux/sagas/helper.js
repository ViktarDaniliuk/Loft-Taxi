export const sendData = (user, path) => {
   return fetch(`https://loft-taxi.glitch.me/${path}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
   })
      .then(response => response.json())
};

export const getData = (path, args = {}) => {
   let searchLine = '';

   for ( let key in args ) {
      searchLine += key + '=' + args[key] + '&';
   }

   return fetch(`https://loft-taxi.glitch.me/${path}?${searchLine}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      }
   })
      .then(response => response.json())
};

export const getStateToken = state => state.userData.token;