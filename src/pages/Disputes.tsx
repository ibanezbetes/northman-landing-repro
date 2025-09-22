import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Disputes = () => {
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
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">Acerca de</a>
            <a href="/disputes" className="text-sm font-medium text-primary">Disputas</a>
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
            Resolución de <span className="text-primary">Disputas Tributarias</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Representación experta en conflictos fiscales, auditorías, y procesos de 
            impugnación ante autoridades tributarias.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios de Resolución de Disputas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Auditorías Fiscales</CardTitle>
                <CardDescription>Defensa integral durante procesos de auditoría</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Representación completa durante auditorías fiscales, preparación de documentación 
                  y negociación con auditores para obtener los mejores resultados posibles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Preparación de documentos</Badge>
                  <Badge variant="secondary">Negociación</Badge>
                  <Badge variant="secondary">Defensa legal</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Recursos y Apelaciones</CardTitle>
                <CardDescription>Impugnación de decisiones tributarias adversas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Presentación de recursos administrativos y judiciales contra resoluciones 
                  fiscales, multas, y determinaciones de deuda tributaria.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Recursos administrativos</Badge>
                  <Badge variant="secondary">Apelaciones judiciales</Badge>
                  <Badge variant="secondary">Medidas cautelares</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Negociación de Deudas</CardTitle>
                <CardDescription>Acuerdos de pago y planes de regularización</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Negociación de planes de pago, reducción de multas e intereses, y acuerdos 
                  de regularización tributaria con las autoridades fiscales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Planes de pago</Badge>
                  <Badge variant="secondary">Reducción de multas</Badge>
                  <Badge variant="secondary">Regularización</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Disputas Internacionales</CardTitle>
                <CardDescription>Resolución de conflictos fiscales transfronterizos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manejo de disputas que involucran múltiples jurisdicciones, tratados fiscales 
                  internacionales y procedimientos de acuerdo mutuo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tratados internacionales</Badge>
                  <Badge variant="secondary">Acuerdos mutuos</Badge>
                  <Badge variant="secondary">Jurisdicciones múltiples</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Defensa Penal Tributaria</CardTitle>
                <CardDescription>Representación en casos de delitos fiscales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Defensa especializada en casos penales tributarios, evasión fiscal y 
                  procedimientos de investigación por delitos contra la hacienda pública.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Defensa penal</Badge>
                  <Badge variant="secondary">Investigaciones</Badge>
                  <Badge variant="secondary">Regularización</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Procedimientos Urgentes</CardTitle>
                <CardDescription>Medidas cautelares y suspensiones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Obtención de medidas cautelares, suspensión de procedimientos de cobro y 
                  protección urgente de activos durante disputas fiscales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Medidas cautelares</Badge>
                  <Badge variant="secondary">Suspensiones</Badge>
                  <Badge variant="secondary">Protección de activos</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Proceso de Resolución de Disputas</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Evaluación Inicial</h4>
                  <p className="text-muted-foreground">
                    Análisis completo de la situación fiscal, revisión de documentación y 
                    evaluación de las posibilidades de éxito en la disputa.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Estrategia Legal</h4>
                  <p className="text-muted-foreground">
                    Desarrollo de una estrategia legal personalizada, identificación de argumentos 
                    sólidos y preparación de la documentación necesaria.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Negociación y Representación</h4>
                  <p className="text-muted-foreground">
                    Negociación directa con las autoridades fiscales, presentación de recursos 
                    y representación en todas las instancias necesarias.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Resolución y Seguimiento</h4>
                  <p className="text-muted-foreground">
                    Obtención de la resolución más favorable posible y seguimiento para 
                    asegurar el cumplimiento adecuado de los acuerdos alcanzados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Enfrentas una Disputa Tributaria?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            No enfrentes solo las autoridades fiscales. Mi experiencia en disputas tributarias 
            puede marcar la diferencia en el resultado de tu caso.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/'}>
            Consulta de Emergencia
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Disputes;