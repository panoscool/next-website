import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className='main'>{children}</main>
    </>
  );
}

export default Layout;
