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
      <div className=" border relative md:w-1/2 mx-auto mb-5 p-4 rounded-md shadow-md">
       <img className="mx-auto rounded-sm" src="https://img.freepik.com/premium-photo/top-view-gray-notebook-with-pen-measuring-tape-orange-background-with-copy-space_68196-3404.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt="" srcset="" />
        <h1 className="  text-sm tracking-wide md:tracking-wider lg:text-lg font-style: italic absolute top-10 p-2 text-white font-semibold">"Blogging is the art of  turning <br />thoughts into connections."</h1>
      <div className="flex justify-center -top-5  relative items-center  md:w-1/2 mx-auto p-4 ">
        <div className="flex flex-col absolute -top-5 items-center ">
          <Avatar className=" h-16 w-16 md:h-24 md:w-24   ring ring-metal-200 " size="lg">
        <AvatarImage src={user.picture}/>
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
        </div>
        <div className=" mt-10 md:mt-20 text-center">
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
    </div>
  );
}

export default profile;
