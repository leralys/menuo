import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/globalStyles';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/homePage/HomePage';
import NotFound from './components/notFound/NotFound';
import { MenuOrScheduleEnum, ErrorVariantsEnum } from './utilities/types/enums';
import MenuEdit from './pages/admin/menuEditPage/MenuEditPage';
import ScheduleWeeklyCreate from './pages/admin/scheduleWeeklyCreate/ScheduleWeeklyCreate';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <MenuEdit location={MenuOrScheduleEnum.MENU} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/menu'
            element={
              <ProtectedRoute>
                <MenuEdit location={MenuOrScheduleEnum.MENU} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/schedule'
            element={
              <ProtectedRoute>
                <ScheduleWeeklyCreate location={MenuOrScheduleEnum.SCHEDULE} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/schedule/weekly'
            element={
              <ProtectedRoute>
                <ScheduleWeeklyCreate location={MenuOrScheduleEnum.SCHEDULE} />
              </ProtectedRoute>
            }
          />
          <Route
            path='*'
            element={<NotFound variant={ErrorVariantsEnum.NOT_FOUND} />}
          />
        </Routes>
        <Toaster
          position='bottom-center'
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            duration: 3000,
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
