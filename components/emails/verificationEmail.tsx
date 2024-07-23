import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  confirmLink: string;
}

const VerificationEmail = ({ confirmLink }: Props) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>Verify Your Email Address for StudyDSA</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={backgroundImage}>
            <div style={logoContainer}>
              <Img
                src="/images/icon.png"
                width={26}
                height="auto"
                alt="StudyDSA Logo"
              />
              <Text style={logoText}>StudyDSA</Text>
            </div>
            <Text style={heading}>Verify Your Email Address</Text>
            <Text style={paragraph}>
              Welcome to StudyDSA! We&apos;re excited to have you on board. To
              get started, please verify your email address by clicking the
              button below:
            </Text>
            <Section style={buttonContainer}>
              <Link href={confirmLink} style={button}>
                Verify Email
              </Link>
            </Section>
            <Text style={footer}>
              If you didn&apos;t create an account with StudyDSA, please ignore
              this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default VerificationEmail;

const fontFamily =
  "Poppins, Arial, &apos;Helvetica Neue&apos;, Helvetica, sans-serif";

const main = {
  backgroundColor: "#0a0a0a",
  minHeight: "600px",
  fontFamily,
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const backgroundImage = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  marginTop: "100px",
  marginBottom: "20px",
};

const logoText = {
  fontSize: "28px",
  fontWeight: 700,
  color: "#ffffff",
  marginLeft: "5px",
  fontFamily,
};

const heading = {
  fontSize: "24px",
  fontWeight: 700,
  marginTop: "20px",
  marginBottom: "10px",
  color: "#ffffff",
  fontFamily,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: 1.5,
  marginBottom: "40px",
  color: "#ffffff",
  fontFamily,
};

const buttonContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#ffffff",
  color: "#000000",
  padding: "12px 24px",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
  fontFamily,
};

const footer = {
  fontSize: "14px",
  color: "#cccccc",
  marginTop: "40px",
  borderTop: "1px solid #555555",
  paddingTop: "20px",
  fontFamily,
};
