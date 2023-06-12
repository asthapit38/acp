import MainNavigation from "./MainNavigation";
import MainNavigationWithHover from "./MainNavigationWithHover";
import TopNavigation from "./TopNavigation";
const Navigation = () => {
  return (
    <nav>
      <TopNavigation />
      {/* <MainNavigation /> */}
      <MainNavigationWithHover />
    </nav>
  );
};

export default Navigation;
