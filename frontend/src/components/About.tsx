import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To deliver exceptional products and services that exceed customer expectations while maintaining the highest standards of quality and integrity in everything we do.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be recognized as a leading business group that drives innovation, creates sustainable value, and makes a positive impact on the communities we serve.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description:
        'Excellence, Integrity, Innovation, Customer Focus, and Sustainability guide every decision we make and every relationship we build.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/about-bg.dim_1200x800.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-secondary">Gowtham Groups</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gowtham Groups is a diversified business conglomerate with a strong presence across
            multiple industries. With decades of experience and a commitment to excellence, we have
            established ourselves as a trusted partner for businesses and communities alike. Our
            integrated approach combines manufacturing expertise, efficient logistics, and strategic
            retail operations to deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-soft-lg transition-all duration-300 bg-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
