import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/Textarea";
import DashboardLayout from "@src/layout/dashboard-layout";

export default function Account() {
  const optList = [
    {
      label: "test",
      value: "test",
    },
  ];
  return (
    <DashboardLayout>
      <div className="bg-crm-dark-300 px-5 py-6 mt-5 text-white flex justify-between">
        <div>
          <div className="flex gap-x-5">
            <section>
              <label htmlFor="firstName">First Name</label>
              <Input type="text" id="firstName" placeholder="first name" className="block py-2" />
            </section>
            <section>
              <label htmlFor="lastName">Last Name</label>
              <Input type="text" id="lastName" placeholder="last name" className="block py-2" />
            </section>
          </div>
          <div className="flex gap-x-5 mt-5">
            <section>
              <label htmlFor="">First Name</label>
              <Input type="text" className="block py-2" />
            </section>
            <section>
              <label htmlFor="">Last Name</label>
              <Input type="text" className="block py-2" />
            </section>
          </div>
        </div>
        <div className="w-1/2">
          <section>
            <label htmlFor="">Personal Note</label>
            <TextArea className="block w-full" rows={6} placeholder="personal note"></TextArea>
          </section>
          <section className="mt-5">
            <label htmlFor="customField">Custom Field</label>
            <Input type="text" id="customField" placeholder="custom" className="block py-2 w-full" />
          </section>
          <section className="mt-5">
            <label htmlFor="customField">Account</label>
            <Dropdown className="w-full mt-3" variant="outlined" optList={optList} />
          </section>

          <section className="flex mt-5">
            <Button variant="primary">Save Changes</Button>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
