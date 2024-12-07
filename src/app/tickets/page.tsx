import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import{CircleCheck, FileText , Pencil} from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TICKET_ICONS = {
  OPEN: <FileText  className= "  bg-green-100  rounded-2xl text-green-400"/>,
IN_PROGRESS:<Pencil className=" bg-green-100  rounded-2xl text-blue-400"/>,
   DONE: <CircleCheck className=" bg-yellow-100  rounded-2xl text-yellow-400" />,
};

const TicketPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place 🎟️
        </p>
      </div>

      <Separator/>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate "> {ticket.title} </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className=" text-sm text-blue-600 hover:text-blue-400 underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
