import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import App from "../../../App";
import { ProfilePopup } from "./ProfilePopup";
import renderer from "react-test-renderer";

it('render  without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<ProfilePopup />, div);
   ReactDOM.unmountComponentAtNode(div);
});

// it("ProfilePopup Snapshot", () => {
//   const tree = renderer.create(<ProfilePopup />).toJSON();
//   expect(tree).toMatchSnapshot(`
//     <div
//       className="profile_popup"
//     >
//       <h1>
//         Профиль
//       </h1>
//       <p>
//         Способ оплаты
//       </p>
//       <form
//         onSubmit={[Function]}
//       >
//         <div>
//           <div>
//             <label>
//               Номер карты:
//               <input
//                 onChange={[Function]}
//                 placeholder="1234 5678 1234 5678"
//                 type="text"
//                 value=""
//               />
//             </label>
//             <label>
//               Срок действия:
//               <input
//                 onChange={[Function]}
//                 placeholder="00/00"
//                 type="text"
//                 value=""
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Имя владельца:
//               <input
//                 onChange={[Function]}
//                 placeholder="USER NAME"
//                 type="text"
//                 value=""
//               />
//             </label>
//             <label>
//               CVC:
//               <input
//                 onChange={[Function]}
//                 placeholder="***"
//                 type="password"
//                 value=""
//               />
//             </label>
//           </div>
//         </div>
//         <input
//           onClick={[Function]}
//           type="submit"
//           value="Сохранить"
//         />
//       </form>
//     </div>
//   `);
// });

// it('change state - cardNumber', () => {
//    const profilePopup = shallow(<ProfilePopup />);
//    profilePopup.setState({
//       cardNumber: "1234567891234567"
//    });
//    expect(profilePopup.state('cardNumber')).toBe("1234567891234567");
// });

// it('change state - validity', () => {
//    const profilePopup = shallow(<ProfilePopup />);
//    profilePopup.setState({
//       validity: "02/22"
//    });
//    expect(profilePopup.state('validity')).toBe("02/22");
// });

// it('change state - userName', () => {
//    const profilePopup = shallow(<ProfilePopup />);
//    profilePopup.setState({
//       userName: "Viktar"
//    });
//    expect(profilePopup.state('userName')).toBe("Viktar");
// });

// it('change state - CVCcode', () => {
//    const profilePopup = shallow(<ProfilePopup />);
//    profilePopup.setState({
//       CVCcode: "123"
//    });
//    expect(profilePopup.state('CVCcode')).toBe("123");
// });

// it('-------------------------', () => {
//    const app = mount(<App />);
//    const profilePopup = mount(<ProfilePopup />);
//    console.log(app.state('currentTab'))
//    console.log(profilePopup.find('input[type="submit"]').prop('onClick'));
//    profilePopup.find('input[type="submit"]').simulate('click');
//    console.log(app.state('currentTab'))
//    expect(app.state('currentTab')).toBe('mapblock');
// });

// проверить функции (как?)
