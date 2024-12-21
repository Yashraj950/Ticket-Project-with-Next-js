"use server";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateTicket = async (id: string, formdata: FormData) => {
  const data = {
    title: formdata.get("title"),
    content: formdata.get("content"),
  };
  await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
