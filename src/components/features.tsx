import React from 'react';
import { FaLock, FaEdit, FaTrashAlt, FaCloud } from 'react-icons/fa';
import { Lilita_One } from 'next/font/google';

const lilita = Lilita_One({ weight: "400", subsets: ['latin'] });

const features = [
  {
    icon: FaLock,
    title: 'Secure and Private Entries',
    description: 'Your personal entries  stored securely and retrieved as easily..',
  },
  {
    icon: FaEdit,
    title: 'Update your notes',
    description: 'Easily edit or update your notes, save and thats all!!',
  },
  {
    icon: FaTrashAlt,
    title: 'Delete Notes Anytime',
    description: 'Remove entries whenever you like with just a click.',
  },
  {
    icon: FaCloud,
    title: 'Access Anywhere',
    description: 'Log in from any device and write!!!!!',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className={`text-4xl font-bold mb-4 text-popover flex items-center justify-center ${lilita.className}`}>
        Features of MyDiary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 mt-4">
            <div className="h-10 w-10 bg-popover flex items-center justify-center rounded-full">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg text-popover font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-3 pl-4">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
