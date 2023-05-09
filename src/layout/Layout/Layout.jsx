import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{<Outlet />}</main>
    </div>
  );
};
