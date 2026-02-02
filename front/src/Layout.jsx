function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full justify-center py-5">
      {children}
    </div>
  );
}

export default Layout;
