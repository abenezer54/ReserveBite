import { MainContent } from "./main/MainContent";
import { SideMenu } from "./SideMenu";
export const Home = () => {
  return (
    <main className="bg-[#F8F8FA] w-full h-400 flex gap-10  pl-10 pr-10 pt-7 pb-13">
      <MainContent />
      <SideMenu />
    </main>
  );
};
