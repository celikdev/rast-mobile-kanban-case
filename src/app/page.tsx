import { BoardList } from "@/components/board";

const Home = () => {
  return (
    <main className="flex flex-col items-center py-10 gap-4 h-[100%]">
      <h1 className="text-6xl font-black text-teritary">Board List</h1>
      <BoardList />
    </main>
  );
};

export default Home;
