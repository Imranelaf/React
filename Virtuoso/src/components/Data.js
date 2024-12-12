export default function Data() {
    const users = [];
    for (let i = 0; i <= 1000; i++) {
      users.push({ id: i, users: `user${i}` });
    }
    return users;
  }
  