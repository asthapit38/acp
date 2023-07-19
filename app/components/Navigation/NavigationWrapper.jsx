import MainNavigationWithHover from "./MainNavigationWithHover";
import TopNavigation from "./TopNavigation";

const Navigation = async () => {
  return (
    <nav>
      <TopNavigation />
      <MainNavigationWithHover />
    </nav>
  );
};

export default Navigation;
