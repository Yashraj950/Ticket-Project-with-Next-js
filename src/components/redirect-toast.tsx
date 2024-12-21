"use client";
import {

    deleteCookieByKey,
  getCookieByKey,
} from "@/app/tickets/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
  const pathname = usePathname();

  useEffect(() => {
    const showCookiesToast = async () => {
      const message = await getCookieByKey("toast");
      if (message) {
        toast.success(message);
        deleteCookieByKey("toast" );
      }
    };
    showCookiesToast();
  }, [pathname]);
  return null;
};

export default RedirectToast;
