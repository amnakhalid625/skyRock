import React from 'react';
import { Link } from 'react-router-dom';
import navArrow from '../assets/images/NavArrow.svg';
import BlogCards from '../components/BlogCard';
import Articles from '../components/Articles';
import BlogCategoryFilter from '../components/ButtonLine';
import Contact from '../components/Contact';


import blog1 from '../assets/images/seoTwo.jpg';
import blog2 from '../assets/images/seoThree.jpg';
import blog3 from '../assets/images/seo.png';
import blog4 from '../assets/images/seoFour.jpg';

const BlogsDetail = () => {
  const customArticlesData = [
    {
      id: 1,
      title: "Top 10 Digital Marketing Trends for Detroit Businesses in 2025",
      category: "Digital Marketing",
      date: "June 3, 2025",
      excerpt: "Stay ahead of the competition with these cutting-edge digital marketing strategies specifically designed for Detroit businesses. Learn what's working now.",
      image: blog1,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility"
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Local SEO in Detroit",
      category: "SEO",
      date: "June 1, 2025",
      excerpt: "Master local SEO techniques to dominate Detroit search results. Practical tips to get your business found by local customers searching online.",
      image: blog2,
      link: "/blog/seo-best-practices-optimizing-for-search-engines-in-2024"
    },
    {
      id: 3,
      title: "E-commerce Website Development: Complete Guide for Detroit Retailers",
      category: "E-commerce",
      date: "May 30, 2025",
      excerpt: "Transform your Detroit retail business with a powerful e-commerce website. Learn the essential features and strategies for online success.",
      image: blog3,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility-lf8a2"
    },
    {
      id: 4,
      title: "Social Media Marketing Strategies That Work for Detroit Businesses",
      category: "Social Media",
      date: "May 28, 2025",
      excerpt: "Boost your Detroit business with proven social media marketing strategies. Connect with your local community and grow your brand online.",
      image: blog4,
      link: "/blog/why-every-detroit-business-needs-a-mobile-friendly-website-in-2025"
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center opacity-100 mb-16">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider mb-4 transform transition-all duration-300 hover:scale-105">
                skyrocket business blog
              </div>

              <div className="max-w-6xl mx-auto mb-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0a0d14] leading-wider tracking-tight transition-all duration-300 hover:text-opacity-90">
                  Stay Ahead with Expert Web Design, Marketing Insights & Strategies for Detroit Businesses
                </h1>
              </div>

              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-base font-medium md:text-lg text-secondaryTextColor leading-relaxed  transition-all duration-300 hover:text-opacity-90">
                  Welcome to the Skyrocket Business Blog, where we share the latest web design, marketing trends, tips, and strategies tailored for businesses in Detroit. From SEO and social media management to content creation and web development, our blog provides valuable insights to help your business grow and succeed online.Stay informed, get inspired, and elevate your digital presence with our expert advice.
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link
                  to="/contact-us"
                  className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-tetxtColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium min-w-[160px] justify-center"
                onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
               >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get in Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="navigation arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>
                <Link
                  to="/services"
                  className="border border-primary hover:border-bluehover text-primary hover:text-bluehover  font-medium py-3 px-6 rounded-full transition-all duration-300 min-w-[160px] text-center"
                      onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                  View Services
                </Link>
              </div>
            </div>

            {/* Blog Content Section */}
            <div className="space-y-12">
              <div className="mb-12">
                <BlogCards />
              </div>
              <div className="mb-12">
                <BlogCategoryFilter />
              </div>
              <div>
                <Articles blogPosts={customArticlesData} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 md:padding-global pb-5 sm:pb-5 md:pb-5 lg:pb-10">
          <div className="mx-auto max-w-7xl">
            <Contact
              headingText="Unleash Your Brand's Potential with Skyrocket!"
              secondButtonText="View Services"
            />
          </div>
        </section>

      </section>
    </>
  );
};

export default BlogsDetail;
