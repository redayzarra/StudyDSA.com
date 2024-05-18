import { Metadata } from "next";
import MainChapter from "../_components/MainChapter";
import MainHeading from "../_components/MainHeading";

const BigOPage = async () => {
  return (
    <div className="space-y-8">
      <MainHeading title="Big-O Notation" description="Description of Big-O Notation"/>
      <MainChapter
        id="definition"
        title="Definition"
      >
        <p>
          Arrays are a collection of items that are{" "}
          <span className="font-bold">stored contiguously (together)</span> in
          memory and can be accessed with addresses. These items are of the same
          type, and the{" "}
          <span className="font-bold">size of the array is fixed</span> upon
          creation.
        </p>
      </MainChapter>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Big-O Notation",
  description: "",
};

export default BigOPage;
