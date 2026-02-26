import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: 'Manufacturing Excellence',
      description:
        'State-of-the-art manufacturing facilities equipped with cutting-edge technology to produce high-quality products that meet international standards.',
      image: '/assets/generated/service-manufacturing.dim_256x256.png',
      features: ['Quality Assurance', 'Advanced Technology', 'Skilled Workforce', 'Timely Delivery']
    },
    {
      title: 'Logistics & Distribution',
      description:
        'Comprehensive logistics solutions with an extensive distribution network ensuring efficient supply chain management and timely delivery across regions.',
      image: '/assets/generated/service-logistics.dim_256x256.png',
      features: ['Supply Chain Management', 'Warehousing', 'Transportation', 'Inventory Control']
    },
    {
      title: 'Retail & Merchandising',
      description:
        'Strategic retail operations and merchandising services that connect quality products with customers through innovative marketing and distribution channels.',
      image: '/assets/generated/service-retail.dim_256x256.png',
      features: ['Brand Management', 'Market Analysis', 'Customer Service', 'Sales Strategy']
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive business solutions across manufacturing, logistics, and retail sectors,
            delivering excellence at every touchpoint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
