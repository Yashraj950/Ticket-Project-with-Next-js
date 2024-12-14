
import TicketItem from "@/feature/ticket/components/ticket-item";
// import { getTickets } from "@/app/tickets/[ticketId]/queries/get-tickets";
import { notFound } from "next/navigation";
import { getTicket } from "./queries/get-ticket";


type TicketPageProps = {
  params: {
    ticketId: string;
    isDetail: boolean

    
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);
  
  if (!ticket) {
 notFound();
}

  return (
    <div className="flex justify-center animate-fade-in-from-top">
     <TicketItem ticket={ticket} isDetail  />
    </div>
  );
};

export default TicketPage;
