import React from "react";
import { notFound } from "next/navigation"; // Import notFound untuk menangani kasus data tidak ditemukan
import JobApplicationForm from "../../_components/JobApplicationForm";
import JOB_APPLICATIONS, {
  JobApplication,
} from "@/dummy-data/job-applications";
import COMPANIES, { Company } from "@/dummy-data/companies";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const EditJobApplication = async ({ params }: Props) => {
  const { id: strId } = await params;
  const id = Number(strId); // Konversi string ID menjadi number

  // 1. Cari Job Application berdasarkan ID
  const jobApp = JOB_APPLICATIONS.find(
    (jobApplication) => jobApplication.id === id
  );

  // Jika job application tidak ditemukan, tampilkan halaman 404
  if (!jobApp) {
    notFound();
  }

  // 2. Cari Company yang terkait berdasarkan company_id dari jobApp
  const relatedJobCompany = COMPANIES.find(
    (company) => company.id === jobApp.company_id
  );

  // 3. Gabungkan data. Buat objek JobApplication yang 'dihidrasi'
  // Ini adalah objek yang akan kita teruskan ke JobApplicationForm
  const hydratedJobApplication: JobApplication & { company?: Company } = {
    ...jobApp,
    company: relatedJobCompany, // Tambahkan objek company ke job application
  };

  return (
    <div className="grid grid-cols-1 p-8">
      <div
        id="illustration"
        className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center"
      >
        <div className="justify-self-center md:justify-self-end lg:justify-self-end">
          <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px]">
            <img src="/To do list-bro 1.png" alt="illustration" />
          </div>
        </div>
        <div className="col-span-2 text-center md:text-left lg:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Let's
            <span className="text-primary"> fix</span> it!
          </h1>
        </div>
      </div>
      <JobApplicationForm
        mode="edit"
        selectedJobApplication={hydratedJobApplication}
      />
    </div>
  );
};

export default EditJobApplication;
