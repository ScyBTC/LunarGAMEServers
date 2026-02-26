import { Server } from "@/data/mock";

interface StatusPillProps {
  status: Server["status"];
  className?: string;
}

const StatusPill = ({ status, className = "" }: StatusPillProps) => {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
      <span className={`w-2 h-2 rounded-full ${status === "online" ? "status-online" : "status-offline"}`} />
      <span className={status === "online" ? "text-online" : "text-offline"}>
        {status === "online" ? "Online" : "Offline"}
      </span>
    </span>
  );
};

export default StatusPill;
