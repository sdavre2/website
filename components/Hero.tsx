import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Oracle & Cloud Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Intelligent Cloud <br className="hidden lg:block"/>
              <span className="text-blue-600">Solutions for Growth</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help ambitious companies scale with expert Public Cloud Migration, 
              Oracle E-Business Suite support, and comprehensive Database Management (MSSQL, MySQL, PostgreSQL).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
               <div className="flex items-center gap-2">
                 <Cloud className="h-5 w-5" />
                 <span className="text-sm font-medium">Multi-Cloud</span>
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5" />
                 <span className="text-sm font-medium">SOC2 Certified</span>
               </div>
               <div className="flex items-center gap-2">
                 <Zap className="h-5 w-5" />
                 <span className="text-sm font-medium">99.9% Uptime</span>
               </div>
            </div>
          </motion.div>

          {/* Image/Graphic Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Cloud Dashboard Analysis" 
                 className="rounded-xl w-full h-auto object-cover"
               />
               
               {/* Floating Stats Card */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[200px]"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-green-100 rounded-lg">
                     <Zap className="h-5 w-5 text-green-600" />
                   </div>
                   <span className="text-sm font-bold text-slate-800">Efficiency</span>
                 </div>
                 <div className="text-2xl font-bold text-slate-900">+145%</div>
                 <p className="text-xs text-slate-500 mt-1">Optimization increase</p>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;