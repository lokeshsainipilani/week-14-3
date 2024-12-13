
import client from "@/db"



async function getUserDetails(){
  const user = await client.user.findFirst({});
  return ({
    name:user?.username,
    email:user?.username
  })
}

export default async function Home() {
  const userData = await getUserDetails()
  return (
    <div>
      Hi there
      {userData?.name}
      {userData.email}
    </div>  );
}
