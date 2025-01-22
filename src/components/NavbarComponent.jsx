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
    <Navbar className="py-2 backdrop-blur-sm bg-white/40 sticky top-0">
      <NavbarContainer className="container mx-auto  px-5">
        <Link href={"/"}>
          <NavbarBrand>
            <img
              className="w-14 h-14"
              src={"https://cdn-icons-png.flaticon.com/128/3669/3669967.png"}
              alt="keep"
            />
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
            <NavbarItem active className="bg-rose-500 hover:bg-rose-500">
              <LogoutLink>Log out</LogoutLink>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem active>
                <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
              </NavbarItem>
              <NavbarItem active className="bg-lime-500 hover:bg-lime-600">
                <RegisterLink postLoginRedirectURL="/profile">
                  Sign up
                </RegisterLink>
              </NavbarItem>
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
            <NavbarItem active className="bg-rose-500 hover:bg-rose-500">
              <LogoutLink>Log out</LogoutLink>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem active>
                <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
              </NavbarItem>
              <NavbarItem active className="bg-lime-500 hover:bg-lime-600">
                <RegisterLink postLoginRedirectURL="/profile">
                  Sign up
                </RegisterLink>
              </NavbarItem>
            </>
          )}
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
