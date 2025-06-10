import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { cva, type VariantProps } from "class-variance-authority";


const badgeVariants = cva("rounded-full text-xs font-light", {
  variants: {
    status: {  
      listed: 'bg-stone-500/75 text-stone-800 hover:bg-stone-500/90',
      applied: 'bg-blue-500/75 text-blue-800 hover:bg-blue-500/90',
      interview: 'bg-orange-500/75 text-orange-800 hover:bg-orange-500/90',
      accepted: 'bg-green-500/75 text-green-800 hover:bg-green-500/90',
      rejected: 'bg-red-500/75 text-red-800 hover:bg-red-500/90',
    }
  },
  defaultVariants: {
    status: 'listed'
  }
});


type StatusBadge = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

const StatusBadge = ({ children, className, status, ...props }: StatusBadge) => {

  return (
    <Badge className={cn(badgeVariants({ status }), className)} {...props}>
      {children}
    </Badge>
  );
}

export default StatusBadge;