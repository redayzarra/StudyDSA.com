const IntroductionPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-black flex items-center justify-center mt-2">
        Introduction
      </h1>
      {/* Welcome paragraph */}
      <div>
        <p className="indent-5">
          <span className="font-bold">Welcome to StudyDSA.com</span>, a personal
          project born from my own journey and experiences in preparing for job
          interviews in the tech industry. This website is not just a platform;{" "}
          <span className="font-bold">it's a sharing space</span> where I bring
          together the knowledge, strategies, and insights that I've gathered
          along my path, especially while studying{" "}
          <span className="font-bold">
            for Data Structures and Algorithms (DSA)
          </span>
          .
        </p>
      </div>

      <h2 className="text-3xl font-black">Purpose</h2>
      {/* Purpose paragraph */}
      <div>
        <p className="indent-5">
          This project is a reflection of my journey, a collection of the
          lessons, strategies, and insights I've accumulated.{" "}
          <span className="font-bold">
            My goal is simple: to share what I've learned in a straightforward,
            accessible manner.
          </span>{" "}
          I hope that by doing so, I can make your experiences a bit easier,
          whether you're preparing for interviews or just looking to improve
          your understanding of these essential concepts.
        </p>
      </div>
    </div>
  );
};

export default IntroductionPage;
