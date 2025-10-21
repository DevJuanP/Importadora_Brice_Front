// project imports
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from '../../../../components/third-party/SimpleBar.jsx';
import { useGetMenuMaster } from '../../../../api/menu.js';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        {drawerOpen && <NavCard />}
      </SimpleBar>
    </>
  );
}
