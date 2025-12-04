import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Brain, Cloud, Code, Database, Layers } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Public Cloud Migration',
    description: 'Seamlessly migrate Oracle, MSSQL, and legacy workloads to AWS, Azure, or GCP with zero data loss.',
    iconName: 'Cloud'
  },
  {
    id: '2',
    title: 'Oracle & ERP Solutions',
    description: 'Specialized support for Oracle E-Business Suite (EBS), upgrades, patching, and cloud lift-and-shift.',
    iconName: 'Layers'
  },
  {
    id: '3',
    title: 'Database Management',
    description: '24/7 managed services for MSSQL, MySQL, PostgreSQL, and Oracle databases.',
    iconName: 'Database'
  },
  {
    id: '4',
    title: 'Cyber Security',
    description: 'Enterprise-grade security protocols, threat detection, and compliance management.',
    iconName: 'Shield'
  },
  {
    id: '5',
    title: 'DevOps & CI/CD',
    description: 'Accelerate deployment cycles with automated pipelines and container orchestration.',
    iconName: 'Code'
  },
  {
    id: '6',
    title: 'AI Integration',
    description: 'Leverage LLMs and predictive analytics to automate workflows and gain data-driven insights.',
    iconName: 'Brain'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Server, Shield, Brain, Cloud, Code, Database, Layers
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Cloud Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From Oracle EBS support to public cloud migration, we provide the building blocks for your digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.iconName] || Server;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;