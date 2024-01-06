import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mt-5"
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
