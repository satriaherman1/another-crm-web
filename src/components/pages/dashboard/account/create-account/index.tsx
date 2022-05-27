import Dropdown from "@src/components/common/Dropdown";
import MiniInput from "@src/components/common/MiniInput";
import Button from "@src/components/common/Button";

interface ICreateAccount {
  setShowModal: (state?: any) => void;
}

export default function CreateAccount(props: ICreateAccount) {
  const { setShowModal } = props;
  const cityList = [
    {
      label: "Jepara",
      value: "jepara",
    },
  ];
  const stateList = [
    {
      label: "Central Java",
      value: "central java",
    },
  ];
  const ownerList = [
    {
      label: "Jordan Olivas",
      value: "Jordan Olivas",
    },
  ];
  const prospectStageList = [
    {
      label: "No Stage",
      value: "no stage",
    },
  ];

  const phoneFormatList = [
    {
      label: "+62",
      value: "+62",
    },
  ];
  return (
    <div className="flex flex-col gap-y-6 my-5 ">
      <div className="flex flex-col md:flew-row gap-5 ">
        <section>
          <label htmlFor="company">Company Name</label>
          <MiniInput variant="crm-transparent" id="company" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
        <section>
          <label htmlFor="email">Email</label>
          <MiniInput variant="crm-transparent" id="email" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-5 ">
        <section className="w-full">
          <label htmlFor="website">Website Url</label>
          <MiniInput variant="crm-transparent" id="website" type="text" className="block py-2 mt-2 min-w-[250px] w-full" isNoMaxWidth />
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-5 ">
        <section>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Dropdown optList={phoneFormatList} variant="outlined" id="phoneNumber" className="block py-2 min-w-[250px] w-full" />
        </section>
        <section>
          <label htmlFor="state">State</label>
          <Dropdown optList={stateList} variant="outlined" id="state" className="block py-2 min-w-[250px] w-full" />
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-5 ">
        <section>
          <label htmlFor="city">City</label>
          <Dropdown optList={cityList} variant="outlined" id="city" className="block py-2 min-w-[250px] w-full" />
        </section>
        <section>
          <label htmlFor="zip">Zip Code</label>
          <MiniInput variant="crm-transparent" id="zip" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
      </div>

      <button className="text-crm-mutted-blue self-start">Show All Fields</button>

      <section className="flex justify-between items-center text-[14px]">
        <p>
          <a href="" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="underline">
            Privacy Policy
          </a>{" "}
          .
        </p>

        <Button variant="primary" onClick={() => setShowModal(false)}>
          Create
        </Button>
      </section>
    </div>
  );
}
