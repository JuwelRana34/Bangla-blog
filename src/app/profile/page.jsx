import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "keep-react";

export const metadata = {
  title: 'Profile | Bangla Blog',
  description: 'bangla blog user  profile ',
}
async function profile() {
  const { getUser ,isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

    if (!isUserAuthenticated) {
        return redirect('api/auth/login') 
    }

  return (
    <div className="container mx-auto px-5">
      <h1 className=" font-bold text-[#f2780c] text-2xl md:text-4xl text-center py-5">
        Welcome to your profile!
      </h1>
      <div className="flex justify-center mt-10 relative items-center border md:w-1/2 mx-auto p-4 rounded shadow">
        <div className="flex flex-col absolute -top-5 items-center ">
          {/* <img
            src={user.picture}
            alt="profile picture"
            className="w-20 h-20 rounded-full"
          /> */}
          <Avatar className=" h-16 w-16  ring ring-metal-200 " size="lg">
        <AvatarImage src={user.picture}/>
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-green-500">{user.given_name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <div className="flex items-center gap-2">
            {/* <span className="text-gray-700 text-sm">Role: {user.role}</span> */}
            <span className="text-gray-700 text-sm">ID: {user.id}</span>
          </div>
          {/* <div className="flex items-center gap-2">
                    <span className="text-gray-700 text-sm">Last Login: {new Date(user.lastLoginAt).toLocaleString()}</span>
                    <span className="text-gray-700 text-sm">Created At: {new Date(user.createdAt).toLocaleString()}</span>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default profile;
