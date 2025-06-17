import StatusBadge from "@/components/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Company } from "@/dummy-data/companies";
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import { cn } from "@/lib/utils";
import { Ellipsis, ImageOff } from "lucide-react";
import moment from "moment";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CompaniesDetailsProps = {
  selectedCompany: Company;
  className?: string;
}

const CompanyDetails = ({ selectedCompany, className }: CompaniesDetailsProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="p-4 flex gap-4">
        <Avatar className="size-10">
          <AvatarImage src={selectedCompany.img_url} />
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
            <h2 className="text-xl font-semibold">About</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedCompany.desc }} className="mt-4 flex flex-col gap-4" />
          </CardContent>
          <CardContent className="mt-6 p-0 text-xs md:text-sm">
            <h2 className="text-xl font-semibold">Gallery</h2>
            <Carousel className="mt-4">
              <CarouselContent className="gap-4 pl-4">
                {[
                  `https://picsum.photos/id/${13 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${16 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${58 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${32 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${48 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${134 + selectedCompany.id}/2500/1667`,
                  `https://picsum.photos/id/${188 + selectedCompany.id}/2500/1667`,
                ].map((img_url, i) => (
                  <CarouselItem key={img_url} className="basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-md overflow-hidden p-0">
                    <Avatar className="size-full rounded-md aspect-square">
                      <AvatarImage src={img_url} alt={`Image ${i}`} className="size-full object-cover"/>
                      <AvatarFallback className="rounded-md">
                        <ImageOff />
                      </AvatarFallback>
                    </Avatar>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
        <Card className="p-4 lg:p-[30px]">
          <CardContent className="p-0 w-full overflow-x-auto">
            <h2 className="text-xl font-semibold">Your Job Applications at {selectedCompany.name}</h2>
            <Table className="text-xs md:text-sm mt-4">
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