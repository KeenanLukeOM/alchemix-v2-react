import { cn } from "@/utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#a6a6a6] dark:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };