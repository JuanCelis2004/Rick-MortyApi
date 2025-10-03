"use client";
import { BackButtonProps } from "@/interface/interface";
import { useRouter } from "next/navigation";

export default function BackButton({ fallbackHref }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push(fallbackHref);
  };

  return (
    <button
      onClick={handleBack}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Volver
    </button>
  );
}
