import moment from "moment";
import DashboardLayout from "@src/layout/dashboard-layout";
import { AddIcon, ArrowDownOutlinedIcon, FilterIcon, UserProfileIcon } from "@src/components/common/Icon";
import MiniInput from "@src/components/common/MiniInput";
import CrmDatatable from "@src/components/common/Datatable";
import { SearchIcon } from "@src/config/pathImage";
import "./styles.scss";
import { useState } from "react";
import Button from "@src/components/common/Button";
import ContactInfoBox from "@src/components/pages/dashboard/account/contact-info-box";
import AccountInfoBox from "@src/components/pages/dashboard/account/account-info-box";
import useLocalData from "@src/utility/hooks/useLocalData";
import Modal from "@src/components/common/Modal";
import Input from "@src/components/common/Input";
import Dropdown from "@src/components/common/Dropdown";

export default function Account() {
  const [activeTab, setActiveTab] = useState<string>("account");
  const [showModal, setShowModal] = useState<boolean>(false);
  const newTaskData = [
    {
      date: "06/01/22 04:11:05",
      task: "<div> A new task <b>(Dimas Ariyanto)</b> has been created for you.</div>",
    },
    {
      date: "06/01/22 04:11:05",
      task: "<div> A new task <b>(Dimas Ariyanto)</b> has been created for you.</div>",
    },
    {
      date: "06/01/22 04:11:05",
      task: "<div> A new task <b>(Dimas Ariyanto)</b> has been created for you.</div>",
    },
    {
      date: "06/01/22 04:11:05",
      task: "<div> A new task <b>(Dimas Ariyanto)</b> has been created for you.</div>",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Jordan Olivas",
      title: "CEO",
      email: "jordans@gmail.com",
      phone: "+91 2923 1929",
      stage: "Discover Debit",
    },
    {
      id: 2,
      name: "Azizah Mubashar",
      email: "jordans@gmail.com",
      title: "CTO",
      phone: "+91 2923 1929",
      stage: "Discover Debit",
    },
    {
      id: 3,
      name: "Jordan Olivas",
      title: "CEO",
      email: "jordans@gmail.com",
      phone: "+91 2923 1929",
      stage: "Discover Debit",
    },
  ];
  const columns = [
    {
      id: 1,
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Title",
      selector: (row: any) => row.title,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Phone ",
      selector: (row: any) => row.phone,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Stage ",
      selector: (row: any) => row.stage,
      sortable: true,
      reorder: true,
    },
  ];

  const timeZone = [
    {
      label: "GMT",
      value: "GMT",
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

  const accountList = [
    {
      label: "admin",
      value: "admin",
    },
  ];

  const AddAccountForm = () => (
    <div className="flex flex-col gap-y-6 my-5 max-h-[90vh]">
      <div className="flex gap-x-5 ">
        <section>
          <label htmlFor="firstName">First Name</label>
          <MiniInput variant="crm-transparent" id="firstName" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
        <section>
          <label htmlFor="lastName">Last Name</label>
          <MiniInput variant="crm-transparent" id="lastName" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
      </div>
      <div className="flex gap-x-5 ">
        <section>
          <label htmlFor="email">Email</label>
          <MiniInput variant="crm-transparent" id="email" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
        <section>
          <label htmlFor="company">Company</label>
          <MiniInput variant="crm-transparent" id="lastName" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
      </div>
      <div className="flex gap-x-5 ">
        <section>
          <label htmlFor="title">Title</label>
          <MiniInput variant="crm-transparent" id="title" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
        <section>
          <label htmlFor="timeZone">Time Zone(IANA)</label>
          <Dropdown variant="outlined" optList={timeZone} id="timeZone" placeholder="Choose" className="block py-2  min-w-[250px]" />
        </section>
      </div>
      <div className="flex gap-x-5 ">
        <section>
          <label htmlFor="owner">Owner</label>
          <MiniInput variant="crm-transparent" id="title" type="text" className="block py-2 mt-2 min-w-[250px]" />
        </section>
        <section>
          <label htmlFor="prospectStage">Prospect Stage</label>
          <Dropdown variant="outlined" optList={prospectStageList} id="prospectStage" placeholder="Choose" className="block py-2  min-w-[250px]" />
        </section>
      </div>
      <div className="flex gap-x-5 ">
        <section className="w-full">
          <label htmlFor="tags">Tags</label>
          <MiniInput placeholder="enter tags..." variant="crm-transparent" id="tags" type="text" className="block py-2 mt-2 min-w-[250px] w-full" isNoMaxWidth />
        </section>
      </div>
      <div className="flex gap-x-5 ">
        <section className="w-full">
          <label htmlFor="account">Account</label>
          <Dropdown isNoMaxWidth variant="outlined" optList={accountList} id="prospectStage" placeholder="account" className="block py-2  min-w-[250px] w-full" />
        </section>
      </div>

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
          Submit
        </Button>
      </section>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex lg:gap-x-2 lg:justify-between lg:gap-0 order-1 flex-wrap lg:flex-nowrap mt-6 ">
        <div className="flex flex-wrap lg:basis-[25%]">
          <div className="bg-crm-dark-300 px-8 py-5 text-white rounded-md w-full">Hello Everyone Im Siri !</div>
          <div className="bg-crm-dark-300 px-8 py-5 text-white rounded-md mt-4 w-full">
            New Task
            <br />
            {newTaskData.map((t) => (
              <div className="mt-2 border-b border-crm-gray-200 py-3">
                <span className="text-crm-gray inline-block mb-1 ">{moment(t.date).format("YYYY-MM-DD hh:mm:ss")}</span>
                <div dangerouslySetInnerHTML={{ __html: t.task }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col order-last lg:order-2 lg:basis-[50%] overflow-hidden">
          <div className="flex justify-between items-center mt-5 lg:mt-0">
            <MiniInput type="text" variant="crm-gray" placeholder="Search by name or email" icon={SearchIcon} className="max-w-[300px] mb-4" />
          </div>

          <div className="bg-crm-dark-300 rounded-md py-3">
            <div className="account-tab flex text-crm-gray-600 mb-2 px-7 ">
              <button onClick={() => setActiveTab("account")} className={`bg-none py-3 px-3 ${activeTab === "account" && "active"}`}>
                Account
              </button>
              <button onClick={() => setActiveTab("contact")} className={`bg-none py-3 px-3  ml-5 ${activeTab === "contact" && "active"}`}>
                Contact
              </button>
            </div>

            <CrmDatatable data={data} columns={columns} className="mx-1 border-0" pagination />
          </div>
        </div>

        <div className="min-w-[250px] w-full md:w-[fit-content] lg:order-last text-white lg:basis-[25%]">
          <div className="w-[fit-content] lg:ml-auto mt-5 md:mt-0">
            <Button onClick={() => setShowModal(true)} variant="primary" className="h-[fit-content]" paddingClassName="p-2">
              <AddIcon />
            </Button>
            <button className="ml-2 rounded-md border border-crm-gray-350 ml-3 bg-crm-gray-200 p-2">
              <FilterIcon />
            </button>
          </div>

          {activeTab === "account" ? (
            <AccountInfoBox
              facebookUrl="https://facebook.com"
              instagramUrl="https://instagram.com"
              tiktokUrl="https://tiktok.com"
              twitterUrl="https://twiiter.com"
              linkedinUrl="https://linkeding.com"
              zip={59452}
              city="Austin"
              username="Ailee Studio"
              email="ailee@gmail.com"
              phone="+91 72266181"
              website="aileestudio.com"
            />
          ) : (
            <ContactInfoBox zip={59452} city="Austin" username="Ailee Studio" email="ailee@gmail.com" phone="+91 72266181" website="aileestudio.com" />
          )}
        </div>
      </div>

      <Modal className="text-white" visible={showModal} onClose={() => setShowModal(false)} title="Account">
        <AddAccountForm />
      </Modal>
    </DashboardLayout>
  );
}
