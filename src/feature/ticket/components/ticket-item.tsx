import Link from "next/link";

import { ticketPath } from "@/paths";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TICKET_ICONS } from "./constants";
import { Ticket } from "./type";
import { LucideSquareArrowOutUpRight, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
  ticket: Ticket;
};
const TicketItem = ({ ticket }: TicketItemProps) => {

    const detailButton = (
        <Button variant="outline" size="icon" asChild>
        <Link href={ticketPath(ticket.id)}>
          <LucideSquareArrowOutUpRight className="w-6 h-6" />
        </Link>
        </Button>
    )

  return (
    <div className="w-full max-w-[420px] flex gap-x-2">
      <Card className="w-full ">
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
      </Card>
      <div className="flex flex-col gap-y-1">

      {detailButton}
    </div>
    </div>
  );
};

export default TicketItem;
