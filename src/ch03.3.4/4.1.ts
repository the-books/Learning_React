type UserLogs = (u: string) => (m: string) => void;

const userLogs: UserLogs = userName => message => console.log(`${userName} -> ${message}`);

const log = userLogs('grandpa123');

log('attempted to load 20 fake members');

export {};
