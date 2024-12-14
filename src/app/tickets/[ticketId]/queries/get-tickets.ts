import { prisma } from "@/lib/prisma";

export const getTickets = async (ticketId: string) => {
  console.log("check!");
  
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
