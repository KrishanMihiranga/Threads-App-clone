import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <UserButton afterSignOutUrl="/" />
    </ClerkProvider>
  );
}

