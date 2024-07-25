import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  resetLink: string;
}

export default function ResetEmail({ resetLink }: Props) {
  return (
    <Html>
      <Head />
      <Preview>StudyDSA Password Reset</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src={`https://studydsa.com/images/icon.png`}
                width="auto"
                height="50"
                alt="StudyDSA Logo"
                style={logoImage}
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Reset your password</Heading>
              <Text style={mainText}>
                You've requested to reset your password for your StudyDSA
                account. Click the button below to choose a new password. If you
                didn't request this change, you can safely ignore this email.
              </Text>
              <Section style={verificationSection}>
                <Button href={resetLink} style={verifyButton}>
                  Reset Password
                </Button>
                <Text style={validityText}>
                  (This link is valid for 1 hour)
                </Text>
              </Section>
            </Section>
            <Hr style={hrStyle} />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                If you didn't request a password reset, please ignore this email
                or contact our support team if you have concerns.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was sent by StudyDSA. © 2024, StudyDSA. All rights
            reserved. View our{" "}
            <Link
              href={`https://studydsa.com/privacy`}
              target="_blank"
              style={link}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const coverSection: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  padding: "24px",
};

const imageSection: React.CSSProperties = {
  padding: "5px 0",
  textAlign: "center",
  width: "100%",
};

const logoImage: React.CSSProperties = {
  display: "inline-block",
  width: "auto",
  height: "50px",
};

const upperSection: React.CSSProperties = {
  padding: "25px 35px",
  textAlign: "center",
};

const h1: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const mainText: React.CSSProperties = {
  color: "#e0e0e0",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0 24px",
};

const verificationSection: React.CSSProperties = {
  padding: "32px",
  textAlign: "center",
};

const verifyButton: React.CSSProperties = {
  backgroundColor: "#5469d4",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  display: "inline-block", // Changed from flex to inline-block
  textAlign: "center", // Ensure text is centered
  lineHeight: "50px", // Match the height for vertical centering
  height: "50px",
  width: "100%",
  padding: "0 20px",
  boxSizing: "border-box",
};

const validityText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "24px",
  margin: "16px 0 0",
  color: "#b0b0b0",
};

const lowerSection: React.CSSProperties = {
  padding: "25px 35px",
  textAlign: "center",
};

const cautionText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#b0b0b0",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "16px",
  color: "#909090",
  textAlign: "center",
  padding: "0 20px",
};

const link: React.CSSProperties = {
  color: "#7b8eff",
  textDecoration: "underline",
};

const hrStyle: React.CSSProperties = {
  borderColor: "#333333",
  margin: "20px 0",
};
