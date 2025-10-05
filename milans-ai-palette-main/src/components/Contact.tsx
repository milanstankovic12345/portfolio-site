import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { memo } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/content/constants";

const Contact = memo(() => {

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities in IT support and AI research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card animate-slide-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {CONTACT_INFO.map((item, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors duration-200">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors duration-200"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      Connect with me
                    </h4>
                    <div className="flex gap-4">
                      {SOCIAL_LINKS.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="lg"
                          asChild
                          className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-200"
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="mr-2 h-5 w-5" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Let's Work Together
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Whether you need IT support expertise, AI research collaboration, or want to discuss 
                    innovative solutions, I'm always interested in new opportunities and challenges.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_0_50px_hsl(174_72%_56%_/_0.4)]"
                    asChild
                  >
                    <a href={CONTACT_INFO[0].href!}>
                      <Mail className="mr-2 h-5 w-5" />
                      Send a Message
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;