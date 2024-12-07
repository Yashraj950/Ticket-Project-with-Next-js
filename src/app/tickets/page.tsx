
import { initialTickets } from "@/data";



import { Separator } from "@/components/ui/separator";
import Heading from "@/components/heading";
import TicketItem from "@/feature/ticket/components/ticket-item";


const TicketPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-9">
      <Heading  title="Tickets" description="All your tickets at one place 🎟️"/>
     


      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket}  />
        
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
