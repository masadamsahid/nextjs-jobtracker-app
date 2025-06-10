import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import COMPANIES from "@/dummy-data/companies";
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import { Edit2, Ellipsis, ExternalLink, RefreshCcw, Speech, Trash2 } from "lucide-react";
import moment from "moment";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
}

const JobApplicationDetailPage = async ({ params }: Props) => {
  const { id: _id } = await params;
  const id = Number(_id);

  const selectedJob = JOB_APPLICATIONS.find(ja => ja.id === ja.id);
  if (!selectedJob) return 'Not Found';

  const company = COMPANIES.find(c => c.id === selectedJob.company_id);

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <div className="flex gap-4 items-center">
              <Link href={`/dashboard/companies/?id=${company?.id}`} className="flex-1 flex gap-4 items-center group">
                <Avatar className="size-16 border border-border rounded-lg">
                  <AvatarImage src={company?.img_url} />
                  <AvatarFallback>
                    {company?.name.split(" ").map(w => w[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="flex-1 text-xl font-medium group-hover:underline">
                  {company?.name}
                </CardTitle>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='outline'>
                    <Ellipsis />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/dashboard/job-applications/${id}/edit`}>
                      <Edit2 /> Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-destructive hover:text-destructive-foreground hover:bg-destructive">
                    <Trash2 /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col">
            <h1 className="text-2xl text-primary font-semibold">{selectedJob.job_title}</h1>
            <p className="text-sm text-muted-foreground ">at <Link href={`/dashboar/companies/${company?.id}`} className="hover:underline cursor-pointer">
              {company?.name}</Link> • tracked since {moment(selectedJob.tracked_at).fromNow()}
            </p>
            <Separator className="mt-2" />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild variant='outline'>
              <Link href={selectedJob.job_link_url}>
                Go to Job Link <ExternalLink />
              </Link>
            </Button>
            <Button>Simulate an Interview <Speech /></Button>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex-1 text-xl font-medium">
              Job Description
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col" dangerouslySetInnerHTML={{ __html: selectedJob.job_description }} />
        </Card>
      </div>
      <Card className="w-full md:w-[25%] min-w-72">
        <CardHeader>
          <CardTitle className="flex-1 text-xl font-medium">
            ✨ Key Points of This Job
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm font-normal text-muted-foreground">
          <ul className="list-disc pl-4">
            <li>Sed feugiat libero eu tincidunt cursus.</li>
            <li>Proin ac risus fringilla, tempus ligula id, maximus neque.</li>
            <li>Aliquam facilisis sapien non ex maximus, in lacinia nisl tempus.</li>
            <li>Nullam id enim ut tellus consectetur dignissim.</li>
            <li>Fusce molestie nunc vel metus feugiat, at maximus orci vulputate.</li>
            <li>Integer vel justo scelerisque dui ornare scelerisque.</li>
          </ul>
          <br />
          <p>
            Phasellus ac tristique sem. Duis tristique libero sit amet ante facilisis, nec aliquet lacus ornare. Nulla a turpis id risus dictum ornare in non dui.
          </p>
        </CardContent>
        <CardHeader>
          <CardTitle className="flex-1 text-xl font-medium">
            🚀 What You Can Improve
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm font-normal text-muted-foreground">
          <ul className="list-disc pl-4">
            <li>Sed feugiat libero eu tincidunt cursus.</li>
            <li>Proin ac risus fringilla, tempus ligula id, maximus neque.</li>
            <li>Aliquam facilisis sapien non ex maximus, in lacinia nisl tempus.</li>
            <li>Nullam id enim ut tellus consectetur dignissim.</li>
            <li>Fusce molestie nunc vel metus feugiat, at maximus orci vulputate.</li>
            <li>Integer vel justo scelerisque dui ornare scelerisque.</li>
          </ul>
          <Button className="w-full mt-4">
            <RefreshCcw /> Regenerate
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default JobApplicationDetailPage;