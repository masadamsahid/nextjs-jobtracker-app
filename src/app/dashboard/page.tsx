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

import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
type Props = {};

const page = (props: Props) => {
  const jobApplicationStats = [
    {
      title: "Listed",
      value: 43,
      description: "job applications",
      emoji: "💾",
      colorClass: "text-stone-600",
    },
    {
      title: "Applied",
      value: 43,
      description: "job applications",
      emoji: "✈",
      colorClass: "text-blue-600",
    },
    {
      title: "Interview",
      value: 43,
      description: "job applications",
      emoji: "🗣",
      colorClass: "text-orange-600",
    },
    {
      title: "Accepted",
      value: 43,
      description: "job applications",
      emoji: "🤝",
      colorClass: "text-green-600",
    },
    {
      title: "Rejected",
      value: 43,
      description: "job applications",
      emoji: "😭",
      colorClass: "text-red-600",
    },
  ];

  // Dummy data for job applications - you would replace this with actual data
  const jobApplications = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      jobTitle: "Software Engineer",
      status: "Applied",
      trackedSince: "2024-01-15",
    },
    {
      id: 2,
      company: "Innovate Co.",
      jobTitle: "UX Designer",
      status: "Interview",
      trackedSince: "2024-02-01",
    },
    {
      id: 3,
      company: "Global Corp.",
      jobTitle: "Data Analyst",
      status: "Listed",
      trackedSince: "2024-01-20",
    },
    {
      id: 4,
      company: "Creative Minds",
      jobTitle: "Marketing Specialist",
      status: "Rejected",
      trackedSince: "2024-03-10",
    },
    {
      id: 5,
      company: "Future Systems",
      jobTitle: "Project Manager",
      status: "Accepted",
      trackedSince: "2024-02-28",
    },
    {
      id: 6,
      company: "Tech Solutions Inc.",
      jobTitle: "Software Engineer",
      status: "Applied",
      trackedSince: "2024-01-15",
    },
    {
      id: 7,
      company: "Innovate Co.",
      jobTitle: "UX Designer",
      status: "Interview",
      trackedSince: "2024-02-01",
    },
    {
      id: 8,
      company: "Global Corp.",
      jobTitle: "Data Analyst",
      status: "Listed",
      trackedSince: "2024-01-20",
    },
    {
      id: 9,
      company: "Creative Minds",
      jobTitle: "Marketing Specialist",
      status: "Rejected",
      trackedSince: "2024-03-10",
    },
    {
      id: 10,
      company: "Future Systems",
      jobTitle: "Project Manager",
      status: "Accepted",
      trackedSince: "2024-02-28",
    },
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Accepted":
        return "accepted"; // You might define a 'success' variant if needed
      case "Rejected":
        return "rejected";
      case "Interview":
        return "interview";
      case "Applied":
        return "applied";
      case "Listed":
        return "listed";
    }
  };
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
                <span className="font-variant-emoji">{stat.emoji}</span>
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
              {jobApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="text-center px-[3px] py-[10px]">
                    {app.id}
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    {app.company}
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    {app.jobTitle}
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    <StatusBadge status={getStatusBadgeVariant(app.status)}>
                      {app.status}
                    </StatusBadge>
                  </TableCell>
                  <TableCell className="text-left px-[3px] py-[10px]">
                    {app.trackedSince}
                  </TableCell>
                  <TableCell className="px-[3px] py-[10px]">
                    <Button variant="ghost" size="sm">
                      Edit
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
