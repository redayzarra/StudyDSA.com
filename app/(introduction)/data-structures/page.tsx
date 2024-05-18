import { Metadata } from "next";
import MainChapter from "../_components/MainChapter";
import MainHeading from "../_components/MainHeading";

const DataStructuresPage = async () => {
  return (
    <div className="space-y-8">
      <MainHeading title="Data Structures" description="description"/>
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
  title: "Data Structures",
  description: "",
};

export default DataStructuresPage;
