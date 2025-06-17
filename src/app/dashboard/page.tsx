import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Noto_Color_Emoji } from "next/font/google";
import JOB_APPLICATIONS from "@/dummy-data/job-applications";
import COMPANIES from "@/dummy-data/companies";
import moment from "moment";
import Link from "next/link";

const noto = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: '400',
});

type Props = {};

const page = (props: Props) => {
  const jobApplicationStats = [
    {
      title: "Listed",
      value: 0,
      description: "job applications",
      emoji: "💾",
      colorClass: "text-stone-600",
    },
    {
      title: "Applied",
      value: 0,
      description: "job applications",
      emoji: "✈",
      colorClass: "text-blue-600",
    },
    {
      title: "Interview",
      value: 0,
      description: "job applications",
      emoji: "🗣",
      colorClass: "text-orange-600",
    },
    {
      title: "Accepted",
      value: 0,
      description: "job applications",
      emoji: "🤝",
      colorClass: "text-green-600",
    },
    {
      title: "Rejected",
      value: 0,
      description: "job applications",
      emoji: "😭",
      colorClass: "text-red-600",
    },
  ];

  JOB_APPLICATIONS.forEach((ja) => {
    switch (ja.status) {
      case "accepted":
        jobApplicationStats[3].value += 1;
        break;
      case "rejected":
        jobApplicationStats[4].value += 1;
        break;
      case "interview":
        jobApplicationStats[2].value += 1;
        break;
      case "applied":
        jobApplicationStats[1].value += 1;
        break;
      case "listed":
        jobApplicationStats[0].value += 1;
        break;
    }
  });

  const jobAppWithCompany = JOB_APPLICATIONS.map((ja) => {

    return {
      ...ja,
      company: COMPANIES.find(c => c.id === ja.company_id),
    };
  });


  return (
    <div className="dashboard-content overflow-y-auto max-h-[calc(100vh-52px)] flex-1 p-2">
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex justify-between gap-[10px] w-fit min-w-full">
          {jobApplicationStats.map((stat, index) => (
            <Card key={index} className="min-w-[150px] h-fit flex-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${stat.colorClass}`}>
                  {stat.title}
                </CardTitle>
                <span className={`font-variant-emoji ${noto.className}`}>{stat.emoji}</span>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-foreground">
                  {stat.value}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator />
      <div className="mt-4">
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <Table className="border-separate border-spacing-y-[8px] border-spacing-x-[0px]">
            <TableHeader className="font-bold">
              <TableRow className="hover:bg-[#0000001a]">
                <TableHead className="text-center px-[3px] py-[10px] min-w-[40px]">
                  ID
                </TableHead>
                <TableHead className="text-left px-[3px] py-[10px] min-w-[180px]">
                  Company
                </TableHead>
                <TableHead className="text-left px-[3px] py-[10px] min-w-[230px]">
                  Job Title
                </TableHead>
                <TableHead className="text-left px-[3px] py-[10px] min-w-[100px]">
                  Status
                </TableHead>
                <TableHead className="text-left px-[3px] py-[10px] min-w-[100px]">
                  Tracked Since
                </TableHead>
                <TableHead className="px-[3px] py-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobAppWithCompany.map((app, i) => (
                <TableRow key={app.id}>
                  <TableCell className="text-center px-[3px] py-[10px]">
                    {app.id}
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    <Link href={`/dashboard/companies?id=${app.company?.id}`} className="hover:underline hover:text-primary">
                      {app.company?.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    <Link href={`/dashboard/job-applications/${app.id}`} className="hover:underline hover:text-primary">
                      {app.job_title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    <StatusBadge status={app.status}>
                      {app.status}
                    </StatusBadge>
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    {moment(app.tracked_at).fromNow()}
                  </TableCell>
                  <TableCell className="px-[3px] py-[10px]">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/dashboard/job-applications/${app.company?.id}/edit`}>
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-2">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
