import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Função para gerar o breadcrumb
  const generateBreadcrumb = () => {
    const paths = router.asPath.split('/').filter((path) => path);

    if (paths.length === 0 || router.pathname === '/') {
      return <span>Home</span>;
    }

    return paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`;
      const isLast = index === paths.length - 1;

      return isLast ? (
        <span key={path}>{path}</span>
      ) : (
        <span key={path}>
          <Link href={href}>{path}</Link> /{' '}
        </span>
      );
    });
  };

  return (
    <header id="topbar-wrapper" aria-label="Top Bar">
      <div id="topbar" className="d-flex align-items-center justify-content-between px-lg-3 h-100">
        {/* Breadcrumb */}
        <nav id="breadcrumb" aria-label="Breadcrumb">
          {generateBreadcrumb()}
        </nav>

        {/* Botão para alternar a sidebar (opcional) */}
        <button type="button" id="sidebar-trigger" className="btn btn-link">
          <i className="fas fa-bars fa-fw"></i>
        </button>

        {/* Título da página */}
        <div id="topbar-title">
          {router.pathname === '/' ? 'Meu Blog' : 'Outra Página'}
        </div>

        {/* Botão de busca */}
        <button
          type="button"
          id="search-trigger"
          className="btn btn-link"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <i className="fas fa-search fa-fw"></i>
        </button>

        {/* Campo de busca */}
        {isSearchVisible && (
          <div id="search" className="align-items-center ms-3 ms-lg-0">
            <i className="fas fa-search fa-fw"></i>
            <input
              className="form-control"
              id="search-input"
              type="search"
              aria-label="search"
              autoComplete="off"
              placeholder="Buscar..."
            />
            <button
              type="button"
              className="btn btn-link text-decoration-none"
              id="search-cancel"
              onClick={() => setIsSearchVisible(false)}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </header>
  );
}