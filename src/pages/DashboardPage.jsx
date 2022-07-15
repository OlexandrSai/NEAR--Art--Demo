import React from 'react';
import { Footer } from '../components/Footer';
import { Dashboard } from '../components/Dashboard';
import { ChangeContract } from '../components/ChangeContract';

export const DashboardPage = () => {
  return (
    <div className="bg-gray-300">
      <ChangeContract />
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};
