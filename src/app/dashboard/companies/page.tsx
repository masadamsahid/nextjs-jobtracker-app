import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import COMPANIES from "@/dummy-data/companies";
import { Search } from "lucide-react";
import CompaniesList from "./_components/CompaniesList";
import CompanyDetails from "./_components/CompanyDetails";

type Props = {
  searchParams: Promise<{ id: string | string[] | undefined }>;
}

const CompaniesPage = async ({ searchParams }: Props) => {

  const { id: strId = '1' } = await searchParams;
  const id = Number(strId);

  const selectedCompany = COMPANIES.find((company) => company.id === id);

  return (
    <div className="flex max-h-full h-full">
      {/* List */}
      <div className="w-full md:w-[360px] h-full flex flex-col">
        <div className="p-2">
          <div className="relative">
            <Input placeholder="Search" className="pl-8" />
            <Search className="size-5 stroke-1 absolute left-2 top-1/2 -translate-y-1/2 stroke-muted-foreground" />
          </div>
        </div>
        <Separator />
        <CompaniesList companies={COMPANIES} selectedCompany={selectedCompany} />
      </div>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Content */}
      {!selectedCompany ? "Not Found" : <CompanyDetails selectedCompany={selectedCompany} className="hidden md:flex flex-1" />}
    </div>
  );
}






export default CompaniesPage;