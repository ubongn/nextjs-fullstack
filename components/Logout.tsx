"use client"

import { logout } from "@/actions/auth";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const Logout = () => {

  const {pending} = useFormStatus()

  return (
    <Button onClick={() => logout()} disabled={pending}>
      <div className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer">
       {pending ? "Loading..." : "Sign out"} 
      </div>
    </Button>
  );
};

export default Logout;
