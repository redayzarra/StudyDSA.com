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
  confirmLink: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : "";

export default function VerificationEmail({ confirmLink }: Props) {
  return (
    <Html>
      <Head />
      <Preview>StudyDSA Email Verification</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src={`${baseUrl}/images/icon.png`}
                width="auto"
                height="50"
                alt="StudyDSA Logo"
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Verify your email address</Heading>
              <Text style={mainText}>
                Thanks for signing up with StudyDSA! We're excited to have you
                on board. Please click the button below to verify your email
                address and complete your registration.
              </Text>
              <Section style={verificationSection}>
                <Button href={confirmLink} style={verifyButton}>
                  Verify Email
                </Button>
                <Text style={validityText}>
                  (This link is valid for 24 hours)
                </Text>
              </Section>
            </Section>
            <Hr style={hrStyle} />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                If you didn't create an account with StudyDSA, please ignore
                this email or contact our support team if you have concerns.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was sent by StudyDSA. © 2024, StudyDSA. All rights
            reserved. View our{" "}
            <Link href={`${baseUrl}/privacy`} target="_blank" style={link}>
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
};

const coverSection: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  padding: "24px",
};

const imageSection: React.CSSProperties = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "center",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
