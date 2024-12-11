
import TicketItem from "@/feature/ticket/components/ticket-item";

import { getTickets } from "./queries/get-ticket";
import { notFound } from "next/navigation";


type TicketPageProps = {
  params: {
    ticketId: string;
    
    
    
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {

  const ticket = await getTickets(params.ticketId);
  if (!ticket) {
 notFound();
}

  return (
    <div className="flex justify-center animate-fade-in-from-top">
     <TicketItem ticket={ticket[0]} />
    </div>
  );
};

export default TicketPage;
