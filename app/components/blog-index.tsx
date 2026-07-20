"use client";

import { useMemo, useState } from "react";
import { blogPosts } from "../blog-data";
import type { Locale } from "../content";

const copy = {
  es: {
    searchLabel: "Buscar artículos",
    searchPlaceholder: "Buscar por palabra clave…",
    all: "Todos",
    result: "artículo",
    results: "artículos",
    read: "Leer artículo",
    emptyTitle: "No encontramos artículos con esos filtros.",
    emptyBody: "Prueba otra palabra o vuelve a ver todas las categorías.",
    clear: "Limpiar búsqueda",
  },
  en: {
    searchLabel: "Search articles",
    searchPlaceholder: "Search by keyword…",
    all: "All",
    result: "article",
    results: "articles",
    read: "Read article",
    emptyTitle: "We could not find articles matching those filters.",
    emptyBody: "Try another keyword or return to all categories.",
    clear: "Clear search",
  },
} as const;

export function BlogIndex({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const posts = blogPosts[locale];
  const categories = useMemo(() => [t.all, ...new Set(posts.map((post) => post.category))], [posts, t.all]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(t.all);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    return posts.filter((post) => {
      const matchesCategory = category === t.all || post.category === category;
      const searchable = `${post.title} ${post.excerpt} ${post.category}`.toLocaleLowerCase(locale);
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [category, locale, posts, query, t.all]);

  function clearFilters() {
    setQuery("");
    setCategory(t.all);
  }

  return (
    <>
      <div className="blog-toolbar">
        <label className="blog-search">
          <span>{t.searchLabel}</span>
          <div><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} type="search" /></div>
        </label>
        <div className="category-filter" aria-label={locale === "es" ? "Filtrar por categoría" : "Filter by category"}>
          {categories.map((item) => (
            <button className={category === item ? "category-chip is-active" : "category-chip"} key={item} type="button" onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
      </div>
      <p className="result-count" aria-live="polite">{filteredPosts.length} {filteredPosts.length === 1 ? t.result : t.results}</p>
      {filteredPosts.length > 0 ? (
        <div className="blog-card-grid">
          {filteredPosts.map((post) => (
            <article className={`blog-card blog-card-${post.tone}`} key={post.slug}>
              <div className="blog-card-visual" aria-hidden="true"><span>{post.icon}</span></div>
              <div className="blog-card-content">
                <div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                <h2><a href={`/${locale}/blog/${post.slug}`}>{post.title}</a></h2>
                <p>{post.excerpt}</p>
                <a className="read-more" href={`/${locale}/blog/${post.slug}`}>{t.read} <b>→</b></a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-empty">
          <span aria-hidden="true">?</span>
          <h2>{t.emptyTitle}</h2>
          <p>{t.emptyBody}</p>
          <button className="button button-outline" type="button" onClick={clearFilters}>{t.clear}</button>
        </div>
      )}
    </>
  );
}
