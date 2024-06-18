"use client";

import { getLogs } from "@/services/log";
import { HashLoader } from "react-spinners";
import LogCard from "./LogCard";

const LogList = () => {
  const logs = getLogs();
  return (
    <div className="flex w-full h-[100%] justify-center gap-4">
      {!logs.length ? (
        <div className="flex items-center justify-center w-full">
          <h1 className="text-lg font-semibold text-red-400">
            Log Bulunamadı!
          </h1>
        </div>
      ) : (
        <div className="w-1/2 flex flex-col gap-4">
          {logs?.map((log: Log) => (
            <LogCard log={log} key={log._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LogList;
