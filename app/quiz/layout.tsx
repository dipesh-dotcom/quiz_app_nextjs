export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      This is the nav bar
      {children}
    </nav>
  );
}
