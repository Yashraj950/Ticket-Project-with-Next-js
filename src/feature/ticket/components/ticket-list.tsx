
import { getTickets } from "@/app/tickets/[ticketId]/queries/get-tickets";
import TicketItem from "./ticket-item";
import { $Enums } from "@prisma/client";

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket: { title: string; id: string; createdAt: Date; updatedAt: Date; content: string; status: $Enums.TicketStatus; }) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
      ))}
    </div>
  );
};

export default TicketList;
