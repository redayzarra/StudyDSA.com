import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import { QuestionsTable } from "@/components/QuestionsTable";
import { Aurora } from "@/components/ui/Aurora";

const PracticePage = () => {
  return (
    <div>
      <Aurora>
        <NavBar />
        <Container className="absolute mt-36 md:mt-48">
          <QuestionsTable />
        </Container>
      </Aurora>
    </div>
  );
};

export default PracticePage;
