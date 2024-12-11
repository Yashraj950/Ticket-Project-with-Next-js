import { initialTickets } from "@/data";
import { Ticket } from "@/feature/ticket/components/type";
// import { Ticket } from "../type";


export const getTickets = async (ticketId: string) : Promise<Ticket[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);
     

    console.log(process.env.DATABASE_URL);
    
    
    return new Promise((resolve) => {
     resolve(initialTickets);

    })
};