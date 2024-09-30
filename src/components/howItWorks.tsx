import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaUserPlus, FaPen, FaCloud, FaTrash, FaEdit } from 'react-icons/fa';
import howImage from '..//assets/image.png'; // Replace with the actual image path


type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const steps: Props[] = [
  {
    icon: FaUserPlus,
    title: 'Create an Account',
    description: 'Sign up to start creating your personal diary.',
  },
  {
    icon: FaPen,
    title: 'Add Your Notes',
    description: 'Write down your thoughts or important moments anytime.',
  },
  {
    icon: FaEdit,
    title: 'Edit Notes',
    description: 'Make changes to your entries as you reflect on them.',
  },
  {
    icon: FaTrash,
    title: 'Delete Notes',
    description: 'Easily remove notes you no longer need.',
  },
  {
    icon: FaCloud,
    title: 'Access Anywhere',
    description: 'Log in from any device to manage your diary securely.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
      
      <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
        <h2 className="text-3xl font-semibold text-teal">
          Simplify Your Thoughts with MyDiary
        </h2>
        <p className="text-popover">
          A safe, easy, and convenient way to capture your daily thoughts and important moments. Just add, edit, or delete your notes whenever you need.
        </p>
        <div className="transform rotate-6">
          <Image
            src={howImage}
            alt="Write Your Story"
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
           <div className="h-10 w-10  flex items-center justify-center">
              <step.icon className="h-6 w-6 items-center text-teal rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{`Step ${index + 1}: ${step.title}`}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

