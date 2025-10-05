import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";
import { ABOUT_HIGHLIGHTS } from "@/content/constants";

const About = memo(() => {

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated IT professional and AI enthusiast with a strong background in the pharmaceutical and manufacturing industries. 
            My expertise ensures business continuity through troubleshooting, system management, 
            and leveraging the Microsoft Power Platform to turn data into insights. 
            I am deeply passionate about the future of technology, actively working to leverage AI and LLMs for automation and process optimization. 
            My goal is to bridge the gap between core IT support and innovative no-code solutions, d
            riving technological improvements that directly impact business success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ABOUT_HIGHLIGHTS.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;