/*
 Create by: Nguyen Le Thai Duong
*/
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { fetchData } from '../hooks/settingData';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link?: string;
};

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchData('blogs');
        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-gray-500 dark:text-gray-400">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
              transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover md:h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href={post.link || '#'}
                  target={post.link ? '_blank' : '_self'} 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 
                    hover:text-blue-700 dark:hover:text-blue-300 font-medium
                    transform hover:translate-x-2 transition-all duration-300 ease-in-out"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
