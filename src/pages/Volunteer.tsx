import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  HandHeart, 
  Heart,
  Users,
  Globe,
  GraduationCap,
  Calendar,
  User,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Volunteer = () => {
  const [isVisible, setIsVisible] = useState({});
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    age: '',
    education: '',
    experience: '',
    duration: '',
    motivation: '',
    skills: '',
    availability: ''
  });

  const handleVolunteerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content for volunteer application
    const emailSubject = `Volunteer Application: ${volunteerData.name}`;
    const emailBody = `
VOLUNTEER APPLICATION

Personal Information:
Name: ${volunteerData.name}
Email: ${volunteerData.email}
Phone: ${volunteerData.phone}
Country: ${volunteerData.country}
Age: ${volunteerData.age}

Education & Experience:
Education Level: ${volunteerData.education}
Teaching/Education Experience: ${volunteerData.experience || 'Not provided'}

Volunteer Details:
Preferred Duration: ${volunteerData.duration}
Skills/Specializations: ${volunteerData.skills || 'Not provided'}
Availability: ${volunteerData.availability}

Motivation:
${volunteerData.motivation}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:christthekingntc@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setVolunteerData({
      name: '',
      email: '',
      phone: '',
      country: '',
      age: '',
      education: '',
      experience: '',
      duration: '',
      motivation: '',
      skills: '',
      availability: ''
    });
  };

  const educationLevels = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD/Doctorate',
    'Professional Certification',
    'Other'
  ];

  const volunteerDurations = [
    '2-4 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible/To be discussed'
  ];

  const availabilityOptions = [
    'Immediately',
    'Within 1 month',
    '2-3 months',
    '6+ months',
    'Specific dates (please specify in motivation)'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    { number: '500+', label: 'Children Impacted', icon: Heart },
    { number: '50+', label: 'Teachers Trained', icon: Users },
    { number: '15+', label: 'Countries Represented', icon: Globe },
    { number: '3', label: 'Years of Impact', icon: Star }
  ];

  const volunteerRoles = [
    {
      icon: BookOpen,
      title: 'Classroom Support',
      description: 'Supporting classroom instruction and lesson planning',
      color: 'from-blue-800 to-blue-900'
    },
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Conducting workshops or training sessions for student-teachers',
      color: 'from-pink-300 to-pink-400'
    },
    {
      icon: Target,
      title: 'Curriculum Development',
      description: 'Assisting in curriculum development or review',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Lightbulb,
      title: 'Creative Activities',
      description: 'Leading extracurricular or creative learning activities',
      color: 'from-pink-200 to-pink-300'
    }
  ];

  const requirements = [
    'Passionate about early childhood education',
    'Fluent in English (spoken and written)',
    'Open to cultural exchange and new environments',
    'Able to commit at least 2–4 weeks (longer stays welcome)',
    'Aged 18 years and above'
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: 'Shape Future Teachers',
      description: 'Help shape a more skilled and confident generation of nursery teachers'
    },
    {
      icon: BookOpen,
      title: 'Educational Impact',
      description: 'Share educational strategies that can influence hundreds of young learners'
    },
    {
      icon: Globe,
      title: 'Cultural Exchange',
      description: 'Experience the joy of cross-cultural service and growth'
    },
    {
      icon: Heart,
      title: 'Lasting Connections',
      description: 'Build lasting connections with students, staff, and the local community'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Volunteer With Us"
        subtitle="Join our mission to empower early childhood education in Uganda and make a lasting impact on future generations"
        backgroundImage="/471118833_1109661280544820_2760270409712801570_n.jpg"
        icon={<HandHeart className="h-10 w-10 text-white" />}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="hero-content">
            <div className={isVisible['hero-content'] ? 'fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center px-4 py-2 bg-pink-300/20 backdrop-blur-sm border border-pink-300/30 rounded-full text-pink-200 text-sm font-medium mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                Make a Difference
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Early Childhood
                <span className="text-pink-300 block">Education Together</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                At Christ the King Nursery Teachers' College in Uganda, we believe that early childhood education 
                lays the foundation for a lifetime of learning. To strengthen our teacher training program and bring 
                global perspectives into our classrooms, we welcome international volunteers—especially from Europe 
                and America—to work alongside our staff and students in transforming the future of nursery education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#application"
                  className="group bg-gradient-to-r from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#impact"
                  className="group glass-effect hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-animate
                id={`stat-${index}`}
              >
                <div className={`glass-effect w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 ${
                  isVisible[`stat-${index}`] ? 'animate-bounce' : ''
                }`}>
                  <stat.icon className="h-8 w-8 text-pink-300" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Need Volunteers */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate id="why-content" className={isVisible['why-content'] ? 'slide-in-left' : 'opacity-0'}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-medium">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
                💡 Why We Need
                <span className="gradient-text block">Volunteers</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our college is committed to raising the standards of nursery teacher training in Uganda.
                By partnering with volunteers from around the world, we aim to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-pink-300 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Introduce innovative teaching methods and practices</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-pink-300 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Enhance our curriculum with international insights</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-pink-300 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Strengthen the English language and communication skills of both trainees and tutors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-pink-300 w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Promote cultural exchange and mutual learning</span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-2xl border border-pink-200">
                <p className="text-lg text-blue-800 font-medium">
                  Your time and skills can have a lasting impact on the quality of early education across communities we serve.
                </p>
              </div>
            </div>
            <div data-animate id="why-image" className={`relative ${isVisible['why-image'] ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="/472578312_1120525676125047_4605457454840032170_n.jpg"
                  alt="Students and volunteers working together"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-pink-300 to-pink-200 text-blue-900 p-6 rounded-2xl shadow-2xl">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">Global</div>
                <div className="text-sm font-medium">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="roles-header">
            <div className={isVisible['roles-header'] ? 'fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center px-4 py-2 bg-pink-100 border border-pink-200 rounded-full text-pink-800 text-sm font-medium mb-4">
                <Users className="mr-2 h-4 w-4" />
                Volunteer Opportunities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                🛠️ Roles and Tasks
                <span className="gradient-text block">for Volunteers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Depending on your background and interest, you may be involved in various meaningful activities
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                className="group"
                data-animate
                id={`role-${index}`}
              >
                <div className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover h-full ${
                  isVisible[`role-${index}`] ? 'fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`bg-gradient-to-br ${role.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-blue-900 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{role.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-animate id="additional-roles" className={isVisible['additional-roles'] ? 'fade-in-up' : 'opacity-0'}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Additional Opportunities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Organizing learning materials and teaching aids</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offering mentorship and career guidance to trainees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Supporting administrative tasks and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Participating in community outreach programs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div data-animate id="volunteer-note" className={isVisible['volunteer-note'] ? 'fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl border border-pink-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">For Everyone</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're an educator, early childhood specialist, student teacher, or simply passionate about education,
                  your contribution is valuable. We believe that diverse backgrounds and perspectives enrich our learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div data-animate id="requirements" className={isVisible['requirements'] ? 'slide-in-left' : 'opacity-0'}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-medium">
                  <Users className="mr-2 h-4 w-4" />
                  Join Our Team
                </span>
              </div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                👥 Who Can Apply?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We invite volunteers from all backgrounds who are:
              </p>
              <div className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-pink-300 to-pink-200 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-blue-900" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <p className="text-blue-800 font-medium">
                  <strong>Note:</strong> Experience in teaching or early childhood education is a plus, but not required.
                  We value passion and commitment above all else.
                </p>
              </div>
            </div>

            {/* Impact */}
            <div data-animate id="impact" className={isVisible['impact'] ? 'slide-in-right' : 'opacity-0'}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-pink-100 border border-pink-200 rounded-full text-pink-800 text-sm font-medium">
                  <Heart className="mr-2 h-4 w-4" />
                  Your Impact
                </span>
              </div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                🌱 What's the Impact?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                As a volunteer, you'll make a meaningful difference:
              </p>
              <div className="space-y-6">
                {impactAreas.map((area, index) => (
                  <div key={index} className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-xl border border-pink-200">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-pink-300 to-pink-200 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <area.icon className="h-6 w-6 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-2">{area.title}</h3>
                        <p className="text-gray-700">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-2xl">
                <p className="text-lg font-medium text-center">
                  Your involvement is more than just help—it's a bridge to meaningful change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate id="form-header">
            <div className={isVisible['form-header'] ? 'fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center px-4 py-2 bg-pink-200 border border-pink-300 rounded-full text-pink-800 text-sm font-medium mb-4">
                <HandHeart className="mr-2 h-4 w-4" />
                Ready to Join Us?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                📬 Volunteer Application
              </h2>
              <p className="text-xl text-gray-600">
                We would love to hear from you! Fill out the form below to start your volunteer journey.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl" data-animate id="application-form">
            <div className={isVisible['application-form'] ? 'fade-in-up' : 'opacity-0'}>
              <form onSubmit={handleVolunteerSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={volunteerData.name}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={volunteerData.email}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={volunteerData.phone}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Globe className="inline h-4 w-4 mr-1" />
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={volunteerData.country}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="Your country of residence"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={volunteerData.age}
                        onChange={handleVolunteerInputChange}
                        required
                        min="18"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="Your age"
                      />
                    </div>
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education & Experience
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Education Level *
                      </label>
                      <select
                        name="education"
                        value={volunteerData.education}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select your education level</option>
                        {educationLevels.map((level, index) => (
                          <option key={index} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teaching/Education Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={volunteerData.experience}
                        onChange={handleVolunteerInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                        placeholder="e.g., 2 years teaching kindergarten"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills & Specializations
                    </label>
                    <textarea
                      name="skills"
                      value={volunteerData.skills}
                      onChange={handleVolunteerInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., Early childhood development, English language teaching, Arts and crafts, Music, etc."
                    ></textarea>
                  </div>
                </div>

                {/* Volunteer Details */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Volunteer Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Duration *
                      </label>
                      <select
                        name="duration"
                        value={volunteerData.duration}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select duration</option>
                        {volunteerDurations.map((duration, index) => (
                          <option key={index} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability *
                      </label>
                      <select
                        name="availability"
                        value={volunteerData.availability}
                        onChange={handleVolunteerInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select availability</option>
                        {availabilityOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Motivation & Goals
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to volunteer with us? What do you hope to achieve? *
                    </label>
                    <textarea
                      name="motivation"
                      value={volunteerData.motivation}
                      onChange={handleVolunteerInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your motivation to volunteer, what you hope to contribute, and what you hope to learn from this experience..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-300 to-pink-200 hover:from-pink-200 hover:to-pink-100 text-blue-900 py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Submit Volunteer Application
                </button>

                <div className="bg-blue-100 p-6 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> After submitting this application, we will review your information and contact you within 1-2 weeks.
                    We may schedule a video interview to discuss your application further.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animate id="contact-info" className={isVisible['contact-info'] ? 'fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl mb-8 opacity-90">
              Have questions about volunteering? We're here to help!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-effect p-6 rounded-2xl">
                <Mail className="h-8 w-8 text-pink-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">christthekingntc@gmail.com</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <Phone className="h-8 w-8 text-pink-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call/WhatsApp</h3>
                <p className="text-blue-100">+256 772037994</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <Globe className="h-8 w-8 text-pink-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-blue-100">Lira City, Northern Uganda</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block">
              <p className="text-xl font-medium text-pink-200 mb-2">
                Let's work together to build a brighter future—one teacher at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
