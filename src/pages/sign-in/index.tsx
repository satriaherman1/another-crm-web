import { SignInBanner } from "@src/config/pathImage";
import Input from "@src/components/Input";

export default function SignIn() {
  return (
    <div className="p-5 bg-crm-dark text-white">
      <div className="flex gap-5 items-center">
        <img src={SignInBanner} alt="" height="100vh" />

        <div className="h-[fit-content]">
          <h2 className="text-[36px] font-semibold">Welcome to Another Crm</h2>
          <p className="text-crm-gray-600 mt-2">sign in your account</p>

          <section className="mt-12 flex flex-col">
            <label htmlFor="">Email Address</label>
            <Input type="text" placeholder="Enter your email address" />
          </section>
          <section className="mt-6 flex flex-col">
            <label htmlFor="">Password</label>
            <Input type="password" placeholder="Minimum 8 characters" />
          </section>
        </div>
      </div>
    </div>
  );
}
