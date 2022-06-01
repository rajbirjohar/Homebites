import { NextPage } from "next";
import { Page, Paragraph } from "../components";

const Input = (props: {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  maxLength?: number;
}) => {
  return (
    <div className="mb-4 flex-1">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
    </div>
  );
};

const Checkout: NextPage = () => {
  return (
    <Page>
      <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto py-24 px-6">
        <h1 className="text-6xl font-bold my-4">Checkout</h1>
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-2xl font-bold my-4">Personal Information</h3>
            <div className="flex gap-4">
              <Input
                label={"First Name"}
                placeholder={"John"}
                name={"firstname"}
                type={"text"}
              />
              <Input
                label={"Last Name"}
                placeholder={"Doe"}
                name={"lastname"}
                type={"text"}
              />
            </div>
            <Input
              label={"Address"}
              placeholder={"900 University Way"}
              name={"address"}
              type={"text"}
            />
            <Input
              label={"City"}
              placeholder={"Riverside"}
              name={"city"}
              type={"text"}
            />
            <div className="flex gap-4">
              <Input
                label={"State"}
                placeholder={"CA"}
                name={"state"}
                type={"text"}
              />
              <Input
                label={"Zipcode"}
                placeholder={"12345"}
                name={"zipcode"}
                type={"text"}
              />
            </div>
            <h3 className="text-2xl font-bold my-4">Purchase Information</h3>
            <Input
              label={"Credit Card"}
              placeholder={"0000-0000-0000-0000"}
              name={"creditcard"}
              type={"text"}
              maxLength={19}
            />
            <div className="flex gap-4">
              <Input
                label={"Expiration Date"}
                placeholder={"01/22"}
                name={"expiration"}
                type={"text"}
                maxLength={5}
              />
              <Input
                label={"CVV"}
                placeholder={"123"}
                name={"cvv"}
                type={"text"}
                maxLength={3}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="rounded-full bg-red-500 text-white py-2 px-4 my-3"
                type="button"
              >
                Confirm Purchase
              </button>
            </div>
          </form>
        </div>
      </Paragraph>
    </Page>
  );
};

export default Checkout;
