import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesPattern from '../assets/images/bg.svg';
import servicesPattern2 from '../assets/images/backImg.svg';
import navArrow from '../assets/images/NavArrow.svg';
import tickImage from '../assets/images/tick.svg';

const ServicesCard = () => {
  const MotionLink = motion.div; 
  const navigate = useNavigate();

  const services = [
    {
      id: '01',
      title: 'Web Design & Development',
      to: '/services/detroit-website-design-and-development',
      description:
        "Your website is your 24/7 salesperson — let’s make it unforgettable. We craft clean, fast, and mobile-friendly websites that not only look stunning but are built to convert. Whether you're booking more calls, selling products, or building trust — we design with your goals in mind.",
      features: ['Custom-Built for Your Brand', 'Conversion-Focused Design', 'Mobile-Optimized Website'],
      graphic: 'sc-g1.svg',
      graphicPosition: 'bottom-0 right-0',
    },
    {
      id: '02',
      title: 'Social Media Management',
      to: '/services/social-media-management',
      description:
        "Your social media is your brand’s voice — let’s make it unforgettable. We create engaging, shareable content that not only stands out but builds real connections with your audience. Whether you’re growing your community, driving traffic, or increasing sales, we develop strategies that turn followers into loyal customers.",
      features: ['Increased brand awareness', 'Higher engagement rates', 'Data-driven optimization'],
      graphic: 'sc-g2.svg',
      graphicPosition: 'top-0 left-0',
    },
    {
      id: '03',
      title: 'Content Creation & Marketing',
      to: '/services/content-creation-marketing',
      description:
        "Content is more than just words — it’s the story of your brand. We create compelling, share-worthy content that resonates with your audience and drives action. Whether it's blog posts, videos, or social media updates, our marketing strategies ensure your content reaches the right people, builds trust, and generates real results.",
      features: ['Compelling Content', 'Storytelling for Growth', 'Content That Converts'],
      graphic: 'sc-g3.svg',
      graphicPosition: 'top-0 right-0',
    },
    {
      id: '04',
      title: 'Search Engine Optimization (SEO)',
      to: '/services/search-engine-optimization',
      description:
        "SEO isn’t just about ranking higher — it’s about getting the right eyes on your business. We focus on creating SEO strategies that drive organic traffic, improve your search rankings, and boost your visibility. From on-page optimization to link building, we ensure your website is found by the people who matter most — your potential customers.",
      features: ['Boost Your Rankings', 'Drive Organic Traffic', 'Visibility That Converts'],
      graphic: 'sc-g1.svg',
      graphicPosition: 'bottom-0 right-0',
    },
    {
      id: '05',
      title: 'Pay-Per-Click Advertising (PPC)',
      to: '/services/pay-per-click-advertising',
      description:
        "PPC is your shortcut to immediate traffic and leads. We craft high-converting ad campaigns that target the right audience at the right time. Whether you’re looking to drive sales, generate leads, or build brand awareness, our strategies ensure every click counts, delivering measurable results that grow your business.",
      features: ['Results Driven Ads', 'Maximize Ad Spend', 'Targeted Traffic'],
      graphic: 'sc-g2.svg',
      graphicPosition: 'top-0 left-0',
    },
    {
      id: '06',
      title: 'Email Marketing',
      to: '/services/email-marketing',
      description:
        "Email is one of the most powerful ways to connect directly with your audience. We design tailored email campaigns that not only get opened but drive action. Whether you’re nurturing leads, promoting offers, or building long-term relationships, we create emails that convert and keep your brand top of mind.",
      features: ['Email That Converts', 'Targeted Campaigns', 'Nurture and Engage'],
      graphic: 'sc-g1.svg',
      graphicPosition: 'bottom-0 left-0',
    },
  ];

  return (
    <div className="bg-primary px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <img src={servicesPattern} alt="servicesPattern" className="absolute top-0 right-0 z-0 w-full sm:w-1/2 md:w-1/3" />

      <div className="relative z-10 max-w-[1270px] mx-auto pt-8 sm:pt-12 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service) => (
            <MotionLink
              key={service.id}
              className={`
                group
                bg-white 
                rounded-3xl 
                p-6 sm:p-8 md:p-10 lg:p-12 
                shadow-sm
                transition-colors duration-300 ease-in-out
                hover:bg-secondary
                relative 
                overflow-hidden 
                flex flex-col gap-6 sm:gap-8
                w-full
                cursor-pointer
              `}
              style={{ minHeight: '400px', maxWidth: '100%' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate(service.to);
              }}
            >
              <div className="font-medium text-accent text-sm sm:text-base">{service.id}</div>
              <h3 className="text-2xl sm:text-3xl font-medium text-textColor leading-tight">
                {service.title}
              </h3>
              <p className="text-secondaryTextColor text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <img src={tickImage} alt="tick" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-textColor">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div
                  className="
                    flex items-center space-x-2 
                    bg-secondary 
                    text-textColor 
                    px-4 sm:px-6 py-2 sm:py-3 
                    rounded-full 
                    transition-colors duration-300 ease-in-out 
                    font-medium justify-center w-fit
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Learn More
                  </span>
                  <img
                    src={navArrow}
                    alt="navigation arrow"
                    className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:invert"
                  />
                </div>
              </div>

              <img
                src={`https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834${
                  service.graphic === 'sc-g1.svg'
                    ? 'c2a'
                    : service.graphic === 'sc-g2.svg'
                    ? 'be2'
                    : 'c09'
                }_${service.graphic}`}
                alt=""
                className={`absolute ${service.graphicPosition} w-40 sm:w-48 md:w-56 lg:w-64 object-contain hidden sm:block`}
              />
            </MotionLink>
          ))}
        </div>
      </div>

      <img src={servicesPattern2} alt="servicesPattern2" className="absolute bottom-0 left-0 z-0 w-full sm:w-1/2 md:w-1/3" />
    </div>
  );
};

export default ServicesCard;