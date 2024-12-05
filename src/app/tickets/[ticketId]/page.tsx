import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async({ params }: TicketPageProps) => {
  const {ticketId} =await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

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
