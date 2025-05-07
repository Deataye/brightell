import React from 'react';

const StepsToSuccessSection = () => {
  const steps = [
    {
      step: 'STEP-01',
      title: 'Research',
      description: 'We analyze your setup and identify growth opportunities.',
    },
    {
      step: 'STEP-02',
      title: 'Discussion',
      description: 'Collaborative sessions to align strategies with objectives.',
    },
    {
      step: 'STEP-03',
      title: 'Implement',
      description: 'Agile deployment of services with minimal downtime.',
    },
    {
      step: 'STEP-04',
      title: 'Result',
      description: 'Optimized performance, security, and measurable results.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 font-text">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold text-[#3b82f6] mb-3 uppercase tracking-wide font-heading">
          Check Our Steps
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug font-heading">
          Simple & Effective <span className="text-[#f97316]">Steps</span> To Success
        </h1>
        <p className="text-[#94a3b8] mb-12 max-w-2xl mx-auto text-base">
          We follow a transparent, result-focused process that keeps you involved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1e293b]/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-[#334155] transform hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <div className="mb-3">
                <span className="bg-[#f97316] text-[#0f172a] text-xs font-bold px-4 py-1 rounded-full font-heading">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-[#cbd5e1] text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition font-heading">
            Get Started
          </button>
          <button className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition font-heading">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsToSuccessSection;
