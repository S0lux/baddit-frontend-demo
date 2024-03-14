import { MdErrorOutline, MdInfoOutline, MdOutlineWarning } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

export type AlertType = "error" | "success" | "warning" | "info" | undefined;

export const Alert = ({ message, type = "info" }: { message: string; type?: AlertType }) => {
  const colors = {
    error: "bg-red-100 dark:bg-red-500/50 border-red-500/25 text-textSecondary",
    success: "bg-green-100 dark:bg-green-500/50 border-green-500/25 text-textSecondary",
    warning: "bg-yellow-100 dark:bg-yellow-500/50 border-yellow-500/25 text-textSecondary",
    info: "bg-blue-100 dark:bg-blue-500/50 border-blue-500/25 text-textSecondary",
  };

  return (
    <div className={`flex w-full gap-2 rounded-md p-2 ${colors[type]} border-l-4 border-opacity-50`}>
      <div className="flex items-center justify-center text-4xl">
        {type === "error" && <MdErrorOutline />}
        {type === "success" && <FaRegCheckCircle />}
        {type === "warning" && <MdOutlineWarning />}
        {type === "info" && <MdInfoOutline />}
      </div>

      <div>
        <div className="text-lg font-bold">{type.toLocaleUpperCase()}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};
