import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Brain, Cloud, Code, Database, Layers, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Oracle E-Business Suite',
    description: 'End-to-end lifecycle management for Oracle EBS. We ensure your ERP runs at peak performance.',
    iconName: 'Layers',
    features: [
      'Implementation & Upgrades (12.x)',
      'Cloud Lift-and-Shift (OCI/AWS)',
      'Performance Tuning & Patching',
      'Custom Development (PL/SQL)'
    ]
  },
  {
    id: '2',
    title: 'Database Management',
    description: '24/7 expert administration for mission-critical databases. We handle availability, backups, and security.',
    iconName: 'Database',
    features: [
      'MSSQL High Availability (AlwaysOn)',
      'PostgreSQL Optimization',
      'MySQL / MariaDB Clustering',
      'Oracle Database RAC & Data Guard'
    ]
  },
  {
    id: '3',
    title: 'Public Cloud Migration',
    description: 'Seamlessly move legacy workloads to modern cloud infrastructure with zero business disruption.',
    iconName: 'Cloud',
    features: [
      'AWS, Azure & GCP Migrations',
      'Legacy App Re-platforming',
      'Cost Optimization Strategies',
      'Hybrid Cloud Architecture'
    ]
  },
  {
    id: '4',
    title: 'Cyber Security & Compliance',
    description: 'Enterprise-grade protection for your infrastructure with proactive threat detection and compliance.',
    iconName: 'Shield',
    features: [
      'SOC2 & GDPR Compliance',
      'Vulnerability Assessments',
      'Identity Access Management',
      '24/7 Security Monitoring'
    ]
  },
  {
    id: '5',
    title: 'DevOps & Automation',
    description: 'Accelerate your release cycles with modern CI/CD pipelines and infrastructure as code.',
    iconName: 'Code',
    features: [
      'Kubernetes & Docker',
      'Terraform / Ansible IaC',
      'Automated CI/CD Pipelines',
      'Site Reliability Engineering'
    ]
  },
  {
    id: '6',
    title: 'AI & Data Analytics',
    description: 'Transform raw data into actionable insights using advanced AI models and predictive analytics.',
    iconName: 'Brain',
    features: [
      'LLM Integration (Gemini/GPT)',
      'Predictive Business Analytics',
      'Data Warehouse Modernization',
      'Automated Reporting Agents'
    ]
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Server, Shield, Brain, Cloud, Code, Database, Layers
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Cloud Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From Oracle EBS to Multi-Cloud Databases, we provide the technical excellence your business demands.
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
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                {service.features && (
                  <ul className="space-y-2 mt-auto pt-4 border-t border-slate-200/60">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-slate-700">
                        <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;