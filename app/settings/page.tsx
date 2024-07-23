"use client";

import VerificationEmail from "@/components/emails/verificationEmail";

const SettingsPage = () => {
  return (
    <div className="flex items-center justify-center">
      <VerificationEmail confirmLink="youtube.com" />
    </div>
  );
};

export default SettingsPage;
