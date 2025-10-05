import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { memo } from "react";
import { HERO_CONTENT } from "@/content/constants";

const Hero = memo(() => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(174_72%_56%_/_0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {HERO_CONTENT.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {HERO_CONTENT.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_0_50px_hsl(174_72%_56%_/_0.4)]"
              asChild
            >
              <a href={HERO_CONTENT.email}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href={HERO_CONTENT.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href={HERO_CONTENT.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;