import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import Link from "next/link";
import {
  LogoutLink,
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const NavbarComponent = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <Navbar className="py-2 backdrop-blur-sm  z-[999] bg-white/40 sticky top-0">
      <NavbarContainer className="container mx-auto  px-5">
        <Link href={"/"}>
          <NavbarBrand className="flex items-center space-x-4 cursor-pointer">
            <img
              className=" w-12   h-12 md:w-14 md:h-14"
              src={"https://cdn-icons-png.flaticon.com/128/3669/3669967.png"}
              alt="keep"
            /> 
            <h1 className=" font-serif text-2xl text-[#f2780c] md:text-3xl font-bold"> Bangla Blog </h1>
          </NavbarBrand>
        </Link>
        <NavbarList>
          <Link href={"/"}>
            <NavbarItem>Home </NavbarItem>
          </Link>
          <Link href={"/profile"}>
            <NavbarItem>Profile </NavbarItem>
          </Link>
          {isUserAuthenticated ? (
            <LogoutLink postLogoutRedirectURL="/">
              <NavbarItem active className="bg-rose-500 hover:bg-rose-500">
                Log out
              </NavbarItem>
            </LogoutLink>
          ) : (
            <>
            <LoginLink postLoginRedirectURL="/">
              <NavbarItem active className="bg-lime-500 hover:bg-lime-600"  >
              Login
              </NavbarItem>
              </LoginLink>
                <RegisterLink postLoginRedirectURL="/profile">
              <NavbarItem active className="bg-[#f2780c] hover:bg-[#f2780c]" >
                  Sign up
              </NavbarItem>
               </RegisterLink>
            </>
          )}
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <Link href={"/"}>
            <NavbarItem>Home </NavbarItem>
          </Link>
          <Link href={"/profile"}>
            <NavbarItem>Profile </NavbarItem>
          </Link>
          {isUserAuthenticated ? (
            <LogoutLink postLogoutRedirectURL="/">
              <NavbarItem active className="bg-rose-500 hover:bg-rose-500">
                Log out
              </NavbarItem>
            </LogoutLink>
          ) : (
            <>
             <LoginLink postLoginRedirectURL="/">
              <NavbarItem active className="bg-lime-500 hover:bg-lime-600"  >
              Login
              </NavbarItem>
              </LoginLink>
                <RegisterLink postLoginRedirectURL="/profile">
              <NavbarItem active className="bg-[#f2780c] hover:bg-[#f2780c]" >
                  Sign up
              </NavbarItem>
               </RegisterLink>
            </>
          )}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
