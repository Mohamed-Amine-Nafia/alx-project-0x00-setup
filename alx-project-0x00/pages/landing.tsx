import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Render Card component multiple times */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
