
import Link from "next/link";
import { ticketPath } from "@/paths";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "./constants";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Ticket } from "@prisma/client";
import clsx from "clsx";
// import { Return } from "@prisma/client/runtime/library";

import { Ticket } from "@prisma/client";
// import { prisma } from "@/lib/prisma";
import { deleteTicket } from "@/app/tickets/actions/delete-ticket";
import { getTicket } from "@/app/tickets/[ticketId]/queries/get-ticket";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};
const TicketItem = async({ ticket, isDetail }: TicketItemProps) => {
  const ticketPerTicketItem = await getTicket(ticket.id);
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );

  // const deleteButton = (

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
    <Button variant="outline" size="icon">
      <LucideTrash className="w-4 h-4" />
    </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full  flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate "> {ticket.title} </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("line-clamp-3 whitespace-break-spaces", {
              "line-clamp-3": isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export default TicketItem;
