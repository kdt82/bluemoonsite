'use client';

import SupportModal from '../components/SupportModal';
import Link from 'next/link';
import { articlesData } from './articleData';

export default function ArticlesPage() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('openModal'));
  };

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-[var(--primary)] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                IT Security & Technology Articles
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Stay informed about the latest cybersecurity threats, technology trends, and IT best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    {article.image ? (
                      <div 
                        className={`w-full h-48 bg-no-repeat ${
                          article.image.includes('databreach.jpg') 
                            ? 'bg-contain bg-center' 
                            : 'bg-cover bg-center'
                        }`}
                        style={{ 
                          backgroundImage: `url('${article.image}')`,
                          backgroundColor: article.image.includes('databreach.jpg') ? '#010713' : undefined
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-[var(--accent)] text-white text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[var(--primary)] mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      
                      <Link 
                        href={`/articles/${article.id}`}
                        className="text-[var(--accent)] hover:text-[var(--primary)] font-medium transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Empty state when no articles */}
            {articlesData.length === 0 && (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles yet</h3>
                <p className="text-gray-600">Check back soon for the latest IT security and technology insights.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--primary)]">
                  Need IT Security Assistance?
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                  Our cybersecurity experts can help protect your digital life and business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/services/cybersecurity"
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Cybersecurity Services
                </Link>
                <button 
                  onClick={openModal}
                  className="accent-gradient text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Expert Help
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SupportModal />
    </>
  );
} 