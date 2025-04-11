
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Index = () => {
  // State for the image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1920&auto=format&fit=crop",
      alt: "Advanced technology solutions",
    },
    {
      url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=1920&auto=format&fit=crop",
      alt: "Drone services",
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
      alt: "Electrical automation solutions",
    }
  ];

  // State for modal handling
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Service data
  const services = [
    {
      id: "robotics",
      title: "Robotics Solutions",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
      description: "Advanced robotic systems for industrial automation. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">Advanced Robotics Solutions</h3>
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format&fit=crop" 
            alt="Advanced Robotics Solutions" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            At Shiva Solutions, we specialize in designing, implementing, and maintaining cutting-edge robotics solutions tailored to meet the specific needs of various industries. Our team of expert engineers has extensive experience in developing robotic systems that significantly enhance operational efficiency, improve safety standards, and reduce operational costs.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Key Applications</h4>
          <p className="mb-4">
            Our robotics solutions are particularly valuable for organizations like ONGC Vadodara, where they are employed in hazardous environments for inspection and maintenance tasks. For L&T, our robotic systems streamline manufacturing processes, enhancing precision and productivity. At Mundra Port, our solutions facilitate efficient cargo handling and warehouse management.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Technologies Involved</h4>
          <p className="mb-4">
            We utilize the latest advancements in robotics technology, including collaborative robots (cobots), autonomous mobile robots (AMRs), and industrial robotic arms. Our systems are equipped with advanced sensors, computer vision capabilities, and AI-driven decision-making algorithms to ensure optimal performance in diverse operational contexts.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Benefits</h4>
          <p className="mb-4">
            By implementing our robotics solutions, clients experience numerous benefits, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Enhanced operational efficiency and productivity</li>
            <li>Improved workplace safety through automation of hazardous tasks</li>
            <li>Reduced operational costs and labor expenses</li>
            <li>Increased precision and consistency in manufacturing processes</li>
            <li>Flexible and scalable systems that can adapt to changing requirements</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Our Approach</h4>
          <p className="mb-4">
            We follow a comprehensive approach to implementing robotics solutions, beginning with a thorough analysis of client requirements and operational environments. Our team designs custom solutions, develops prototypes for testing, and finally deploys fully-optimized systems with ongoing support and maintenance services.
          </p>
          
          <p className="mb-4">
            For organizations seeking to modernize their operations and gain competitive advantages through automation, our robotics solutions provide the perfect blend of cutting-edge technology and practical applicability.
          </p>
          
          <p>
            Contact us today to discuss how our robotics solutions can transform your operational capabilities and drive sustainable growth for your organization.
          </p>
        </>
      )
    },
    {
      id: "drones",
      title: "Drone Services",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
      description: "Aerial inspection and monitoring solutions. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">Professional Drone Services</h3>
          <img 
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=500&auto=format&fit=crop" 
            alt="Professional Drone Services" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            Shiva Solutions offers comprehensive drone services designed to provide valuable aerial perspectives and data collection capabilities for various industrial applications. Our fleet of advanced drones, operated by certified pilots, delivers high-quality imagery, video footage, and sensor data to support critical decision-making processes.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Key Applications</h4>
          <p className="mb-4">
            Our drone services are extensively utilized by clients like ONGC Vadodara for pipeline inspection and oil field monitoring, offering safe alternatives to manual inspection in challenging environments. For L&T's construction projects, our drones provide progress monitoring, site mapping, and volumetric analysis. At Mundra Port, they facilitate infrastructure inspection and security surveillance.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Technologies Employed</h4>
          <p className="mb-4">
            We deploy a diverse range of drone technologies, including multi-rotor UAVs, fixed-wing drones for extended flight times, and specialized units equipped with thermal cameras, LiDAR sensors, and multispectral imaging systems. Our drones are enhanced with advanced stabilization systems, obstacle avoidance capabilities, and automated flight planning software.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Benefits</h4>
          <p className="mb-4">
            Clients who leverage our drone services experience numerous advantages:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Enhanced safety by eliminating the need for human exposure to hazardous environments</li>
            <li>Cost reduction compared to traditional inspection methods</li>
            <li>Rapid data collection across large areas and inaccessible locations</li>
            <li>High-resolution imagery and precise measurements</li>
            <li>Regular monitoring capabilities enabling preventive maintenance</li>
            <li>Environmental impact assessment and compliance verification</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Our Methodology</h4>
          <p className="mb-4">
            Our drone service methodology encompasses mission planning, risk assessment, flight operations conducted by certified pilots, data processing using advanced software solutions, and comprehensive reporting with actionable insights. We maintain strict compliance with aviation regulations and safety protocols throughout all operations.
          </p>
          
          <p className="mb-4">
            For Gujarat government agencies, our drone services support urban planning, disaster management, and environmental monitoring, providing critical data for informed decision-making and resource allocation.
          </p>
          
          <p>
            Partner with Shiva Solutions to access cutting-edge drone technologies and expert services that can transform your monitoring, inspection, and data collection capabilities across various industrial applications.
          </p>
        </>
      )
    },
    {
      id: "electrical",
      title: "Electrical Maintenance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
      description: "Comprehensive electrical system maintenance. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">Electrical Maintenance Services</h3>
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop" 
            alt="Electrical Maintenance Services" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            Shiva Solutions provides comprehensive electrical maintenance services designed to ensure the reliability, safety, and efficiency of electrical systems across industrial facilities. Our team of certified electrical engineers and technicians delivers proactive maintenance solutions that minimize downtime and extend the operational lifespan of critical electrical infrastructure.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Services Scope</h4>
          <p className="mb-4">
            Our electrical maintenance services encompass routine inspections, preventive maintenance, corrective repairs, system upgrades, and emergency response. We work with diverse electrical systems, including power distribution networks, control panels, motors, generators, transformers, lighting systems, and automated control systems.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Client-Specific Applications</h4>
          <p className="mb-4">
            For MGVCL, we provide specialized maintenance services for power distribution infrastructure, ensuring reliable electricity supply across the grid. At ONGC facilities, our team maintains electrical systems critical to continuous operations in oil exploration and processing. For L&T manufacturing plants, we implement comprehensive maintenance programs that optimize production efficiency and energy utilization.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Advanced Diagnostic Techniques</h4>
          <p className="mb-4">
            We employ state-of-the-art diagnostic tools and techniques, including thermographic imaging, power quality analysis, ultrasonic detection, motor circuit analysis, and partial discharge testing. These advanced methods enable us to identify potential issues before they lead to failures, supporting truly preventive maintenance approaches.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Benefits to Clients</h4>
          <p className="mb-4">
            Our electrical maintenance services deliver substantial benefits:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Minimized unplanned downtime and production losses</li>
            <li>Enhanced system reliability and operational efficiency</li>
            <li>Improved safety and compliance with regulatory standards</li>
            <li>Extended equipment lifespan and reduced replacement costs</li>
            <li>Optimized energy consumption and lower utility expenses</li>
            <li>Comprehensive documentation and maintenance records</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Maintenance Strategy</h4>
          <p className="mb-4">
            We develop customized maintenance strategies based on system criticality, operational requirements, and industry best practices. Our approach integrates time-based preventive maintenance with condition-based monitoring and predictive maintenance techniques to optimize resource allocation and maximize system availability.
          </p>
          
          <p className="mb-4">
            For Mundra Port's extensive electrical infrastructure, our maintenance programs ensure continuous operation of cargo handling equipment, lighting systems, and power distribution networks essential to 24/7 port operations.
          </p>
          
          <p>
            Trust Shiva Solutions to deliver expert electrical maintenance services that protect your critical assets, enhance operational reliability, and contribute to sustainable, efficient operations across your facilities.
          </p>
        </>
      )
    },
    {
      id: "solar",
      title: "Solar Panel Maintenance Automation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
      description: "Automated solutions for solar panel efficiency. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">Solar Panel Maintenance Automation</h3>
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop" 
            alt="Solar Panel Maintenance Automation" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            Shiva Solutions specializes in developing and implementing automated maintenance solutions for solar panel installations that maximize energy production efficiency, reduce operational costs, and extend system lifespan. Our innovative technologies transform traditional manual maintenance approaches into streamlined, data-driven processes.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Automated Solutions</h4>
          <p className="mb-4">
            Our solar panel maintenance automation includes robotic cleaning systems, drone-based inspection technology, IoT sensor networks for performance monitoring, automated diagnostics platforms, and weather-responsive adjustment systems. These technologies work together to create comprehensive maintenance ecosystems that require minimal human intervention.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Client Applications</h4>
          <p className="mb-4">
            For Gujarat Government's solar initiatives, our automation solutions maintain the efficiency of large-scale solar farms vital to the state's renewable energy targets. At MGVCL's solar installations, our systems ensure optimal power generation through continuous monitoring and automated maintenance protocols. For L&T's industrial facilities with rooftop solar, our solutions maximize return on investment through enhanced system performance.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Technical Features</h4>
          <p className="mb-4">
            Our solar automation systems incorporate advanced features such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>AI-driven cleaning robots that adjust cleaning patterns based on soiling analysis</li>
            <li>Thermal imaging drones that identify hotspots and potential cell failures</li>
            <li>Integrated weather forecasting systems that optimize cleaning schedules</li>
            <li>Real-time performance monitoring with predictive maintenance algorithms</li>
            <li>Automated reporting and maintenance scheduling platforms</li>
            <li>Water conservation technologies for cleaning in water-scarce regions</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Performance Benefits</h4>
          <p className="mb-4">
            Clients implementing our solar maintenance automation experience significant benefits:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Energy yield improvements of 15-25% through optimal panel cleanliness</li>
            <li>Maintenance cost reductions of up to 40% compared to manual methods</li>
            <li>Extended solar panel lifespan through proper care and early issue detection</li>
            <li>Reduced water consumption for cleaning operations</li>
            <li>Enhanced worker safety by eliminating manual cleaning at heights</li>
            <li>Comprehensive performance data supporting better system management</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Implementation Approach</h4>
          <p className="mb-4">
            We follow a structured implementation methodology that begins with a detailed site assessment, followed by custom solution design, phased deployment, integration with existing monitoring systems, comprehensive testing, and ongoing optimization based on performance data analysis.
          </p>
          
          <p className="mb-4">
            For solar installations in remote locations, our autonomous maintenance solutions ensure consistent performance without requiring frequent site visits, providing particular value for distributed solar assets across Gujarat's diverse geography.
          </p>
          
          <p>
            Partner with Shiva Solutions to transform your solar maintenance operations with cutting-edge automation technologies that deliver sustainable performance improvements and significant operational cost savings.
          </p>
        </>
      )
    },
    {
      id: "server",
      title: "IT Server Maintenance",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
      description: "Comprehensive server room solutions. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">IT Server Maintenance Services</h3>
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop" 
            alt="IT Server Maintenance" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            Shiva Solutions provides comprehensive IT server maintenance services designed to ensure the reliability, security, and optimal performance of critical server infrastructure. Our expert team delivers proactive maintenance solutions that minimize downtime risks, optimize system performance, and extend equipment lifespan.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Maintenance Scope</h4>
          <p className="mb-4">
            Our server maintenance services encompass physical server hardware, virtualization platforms, storage systems, network infrastructure, cooling systems, power management, security protocols, and backup solutions. We provide both scheduled preventive maintenance and responsive troubleshooting services to address the full spectrum of server infrastructure requirements.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Client-Specific Applications</h4>
          <p className="mb-4">
            For Gujarat Government departments, we maintain secure server environments essential for public service delivery and data management. At ONGC Vadodara, our team ensures the reliability of server infrastructure supporting critical operational technology systems. For L&T's manufacturing operations, we maintain high-availability server environments that support production management systems.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Technical Capabilities</h4>
          <p className="mb-4">
            Our technical expertise includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hardware diagnostics and component-level troubleshooting</li>
            <li>Server performance optimization and capacity planning</li>
            <li>Operating system maintenance and security patching</li>
            <li>Virtualization platform management and optimization</li>
            <li>Storage system maintenance and data integrity verification</li>
            <li>Network infrastructure maintenance within server environments</li>
            <li>Power and cooling system monitoring and maintenance</li>
            <li>Backup system verification and disaster recovery testing</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Proactive Approach</h4>
          <p className="mb-4">
            We implement proactive maintenance strategies that include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 monitoring systems with automated alerts</li>
            <li>Regular performance analysis and trend identification</li>
            <li>Scheduled preventive maintenance during optimal windows</li>
            <li>Firmware and software update management</li>
            <li>Component lifespan tracking and pre-emptive replacement</li>
            <li>Environmental condition monitoring in server rooms</li>
            <li>Comprehensive documentation and maintenance logging</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Client Benefits</h4>
          <p className="mb-4">
            Our server maintenance services deliver substantial benefits to organizations:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maximized server uptime and service availability</li>
            <li>Reduced risk of data loss and service interruptions</li>
            <li>Optimized server performance and resource utilization</li>
            <li>Extended infrastructure lifespan and investment protection</li>
            <li>Enhanced security posture and compliance status</li>
            <li>Predictable maintenance costs and reduced emergency expenditures</li>
          </ul>
          
          <p className="mb-4">
            For Mundra Port's logistics management systems, our server maintenance ensures continuous availability of critical applications supporting 24/7 port operations and international shipping coordination.
          </p>
          
          <p>
            Trust Shiva Solutions to deliver expert IT server maintenance services that protect your mission-critical infrastructure, optimize system performance, and provide the reliability foundation needed for your business operations.
          </p>
        </>
      )
    },
    {
      id: "robotic-arm",
      title: "Robotic Arm Programming",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
      description: "Custom programming for industrial robotic arms. Click to learn more.",
      detailedContent: (
        <>
          <h3 className="text-2xl font-bold mb-4">Robotic Arm Programming Services</h3>
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format&fit=crop" 
            alt="Robotic Arm Programming" 
            className="float-right ml-6 mb-4 rounded-lg w-full md:w-64 lg:w-80"
          />
          <p className="mb-4">
            Shiva Solutions specializes in advanced robotic arm programming services that transform standard industrial robots into highly efficient, application-specific automation solutions. Our team of expert programmers and robotics engineers develops custom programming solutions for diverse industrial applications, optimizing performance, precision, and productivity.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Programming Expertise</h4>
          <p className="mb-4">
            Our programming capabilities span multiple robot manufacturers and platforms, including ABB, KUKA, Fanuc, Universal Robots, and Yaskawa. We develop custom solutions for applications such as pick-and-place operations, material handling, assembly processes, welding, painting, quality inspection, and machine tending.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Industry Applications</h4>
          <p className="mb-4">
            For L&T's manufacturing facilities, we develop robotic arm programs that automate precision assembly operations, increasing throughput and quality consistency. At ONGC facilities, our robotic programming enables safe handling of materials in hazardous environments. For Mundra Port's cargo handling, we program robotic systems that optimize container management and logistics operations.
          </p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Technical Capabilities</h4>
          <p className="mb-4">
            Our robotic arm programming services include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Motion path optimization for cycle time reduction</li>
            <li>Integration of vision systems for dynamic object recognition</li>
            <li>Force/torque sensing integration for adaptive operations</li>
            <li>Multi-robot synchronization and coordination</li>
            <li>PLC integration and communication protocols implementation</li>
            <li>Safety system programming and compliance verification</li>
            <li>Custom HMI development for operator interaction</li>
            <li>Simulation and virtual commissioning before deployment</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Development Methodology</h4>
          <p className="mb-4">
            We follow a structured development methodology that includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Detailed process analysis and requirements gathering</li>
            <li>Simulation-based program development and testing</li>
            <li>Virtual validation before physical implementation</li>
            <li>On-site implementation with rigorous testing</li>
            <li>Comprehensive documentation and operator training</li>
            <li>Post-deployment optimization and support</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Client Benefits</h4>
          <p className="mb-4">
            Organizations implementing our robotic arm programming services achieve:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Increased production throughput and consistency</li>
            <li>Enhanced precision and quality in manufacturing processes</li>
            <li>Improved workplace safety through automation of hazardous tasks</li>
            <li>Reduced cycle times and operational costs</li>
            <li>Flexibility to handle product variants and production changes</li>
            <li>Optimized resource utilization and energy efficiency</li>
            <li>Seamless integration with existing production systems</li>
          </ul>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Ongoing Support</h4>
          <p className="mb-4">
            Beyond initial programming, we provide comprehensive support services including program optimization, troubleshooting, modifications for new products or processes, backup management, and performance analysis to ensure continued optimal operation of robotic systems.
          </p>
          
          <p className="mb-4">
            For Gujarat-based manufacturing industries, our robotic arm programming services contribute to modernization initiatives and competitive advantages in increasingly automated production environments.
          </p>
          
          <p>
            Partner with Shiva Solutions for expert robotic arm programming that unlocks the full potential of your industrial robots, delivering tangible productivity improvements and manufacturing excellence.
          </p>
        </>
      )
    }
  ];

  // Effect for the slider automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Event handlers for navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Modal handlers
  const openModal = (serviceId: string) => {
    setActiveModal(serviceId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Effect to handle escape key for closing modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [activeModal]);

  // Dynamic copyright year
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Shiva Solutions</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['hero', 'about', 'services', 'clients', 'contact'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`} 
                    className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="text-gray-700">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Slider */}
      <section id="hero" className="pt-20 h-screen relative">
        <div className="relative h-full w-full overflow-hidden" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-hidden={index !== currentSlide}
            />
          ))}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Driving Industrial Progress Through Automation</h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Your Partner for Advanced Robotics, Maintenance, and Technology Solutions in Vadodara</p>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover Our Capabilities
              </Button>
            </div>
          </div>
          
          {/* Slider Navigation */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Shiva Solutions</h2>
          <div className="max-w-3xl mx-auto text-lg">
            <p>
              Founded in Vadodara, Gujarat, Shiva Solutions is a premier provider of automation and engineering solutions for industrial clients. We specialize in delivering cutting-edge robotics, maintenance, and technology services that optimize operations, enhance safety, and drive efficiency. Our team of experienced engineers works closely with leading organizations including ONGC, L&T, Mundra Port, MGVCL, and various Gujarat Government departments to implement innovative solutions tailored to their specific operational challenges. With our headquarters in Saffron Complex, Fatehgunj, we are strategically positioned to serve industrial clients throughout Gujarat and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => openModal(service.id)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Valued Clients</h2>
          <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
            We're proud to partner with leading organizations across Gujarat, providing innovative automation and engineering solutions for their critical operations.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["ONGC Vadodara", "L&T (Larsen & Toubro)", "Mundra Port", "MGVCL", "Gujarat Govt"].map((client) => (
              <li key={client} className="bg-white shadow-md rounded-lg p-6 text-center font-semibold text-gray-800">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                We're ready to discuss how our automation and engineering solutions can address your specific needs. Reach out to our team for a consultation.
              </p>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="font-medium mr-2">Address:</span>
                  <span>GF-31, Saffron Complex, Fatehgunj, Vadodara, Gujarat - 390002, India</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <span>+91-98765-XXXXX</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <span>info@shivasolutions.co.in</span>
                </p>
              </div>
              
              {/* Map Section */}
              <div className="mt-8 h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262783160756!2d73.18006972647844!3d22.31957326955193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e674e3f263%3A0x8acd9b4fbff29308!2sFatehganj%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1617542889871!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Shiva Solutions Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form action="mailto:info@shivasolutions.co.in" method="post">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></Textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                    Send Message
                  </Button>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Note: This form requires server-side processing to function. Please configure your backend or contact us directly via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="main-footer" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Shiva Solutions. All Rights Reserved. | Vadodara, Gujarat</p>
        </div>
      </footer>

      {/* Modal Container */}
      {activeModal && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === modalRef.current) {
              closeModal();
            }
          }}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="mt-2">
                {services.find(s => s.id === activeModal)?.detailedContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
