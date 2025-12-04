import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to transform your business? Our team of experts is ready to help you architect the perfect solution.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@cloudsmartservice.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-200">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">100 Innovation Dr,<br/>Tech Valley, CA 94043</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                {status === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;