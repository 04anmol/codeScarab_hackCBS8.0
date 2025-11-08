import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-lavender to-background py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-10 sm:space-y-12 lg:space-y-0">
          {/* Mobile Layout - Logo Above CTA Buttons */}
          <div className="lg:hidden space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center px-4">
              Turning moments of stress into steps of hope
              <span className="text-primary"> Matters</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center px-4">
              A safe, empathetic AI companion providing 24/7 mental health support for students through clinically verified guidance and compassionate conversations.
            </p>

            {/* Logo */}
            <div className="flex justify-center">
              <img src="/logo.svg" alt="HOPEr Logo" className="w-48 h-48 sm:w-64 sm:h-64" style={{
                animation: 'float 3s ease-in-out infinite',
                animationDuration: '3s'
              }} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto active:scale-95 transition-transform" 
                onClick={() => navigate('/chat')}
              >
                Get Support Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto active:scale-95 transition-transform" 
                onClick={() => navigate('/learn-more')}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
                Turning moments of stress into steps of hope
                <span className="text-primary"> Matters</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg lg:text-xl text-muted-foreground">
                A safe, empathetic AI companion providing 24/7 mental health support for students through clinically verified guidance and compassionate conversations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 active:scale-95 transition-transform" 
                  onClick={() => navigate('/chat')}
                >
                  Get Support Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 active:scale-95 transition-transform" 
                  onClick={() => navigate('/learn-more')}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Logo */}
            <div className="flex justify-center lg:justify-end">
              <img src="/logo.svg" alt="HOPEr Logo" className="w-80 h-80 lg:w-96 lg:h-96" style={{
                animation: 'float 3s ease-in-out infinite',
                animationDuration: '3s'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
