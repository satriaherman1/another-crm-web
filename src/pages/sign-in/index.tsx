import { LogoFull, MessageQuestionIcon, SignInBanner } from "@src/config/pathImage";
import Input from "@src/components/Input";
import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";

import "./styles.scss";

export default function SignIn() {
  return (
    <div className=" bg-crm-dark ">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="sign-in-banner hidden md:block p-7 flex flex-col">
          <div className="banner-content p-5 h-full">
            <img src={LogoFull} width="200px" alt="" />

            <h2 className="text-[28px] mt-[20%]">We are here</h2>
            <h1 className="capitalize text-[48px] leading-[120%] font-semibold mt-5">to Increase your Productivity</h1>
            <p className="mt-10 font-light leading-[125%]">lLorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices adipiscing accumsan.</p>

            <div className="mt-[50%] block">
              <p>
                {" "}
                By clicking the button above, you agree to our <br />{" "}
                <a href="" className="underline bold">
                  Terms of Service and Privacy Policy .
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[100vh] py-9 px-6 md:ml-16 md:w-[40%] justify-self-center">
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
        </div>
      </div>
    </div>
  );
}
