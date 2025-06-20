import React, { useState } from 'react';
import { motion } from 'framer-motion';
import linkedin from '../assets/images/contactLinkedIn.svg';
import Fb from '../assets/images/contactfb.svg';
import insta from '../assets/images/contactInsta.svg';
import twitter from '../assets/images/contactTwitter.svg';
import Swal from 'sweetalert2';

const Form = ({
  headerTag = "Contact Us",
  headerTitle = "Let's Connect and Ignite Your Success",
  headerDescription = "Let's connect and ignite your business success in Detroit! Reach out to Skyrocket Business and learn how our expert web design, marketing, and growth solutions can take your business to the next level.",
  email = "Sales@skyrocketbusiness.io",
  phone = "+1 (616) 274-3853",
  showContactInfo = true,
  nameLabel = "Full Name",
  emailLabel = "Email Address",
  companyLabel = "Company Name",
  servicesLabel = "Services",
  servicesPlaceholder = "Choose One",
  budgetLabel = "Budget",
  messageLabel = "Your Message",
  submitButtonText = "Submit",
  serviceOptions = [
    "Website Design & Development",
    "Social Media Marketing",
    "Content Marketing",
    "SEO (Search Engine Optimization)",
    "Pay Per Click"
  ]
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    services: '',
    budget: '',
    message: ''
  });

  return (
    <div className="md:min-h-[40vh] py-10 mt-10 bg-white mx-auto px-6 sm:px-10 lg:px-20">
      <div className="max-w-[80rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column with animation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <div className="inline-block bg-secondary text-textColor px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                {headerTag}
              </div>
              <h2 className="text-4xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight max-w-4xl">
                {headerTitle}
              </h2>
              <p className="text-secondaryTextColor text-lg leading-relaxed">
                {headerDescription}
              </p>
            </div>

            {showContactInfo && (
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-textColor mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-secondaryTextColor hover:text-primary transition-colors">
                    {email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-textColor mb-1">Phone</h3>
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-secondaryTextColor hover:text-hoverColor transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="col-span-2">
                  <h3 className="font-semibold text-textColor mb-3">Follow us!</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={twitter} alt="X" className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={insta} alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={Fb} alt="Facebook" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column (Form) with animation */}
          <motion.div
            className="lg:pl-8 pb-0 sm:pb-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-secondaryTextColor mb-2">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="abc@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    placeholder="ABC Corp."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="services" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {servicesLabel}
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  >
                    <option value="">{servicesPlaceholder}</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {budgetLabel}
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    placeholder="$500-$5,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-secondaryTextColor mb-2">
                  {messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Write Your Message..."
                  rows={5}
                  maxLength={5000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-hoverColor text-textColor text-lg font-medium py-3 px-6 rounded-full transition-colors duration-200"
              >
                {submitButtonText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Form;
