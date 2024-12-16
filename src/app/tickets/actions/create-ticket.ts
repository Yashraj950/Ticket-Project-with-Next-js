"use server";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";


 export const createTicket = async (formdata: FormData) => {
    const data = {
      title: formdata.get("title"),
      content: formdata.get("content"),
    };
     await prisma .ticket.create({
    data:
    {
      title: data.title as string,
      content: data.content as string
    }
      });

      revalidatePath(ticketsPath());
   
  };


