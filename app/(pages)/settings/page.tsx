"use client";

import LogoutButton from "@/components/auth/LogOutButton";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  return (
    <div>
      {JSON.stringify(session)}

      <LogoutButton>
        <Button type="submit" className="mt-4">
          Sign Out
        </Button>
      </LogoutButton>
    </div>
  );
};

export default SettingsPage;
