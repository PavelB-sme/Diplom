import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages/Error/Error.tsx';
import { AuthAdmin } from './pages/AuthAdmin/AuthAdmin.tsx'
import { AdminLayout } from './layout/AdminLayout/AdminLayout.tsx';
import { Admin } from './pages/Admin/Admin.tsx'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ClientLayout } from './layout/ClienLayout/ClientLayout.tsx';
import { MainClient } from './pages/MainClient/MainClient.tsx';
import { HallClient } from './pages/HallClient/HallClient.tsx';
import { PaymentClient } from './pages/PaymentClient/PaymentClient.tsx';
import { TicketClient } from './pages/TicketClient/TicketClient.tsx';
import { NavigationProvider } from './context/NavigationProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        path: '/',
        element: <MainClient />
      },
      {
        path: 'hallconfig',
        element: <HallClient />
      },
      {
        path: 'payment',
        element: <PaymentClient />
      },
      {
        path: 'ticket',
        element: <TicketClient />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'login',
        element: <AuthAdmin />
      },
      {
        path: 'cabinet',
        element: <Admin />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </NavigationProvider>      
  </StrictMode>,
)
