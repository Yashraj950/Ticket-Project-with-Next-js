import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";

import TicketItem from "@/feature/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";
import Link from "next/link";
import { getTickets } from "./queries/get-ticket";


type TicketPageProps = {
  params: {
    ticketId: string;
    
    
    
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {

  const ticket = await getTickets(params.ticketId);
  if (!ticket) {
    return <Placeholder 
    label="🥰 Ticket not found 🫣"
      button={
        <Button asChild variant="outline"  >
        <Link href={ticketsPath()} >Go  to tickets</Link>
        </Button>
      }
    /> 
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
     <TicketItem ticket={ticket} />
    </div>
  );
};

export default TicketPage;
