"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type PreviewWrapperProps = {
  preview: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const PreviewWrapper: React.FC<PreviewWrapperProps> = ({
  preview,
  children,
}: PreviewWrapperProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (preview) {
      const handleStart = () => setIsLoading(true);
      const handleStop = () => setIsLoading(false);

      window.addEventListener("beforeunload", handleStart);
      window.addEventListener("load", handleStop);

      return () => {
        window.removeEventListener("beforeunload", handleStart);
        window.removeEventListener("load", handleStop);
      };
    }
  }, [preview]);

  if (!preview) return <>{children}</>;

  return (
    <div className="preview-mode">
      {isLoading && <div className="loading">Loading preview...</div>}
      {children}
      <div className="preview-banner">
        Preview Mode
        <button
          onClick={() => {
            setIsLoading(true);
            router.push("/api/exit-preview");
          }}
        >
          Exit Preview
        </button>
      </div>
    </div>
  );
};
