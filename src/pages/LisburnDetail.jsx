import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import HomeCleanerImg from '../assets/images/homeCleaner.png';
import CaseStudyCards from '../components/CaseStudyCards';
import project1 from '../assets/images/project3.png';
import project2 from '../assets/images/project1.png';
import Contact from '../components/Contact';

const ProjectDetail = ({
  heroImage,
  heroImageSrcSet,
  title,
  description,
  client,
  website,
  services,
  timeline,
  altText = "Project Image",
}) => {
  const caseStudies = [
    {
      id: 1,
      image: project1,
      alt: 'Nutrivita Shop',
      tag: 'Web Design & Digital Marketing',
      title: 'Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store',
      description:
        "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
      link: '/case-study/nutrivita-shop-boosting-e-commerce-sales-with-a-streamlined-online-store',
    },
    {
      id: 2,
      image: project2,
      alt: 'LeHost Hair & Wig Shop',
      tag: 'Website Design & Marketing',
      title: 'LeHost Hair & Wig Shop: Boosting Online Presence and Sales',
      description:
        "We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic increase, 120% boost in social media engagement, and a 30% rise in online sales.",
      link: '/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales',
    },
  ];

  const overviewdefaultData = {
    resultsData: [
      { value: "100%", label: "Increase in Click-Through Rates" },
      { value: "40%", label: "More Leads" },
      { value: "55%", label: "More Leads" },
      { value: "45%", label: "Increase in Return on Ad Spend" }
    ],
    title: "Overview",
    description: "Lisburn Web Design needed a professional, modern website to showcase their web development services and attract more local clients. Skyrocket Business created their website from scratch, providing a seamless, user-friendly experience that highlights their skills and offerings while driving local business leads.",
    challenges: {
      title: "The Challenge",
      items: [
        {
          title: "No Existing Online Presence",
          description: "Lisburn Web Design had no website to effectively showcase their services."
        },
        {
          title: "Limited Brand Visibility",
          description: "As a local service provider, they were struggling to gain visibility in a competitive market."
        },
        {
          title: "No Lead Generation Tools",
          description: "Without a functional website, they lacked the tools to convert visitors into potential clients."
        }
      ]
    },
    solutions: {
      title: "The Solution",
      items: [
        {
          title: "Custom Website Creation",
          description: "We built a fully custom, professional, and visually engaging website from the ground up that reflects their expertise and services."
        },
        {
          title: "SEO Optimization",
          description: "Implemented local SEO strategies to help them rank higher in Lisburn and nearby areas, boosting visibility."
        },
        {
          title: "Lead Generation Features",
          description: "We incorporated easy-to-use contact forms and strong calls-to-action to convert visitors into clients."
        },
        {
          title: "Mobile Optimization",
          description: "Ensured the website is responsive and provides a seamless experience on all devices."
        }
      ]
    },
    results: {
      title: "Results",
      items: [
        { label: "60% increase in website traffic, with a significant rise in local search visibility." },
        { label: "40% more leads coming through the website, resulting in new business opportunities." },
        { label: "Stronger brand identity, improving their reputation and attracting more clients from Lisburn and surrounding areas." }
      ]
    }
  };

  return (
    <>
      <div className="w-full max-w-[83rem] mx-auto px-4 sm:px-8 py-12 sm:py-20 mt-4">
        {/* Hero Image */}
        <div className="mb-12 sm:mb-16">
          <img
            src={heroImage}
            alt={altText}
            loading="eager"
            sizes="100vw"
            srcSet={heroImageSrcSet}
            className="w-full h-auto md:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 mb-16 items-end">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight mb-4">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-lg sm:text-xl leading-relaxed text-secondaryTextColor font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#eaeaea] my-16" />

        {/* Meta Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Client</div>
            <p className="font-light text-textColor text-lg">{client}</p>
          </div>

          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Website</div>
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light underline text-textColor text-lg hover:text-primary transition-colors"
              >
                {website.replace(/^https?:\/\//, '')}
              </a>
            ) : (
              <p className="font-light text-textColor text-lg">N/A</p>
            )}
          </div>

          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Services</div>
            <p className="font-light text-textColor text-lg">{services}</p>
          </div>

          <div className="sm:text-right">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Project Timeline</div>
            <p className="font-light text-textColor text-lg">{timeline}</p>
          </div>
        </div>

        {/* Project Overview Section */}
        <div className="mb-20">
          <ProjectOverview data={overviewdefaultData} />
        </div>

        {/* Case Study Suggestions */}
        <div className="mb-20">
          <CaseStudyCards caseStudies={caseStudies} />
        </div>
      </div>

      {/* Contact CTA */}
      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />
    </>
  );
};

const LisburnDetail = () => {
  const projectData = {
    heroImage: HomeCleanerImg,
    heroImageSrcSet:
      "500w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680ba357e7e37e1f963d3df9_Untitled_LE_upscale_balanced_x4%20(2)-p-1600.jpg 2560w",
    title: "Lisburn Web Design: Crafting a Strong Online Presence for Local Businesses",
    description:
      "Skyrocket Business built Lisburn Web Design’s website from scratch, optimized for local SEO and lead generation, resulting in a 60% increase in traffic and a 40% boost in client inquiries.",
    client: "Kevin",
    website: "http://lisburnwebdesign.uk",
    services: "Web Design & SEO",
    timeline: "2025",
    altText: "Lisburn Web Design: Crafting a Strong Online Presence for Local Businesses"
  };

  return <ProjectDetail {...projectData} />;
};

export default LisburnDetail;
export { ProjectDetail };
