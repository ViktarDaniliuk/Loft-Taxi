import React, { PureComponent } from 'react';
import MaskedInput from 'react-text-mask';

class ValidityInput extends PureComponent {
   render() {
      return (
         <MaskedInput 
            { ...this.props.input }
            placeholder="00/00" 
            guide={ false }
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
         />
      );
   }
};

export default ValidityInput;