import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Thomas Northman Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">THOMAS NORTHMAN</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Inicio</a>
            <a href="/about" className="text-sm font-medium text-primary">Acerca de</a>
            <a href="/disputes" className="text-sm font-medium hover:text-primary transition-colors">Disputas</a>
            <a href="/international" className="text-sm font-medium hover:text-primary transition-colors">Internacional</a>
            <a href="/rates" className="text-sm font-medium hover:text-primary transition-colors">Tarifas</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
            <Button variant="default" size="sm" onClick={() => window.location.href = '/'}>
              Consulta
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-6">
            Acerca de <span className="text-primary">Thomas Northman</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de 15 años de experiencia especializada en derecho tributario internacional, 
            resolviendo casos complejos y guiando a clientes hacia el cumplimiento fiscal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/assets/lady-justice.png" 
              alt="Estatua de la Justicia" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Mi Experiencia Profesional</h2>
            <p className="text-muted-foreground mb-4">
              Como abogado tributario especializado, he dedicado mi carrera a desentrañar las 
              complejidades del sistema fiscal tanto nacional como internacional. Mi enfoque se 
              centra en proporcionar soluciones prácticas y estratégicas para individuos y empresas.
            </p>
            <p className="text-muted-foreground mb-6">
              He representado con éxito a clientes en disputas tributarias complejas, planificación 
              fiscal internacional, y procesos de cumplimiento regulatorio ante las autoridades fiscales.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Maestría en Derecho Tributario - Universidad de Harvard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Licenciado en Derecho - Universidad de Yale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Certificación en Fiscalidad Internacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Experiencia Comprobada</CardTitle>
              <CardDescription>15+ años resolviendo casos tributarios complejos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Casos exitosos en tribunales fiscales y negociaciones con autoridades 
                tributarias nacionales e internacionales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Enfoque Personalizado</CardTitle>
              <CardDescription>Estrategias adaptadas a cada cliente</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cada caso es único. Desarrollo soluciones específicas que se alinean 
                con los objetivos y circunstancias particulares de cada cliente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Comunicación Clara</CardTitle>
              <CardDescription>Explicaciones comprensibles del proceso legal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Traducir conceptos legales complejos en términos claros para que 
                entiendas completamente tu situación y opciones.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas Asesoramiento Tributario?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si enfrentas un desafío tributario complejo o necesitas planificación fiscal estratégica, 
            estoy aquí para ayudarte. Programemos una consulta para revisar tu situación.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/'}>
            Programar Consulta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;