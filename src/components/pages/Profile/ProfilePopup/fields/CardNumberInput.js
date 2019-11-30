import React, { PureComponent } from 'react';
import MaskedInput from 'react-text-mask';

class CardNumberInput extends PureComponent {
   render() {
      return (
         <MaskedInput
            { ...this.props.input }
            placeholder="0000 0000 0000 0000"
            guide={ false }
            mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
         />
      );
   }
};

export default CardNumberInput;