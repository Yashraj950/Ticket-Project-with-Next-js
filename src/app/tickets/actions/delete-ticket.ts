"use server";
import {prisma } from "@/lib/prisma";
import {  ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookieByKey } from "./cookies";
// import { redirect } from "next/dist/server/api-utils";

export const deleteTicket= async (id: string) =>{
await prisma.ticket.delete({
        where: {
            id,
        },
    });
    
    revalidatePath(ticketsPath());  
        setCookieByKey("toast","Ticket deleted");
    
   redirect(ticketsPath());                                       
}   