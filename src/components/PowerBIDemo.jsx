import React from 'react';

const PowerBIDemo = () => {
  return (
    <div className="py-16" style={{ backgroundColor: '#F8FCFF' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 font-display">
              Power BI Demo
            </h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed font-sans">
              Discover the transformative power of data visualization with our Power BI demo. This comprehensive tool empowers organizations to convert complex data into interactive dashboards and reports, enabling smarter, real-time decision-making.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-3 text-gray-700 font-medium">Dynamic dashboards to track performance and KPIs</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-3 text-gray-700 font-medium">Interactive visualizations for uncovering trends and patterns</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-3 text-gray-700 font-medium">Real-time insights for enhanced decision-making</p>
              </div>
            </div>

            <div className="text-sm text-gray-500 font-sans">
              <p>Comin/6</p>
              <p className="font-semibold text-gray-700 uppercase">Human Resources</p>
              <p className="text-blue-600 font-bold">Microsoft Power BI</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img 
              src="/assets/f58c1363-769e-42a8-8efe-792a1a61fc53.jpg"
              alt="Power BI Dashboard Example"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerBIDemo;
