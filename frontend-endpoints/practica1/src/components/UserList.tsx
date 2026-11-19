import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
export function UserList({ token }: { token: string }) {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null) // nuevo, junto a users
  const [me, setMe] = useState<User | null>(null) 

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        setError(data.detail); // 401, 403…: es un objeto con detail
        return;
      }
      setUsers(data); // 200: recién acá es una lista
    });
  }, [token]);

useEffect(() => { // nuevo
const headers = { Authorization: `Bearer ${token}` }
const api = import.meta.env.VITE_API_URL


fetch(`${api}/user/me/id`, { headers }) // 1) ¿quién soy? → { id }
    .then((response) => response.json())
    .then(({ id }) => fetch(`${api}/user/${id}`, { headers })) // 2) mis datos
    .then((response) => response.json())
    .then(setMe)
}, [token]);

if (error) return <p>{error}</p>


return (
    <>
        <h1>Hola, {me?.name}</h1>
        <ul>
        {users.map((user) => (
        <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    </>
)
}

 