"use client";

import { type Company } from '@/dummy-data/companies';
import { cn } from '@/lib/utils';
import useGlobalDrawer from '@/stores/global-drawer.store';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import CompanyDetails from './CompanyDetails';
import { DrawerTitle } from '@/components/ui/drawer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

type Props = {
  companies: Company[];
  selectedCompany?: Company;
}

const CompaniesList = ({ companies, selectedCompany }: Props) => {

  const { setOpen, setContent } = useGlobalDrawer();

  return (
    <div className="p-2 flex-1 flex flex-col gap-2 overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      {companies.map((company) => (
        <Link
          key={company.id}
          href={`/dashboard/companies?id=${company.id}`}
          className={cn("p-2 flex gap-2 hover:bg-primary/20 rounded-sm", company.id === selectedCompany?.id && "bg-primary/20")}
          onClick={(e) => {
            if(window.innerWidth < 768){
              setOpen(true);
              setContent(
                <>
                  <DrawerTitle hidden>{company.name}</DrawerTitle>
                  <CompanyDetails selectedCompany={company} className='h-[80vh]'/>
                </>
              );
            }
          }}
        >
          <Avatar className='border rounded-lg size-10'>
            <AvatarImage src={company.img_url} />
            <AvatarFallback className='rounded-none'>{company.name.split(" ").map(w => w[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <h2 className='font-semibold'>{company.name}</h2>
            <p>{company.category}</p>
            <p>{company.location}</p>
          </div>
          <p className="ml-auto text-xs text-muted-foreground">
            {moment(company.created_at).fromNow(true)}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default CompaniesList;