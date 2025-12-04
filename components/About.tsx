import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20"></div>
             <img 
               src="https://picsum.photos/800/800" 
               alt="Team collaborating" 
               className="relative rounded-3xl shadow-2xl w-full h-auto border border-slate-700"
             />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Businesses Since 2015
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Cloud Smart Service was founded on a simple premise: Cloud technology shouldn't be complicated. 
              We bridge the gap between complex infrastructure and business goals, enabling you to focus on what you do best.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'AWS, Azure, GCP & Oracle Certified Partners',
                'Expert Oracle EBS & Database Support',
                '24/7 Managed Services for MSSQL/PostgreSQL',
                'Over 500+ Successful Cloud Migrations'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-500">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-500">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-500">Active Support</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;