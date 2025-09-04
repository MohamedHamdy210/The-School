"use client"
import { createContext, useContext, useState } from "react";

export const RoleContext = createContext<any | null>(null);
export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<"Admin" | "Teacher" | "Parent" | "Student">(
    "Admin"
  );

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be inside RoleProvider");
  return ctx;
}
