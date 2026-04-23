import { StorageCTABanner } from "@/components/StorageCTABanner";
import blogPostsData from "@/data/blog-posts.json";
import { Tag, Clock, ChevronRight, BookOpen } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

const posts: BlogPost[] = blogPostsData as BlogPost[];

const categories = [
  { label: "Moving Tips", tag: "moving" },
  { label: "Organization", tag: "organization" },
  { label: "Seasonal Storage", tag: "seasonal" },
  { label: "Business Storage", tag: "business" },
  { label: "Climate Control", tag: "climate" },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main id="main-content">
      {/* Header */}
      <section className="bg-background py-14 border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-sm px-4 py-1.5 text-sm font-medium text-muted uppercase tracking-wider mb-6">
            <BookOpen className="h-3.5 w-3.5 mr-2 text-primary" aria-hidden="true" />
            Storage Tips &amp; Resources
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text uppercase tracking-[0.06em] leading-[0.85]"
            style={{ backgroundImage: "linear-gradient(135deg, #e5e5e5 0%, #c0c0c0 50%, #808080 100%)" }}>
            Storage Tips<br />&amp; Blog
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Featured post */}
              {featured && (
                <div className="bg-surface border border-white/8 rounded-sm overflow-hidden mb-10 group hover:border-white/15 transition-colors">
                  {featured.coverImage && (
                    <div className="aspect-[16/7] overflow-hidden">
                      <img
                        src={featured.coverImage}
                        alt={featured.title}
                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs bg-primary/15 border border-primary/30 text-primary px-3 py-1 rounded-sm uppercase tracking-wider font-medium">Featured</span>
                      {featured.tags && featured.tags.map(t => (
                        <span key={t} className="inline-flex items-center gap-1 text-xs text-muted">
                          <Tag className="h-3 w-3" aria-hidden="true" />{t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl text-text uppercase tracking-[0.06em] leading-[0.9] mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        {featured.author && <span>{featured.author}</span>}
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />{formatDate(featured.date)}
                        </span>
                      </div>
                      <a
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-accent transition-colors"
                      >
                        Read Article <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Post grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {rest.map(post => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-surface border border-white/8 rounded-sm overflow-hidden group hover:border-white/15 transition-colors"
                    >
                      {post.coverImage && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {post.tags && post.tags.slice(0, 1).map(t => (
                          <span key={t} className="inline-flex items-center gap-1 text-xs text-muted mb-3">
                            <Tag className="h-3 w-3" aria-hidden="true" />{t}
                          </span>
                        ))}
                        <h3 className="font-heading text-xl text-text uppercase tracking-[0.06em] leading-tight mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />{formatDate(post.date)}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {posts.length === 0 && (
                <div className="text-center py-20 text-muted">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" aria-hidden="true" />
                  <p>Articles coming soon. Check back for storage tips and moving guides.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-surface border border-white/8 rounded-sm p-6">
                <h3 className="font-heading text-lg text-text uppercase tracking-[0.08em] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat.tag}>
                      <a
                        href={`/blog?tag=${cat.tag}`}
                        className="flex items-center justify-between text-sm text-muted hover:text-text transition-colors py-1.5 border-b border-white/5 last:border-0"
                      >
                        <span>{cat.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent posts */}
              <div className="bg-surface border border-white/8 rounded-sm p-6">
                <h3 className="font-heading text-lg text-text uppercase tracking-[0.08em] mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {posts.slice(0, 4).map(post => (
                    <li key={post.slug}>
                      <a href={`/blog/${post.slug}`} className="group">
                        <p className="text-sm text-text group-hover:text-primary transition-colors leading-snug mb-1">{post.title}</p>
                        <p className="text-xs text-muted">{formatDate(post.date)}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-surface border border-primary/20 rounded-sm p-6 text-center">
                <p className="font-heading text-xl text-text uppercase tracking-[0.08em] mb-2">Ready to Store?</p>
                <p className="text-muted text-sm mb-5">Units from $42/mo. Reserve online in minutes.</p>
                <a
                  href="/facility"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-accent text-background font-bold px-5 py-3 rounded-sm text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform"
                >
                  View Units <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <StorageCTABanner
        heading="Have a Storage Question?"
        subheading="Our team is happy to help — call, email, or stop by any location."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </main>
  );
}
