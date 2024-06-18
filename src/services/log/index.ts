// Add Local Storage Log
export const getLogs = () => {
    if (process.browser) {
        if (localStorage !== undefined) {
            const logs = localStorage.getItem("logs");
            if (logs) {
                return JSON.parse(logs);
            }
            return [];
        }
    }
}

const createLog = async (log: Log) => {
    if (process.browser) {
        if (localStorage !== undefined) {
            const logs = getLogs();
            const newLog = {
                message: log.message,
                createdAt: new Date().toISOString(),
                _id: Math.random().toString(36).substr(2, 9),
            }
            logs.push(newLog);
            localStorage.setItem("logs", JSON.stringify(logs));
        }
    }
}


export { createLog }