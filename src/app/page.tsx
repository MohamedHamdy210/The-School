"use client"
import Navbar from "@/components/Navbar";
import AdminPage from "./(dashboard)/admin/page"
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRole } from "@/components/UserContext";
import { redirect } from "next/navigation";

const Homepage = () => {
  const {role,setRole}=useRole();
  if(role==="Admin") redirect("/admin");
  else if(role==="Teacher") redirect("/teacher");
  else if(role==="Student") redirect("/student");
  else if(role==="Parent") redirect("/parent"); 
  return (
    <p>Loading...</p>
  );
}

export default Homepage