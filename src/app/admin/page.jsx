// import api from '@/lib/fetcher';
import AdminPage from '@/views/Admin/AdminPage';
// import Login from '@/views/Login/Login';
// import { getServerSideProps } from 'next/dist/build/templates/pages';
// import { use } from 'react';

// function Admin() {
//   // const response = use(await api.get('/store'));
//   // console.log('Store data:', response);
//   return  <Login />;
//   // return <AdminPage />;
// }

// export default Admin;
export default function Admin() {
  return <AdminPage />;
}
