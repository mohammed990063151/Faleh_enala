import { cn } from "@/lib/utils";

export function SpaceBackground({ intensity = "full" }: { intensity?: "full" | "subtle" }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        intensity === "subtle" ? "opacity-50" : "opacity-100"
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030014]" />
      <div className="space-bg-glow" />
      <div className="space-bg-nebula space-bg-nebula-a" />
      <div className="space-bg-nebula space-bg-nebula-b" />
      <div className="space-bg-stars" />
    </div>
  );
}
