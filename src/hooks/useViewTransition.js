"use client";
import { useRouter } from "next/navigation";

export const useViewTransition = () => {
  const router = useRouter();

  const navigateWithTransition = (href, options = {}) => {
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    router.push(href);
  };

  return { navigateWithTransition, router };
};
