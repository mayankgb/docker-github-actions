import { prisma } from "db/client";

export default async function Home() {

  const data = await prisma.user.findMany({})

  return (
    <div >
      asdbksdkvmbcjdafa
     {JSON.stringify({
      data
     })}
    </div>
   
  );
}
