import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-background text-textcolor w-64 h-screen p-6 border-r border-gray-300">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Shark" className="w-12 h-12" />
        <h1 className="text-2xl font-bold">Shark</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-3">
          <li className="hover:text-gray-700">
            <a href="/" className="flex items-center gap-2">
              🏠 Home
            </a>
          </li>
          <li className="hover:text-gray-700">
            <a href="/categorias">📂 Categorias</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="/tags">🏷️ Tags</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="/arquivos">📄 Arquivos</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="/sobre">ℹ️ Sobre</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

