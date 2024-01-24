import React from 'react';


const ContactForm = () => {
  return (
    
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-600">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded p-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
   
  );
};
export default ContactForm;









