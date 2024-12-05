import { initialTickets } from "@/app/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <h1>🥰 Ticket not found 🫣</h1>
  }

  return (
    <div>
      <h2 className="text-lg"> {ticket.title}</h2>
      <p  className="text-lg">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
