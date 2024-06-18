import { LogList } from "@/components/log";

const Log = () => {
  return (
    <main className="flex flex-col items-center py-10 gap-4 h-[100%]">
      <h1 className="text-6xl font-black text-teritary">Log List</h1>
      <LogList />
    </main>
  );
};

export default Log;
