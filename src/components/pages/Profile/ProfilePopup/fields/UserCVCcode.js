import React, { PureComponent } from 'react';
import MaskedInput from 'react-text-mask';

class UserCVCcodeInput extends PureComponent {
   render() {
      return (
         <MaskedInput 
            { ...this.props.input }
            placeholder="***" 
            guide={ false }
            mask={[/\d/, /\d/, /\d/]}
         />
      );
   }
};

export default UserCVCcodeInput;