import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import COMPANIES from '@/dummy-data/companies';
import { Interview } from '@/dummy-data/interviews';
import JOB_APPLICATIONS from '@/dummy-data/job-applications';
import { cn } from '@/lib/utils';
import { Mic, Mic2, RefreshCcw, Trash2 } from 'lucide-react';
import moment from 'moment';
import React from 'react'

type Props = {
  selectedInterview: Interview;
  className?: string;
}

const AIInterview = ({ selectedInterview, className }: Props) => {
  const job = JOB_APPLICATIONS.find(j => j.id === selectedInterview.job_application_id);
  const selectedCompany = COMPANIES.find(c => c.id === job?.company_id);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="p-4 flex gap-4 items-center">
        <Avatar className="size-10">
          <AvatarImage src="" />
          <AvatarFallback>{selectedCompany?.name.split(" ").map(w => w[0]).join("")}</AvatarFallback>
        </Avatar>
        <Separator orientation='vertical' />
        <div className="flex-1">
          <h1 className="text-sm font-semibold">{job?.job_title}</h1>
          <p className="text-sm">at {selectedCompany?.name}</p>
        </div>
        <p className="text-sm text-end text-muted-foreground">
          {moment(selectedCompany?.created_at).format("lll")}
        </p>
        <Separator orientation='vertical' />
        <div className='flex'>
          <Button size='icon' variant='ghost'>
            <RefreshCcw />
          </Button>
          <Button size='icon' variant='ghost'>
            <Trash2 />
          </Button>
        </div>
      </div>
      <Separator className="z-10" />
      <div className="overflow-y-auto p-4 flex-1 flex flex-col gap-4 w-full">
        {selectedInterview.chats.map(c => (
          <div key={c.created_at} className='flex'>
            <div
              className={cn(
                'p-2 w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 text-xs md:text-sm rounded-lg md:rounded-xl',
                c.role === 'interviewee' ? 'ml-auto bg-primary text-primary-foreground !rounded-br-none' : 'mr-auto bg-secondary text-secondary-foreground !rounded-bl-none'
              )}
            >
              {c.message}
            </div>
          </div>
        ))}
      </div>
      <Separator className="z-10" />
      <div className="p-4 flex flex-col gap-4 w-full">
        <Textarea placeholder='Reply with text...' rows={3} className='resize-none'></Textarea>
        <div className='flex justify-end gap-4'>
          <Button size='icon' variant='ghost'>
            <Mic />
          </Button>
          <Button>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AIInterview;