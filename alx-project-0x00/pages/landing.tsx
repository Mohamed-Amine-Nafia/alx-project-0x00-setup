import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <Card />
      <Card />
      <Card />

      <div className="mt-6 flex flex-col gap-3">
        <Button title="Small Button" style="text-sm rounded-sm" />
        <Button title="Medium Button" style="text-base rounded-md" />
        <Button title="Large Button" style="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
