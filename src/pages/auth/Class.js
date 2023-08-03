import MobileDashboard from "../../components/dashboard/mobile/mobile";
import StudentDash from "../../components/dashboard/studentDash";

const Class = () => {
  return (
    <MobileDashboard>
      <StudentDash searchWhere="Search Yr3 class..." />
    </MobileDashboard>
  );
};

export default Class;
