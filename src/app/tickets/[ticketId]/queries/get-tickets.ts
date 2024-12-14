import { prisma } from "@/lib/prisma";

export const getTickets = async (ticketId: string) => {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
