import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { memo } from "react";
import { PROJECTS } from "@/content/constants";

const Projects = memo(() => {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that combine IT expertise with AI automation to solve real-world challenges
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary opacity-60" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge 
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-200"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-200"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Section */}
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-in group overflow-hidden"
              style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                  <project.icon className="h-12 w-12 text-primary opacity-60" />
                </div>
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/20 text-primary border-primary/30 text-xs"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge 
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-1">
                  {project.githubUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1 text-primary hover:bg-primary/10 transition-all duration-200"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1 text-primary hover:bg-primary/10 transition-all duration-200"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating on a project?
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_0_50px_hsl(174_72%_56%_/_0.4)]"
            asChild
          >
            <a href="mailto:millan.stankovic12345@gmail.com">
              Let's Work Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
