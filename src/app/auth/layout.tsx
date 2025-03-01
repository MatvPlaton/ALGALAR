import { ReactNode } from "react";
import Header from "./Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
