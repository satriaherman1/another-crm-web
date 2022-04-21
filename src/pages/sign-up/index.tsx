import { MessageQuestionIcon } from "@src/config/pathImage";
import Input from "@src/components/Input";
import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import AuthLayout from "@src/layout/auth-layout";

export default function SignUp() {
  return (
    <AuthLayout>
      <h2 className="text-[36px] mt-9 md:mt-0 font-semibold text-white leading-[120%]">Welcome to Another Crm</h2>
      <p className="text-crm-gray-600 mt-2">sign in your account</p>

      <section className="mt-12 flex flex-col">
        <label htmlFor="" className="text-white">
          Email Address
        </label>
        <Input type="text" placeholder="Enter your email address" />
      </section>
      <section className="mt-6 flex flex-col">
        <label htmlFor="" className="text-white">
          Password
        </label>
        <Input type="password" placeholder="Minimum 8 characters" />
      </section>

      <Checkbox label="Forgot Password" className="text-crm-gray-600 text-[14px] mt-6" />

      <Button variant="primary" className="w-full mt-6">
        Sign In
      </Button>

      <p className="mt-[5vh] text-white">
        don't have an account? <br />
        <a href="" className="text-crm-primary">
          {" "}
          Sign Up
        </a>
      </p>

      <span className="ml-auto mt-20 block w-[fit-content] flex gap-2 items-center">
        <img src={MessageQuestionIcon} alt="" width="30px" />
        <p className="text-white">Support</p>
      </span>
    </AuthLayout>
  );
}