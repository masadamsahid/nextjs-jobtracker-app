import StatusBadge from "@/components/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Company } from "@/dummy-data/companies";
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import moment from "moment";
import Link from "next/link";

type CompaniesDetailsProps = {
  selectedCompany: Company;
  className?: string;
}

const CompanyDetails = ({ selectedCompany, className }: CompaniesDetailsProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="p-4 flex gap-4">
        <Avatar className="size-10">
          <AvatarImage src="" />
          <AvatarFallback>{selectedCompany.name.split(" ").map(w => w[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-sm font-semibold">{selectedCompany.name}</h1>
          <p className="text-sm">{selectedCompany.location}</p>
        </div>
        <p className="text-sm text-end text-muted-foreground">
          Added on {moment(selectedCompany.created_at).format("ll")}<br />
          {moment(selectedCompany.created_at).format("h:mm:ss A")}
        </p>
      </div>
      <Separator className="z-10" />
      <div className="overflow-y-auto p-4 flex-1 flex flex-col gap-4 w-full">
        <Card className="p-4 lg:p-[30px]">
          <CardContent className="p-0 text-xs md:text-sm">
            <div dangerouslySetInnerHTML={{ __html: selectedCompany.desc }} className="flex flex-col gap-4"/>
          </CardContent>
        </Card>
        <Card className="p-4 lg:p-[30px]">
          <CardContent className="p-0 w-full overflow-x-auto">
            <Table className="text-xs md:text-sm">
              <TableBody className="[&_tr]:border-0">
                {JOB_APPLICATIONS.filter((job) => job.company_id === selectedCompany.id).map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <Link href={`/dashboard/job-applications/${job.id}`} className="hover:text-primary hover:underline">
                        {job.job_title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={job.status}>
                        {job.status}
                      </StatusBadge>
                    </TableCell>
                    <TableCell title={moment(job.tracked_at).format("ll")}>
                      {moment(job.tracked_at).fromNow()}
                    </TableCell>
                    <TableCell>
                      <Button variant='ghost'>
                        <Ellipsis />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CompanyDetails;