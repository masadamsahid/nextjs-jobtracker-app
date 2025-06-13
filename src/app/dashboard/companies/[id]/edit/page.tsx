
import React from "react";
import ComnpanyForm from "../../_components/CompanyForm";
import COMPANIES from "@/dummy-data/companies"

type Props = {
    mode: "add" | "edit";
  params : Promise<{
    id:string;
  }>
};

const CompanyEditPage = async({mode:add ,params }: Props) => {
    const {id:strId} = await params;
  const id = Number(strId);

  const selectedCompany = COMPANIES.find(company => company.id === id)
  const mode: "add" |"edit" = "edit";
  return (
<div className="grid grid-cols-1">
  <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/building-bro-1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's improve
            <span className="text-green-500"> about</span> this
            <span className="text-green-500"> company</span>
          </h1>
        </div>
      </div>
      <h1>{selectedCompany?.name}</h1>
      <ComnpanyForm  />


</div>
      




  );
};

export default CompanyEditPage;
