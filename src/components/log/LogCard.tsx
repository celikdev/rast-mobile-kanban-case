const LogCard = ({ log }: { log: Log }) => {
  return (
    <div className="text-center p-4 shadow-lg rounded-lg bg-secondary flex items-center justify-center gap-10 transition-colors duration-300 hover:bg-secondary/60">
      <h1 className="font-semibold text-lg text-teritary">{log.message}</h1>
    </div>
  );
};
export default LogCard;
