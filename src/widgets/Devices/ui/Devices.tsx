import { Outlet } from "react-router-dom";
// import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";
// import { Button } from "@/shared/ui/button/button";

export default function Devices() {
  // const navigate = useNavigate();
  // const back = (
  //   <Button size="sm" onClick={() => navigate(-1)}>
  //     Назад
  //   </Button>
  // );

  return (
    // <DataCheckingContainer>
    <>
      {/* <Breadcrumbs /> */}
      <Outlet />
    </>
  );
}
