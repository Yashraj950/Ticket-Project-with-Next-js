



import Heading from "@/components/heading";
import TicketItem from "@/feature/ticket/components/ticket-item";

import { getTickets } from "./[ticketId]/queries/get-tickets";

const TicketPage = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex-1 flex flex-col gap-y-9 ">
      <Heading title="Tickets" description="All your tickets at one place 🎟️" />

      <div className="flex-1  flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
