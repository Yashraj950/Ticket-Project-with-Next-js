import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {

  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <Placeholder label="🥰 Ticket not found 🫣"
      button={
        <Button asChild variant="outline"  >
        <Link href={ticketsPath()} >Go  to tickets</Link>
        </Button>
      }
    /> 
  }

  return (
    <div>
      <h2 className="text-lg"> {ticket.title}</h2>
      <p  className="text-lg">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
