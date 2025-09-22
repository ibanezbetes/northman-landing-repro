import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Rates = () => {
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
            <a href="/disputes" className="text-sm font-medium hover:text-primary transition-colors">Disputas</a>
            <a href="/international" className="text-sm font-medium hover:text-primary transition-colors">Internacional</a>
            <a href="/rates" className="text-sm font-medium text-primary">Tarifas</a>
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
            Tarifas y <span className="text-primary">Honorarios</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estructura de honorarios transparente y competitiva. Opciones flexibles 
            adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Consulta Inicial</CardTitle>
              <CardDescription>Evaluación de su situación fiscal</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">€150</div>
              <p className="text-sm text-muted-foreground">Por hora</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Análisis inicial del caso</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Evaluación de riesgos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Recomendaciones iniciales</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Plan de acción propuesto</span>
              </div>
              <Button className="w-full mt-6" variant="outline" onClick={() => window.location.href = '/'}>
                Reservar Consulta
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-primary text-white px-4 py-1">Más Popular</Badge>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl">Asesoramiento Continuo</CardTitle>
              <CardDescription>Acompañamiento integral</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">€250</div>
              <p className="text-sm text-muted-foreground">Por hora</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Todo lo anterior incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Preparación de documentos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Comunicación con autoridades</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Seguimiento del caso</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Soporte prioritario</span>
              </div>
              <Button className="w-full mt-6" onClick={() => window.location.href = '/'}>
                Iniciar Asesoramiento
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Casos Complejos</CardTitle>
              <CardDescription>Disputas y asuntos especializados</CardDescription>
              <div className="text-4xl font-bold text-primary mt-4">€350</div>
              <p className="text-sm text-muted-foreground">Por hora</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Casos de alta complejidad</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Disputas tributarias</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Fiscalidad internacional</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Representación judicial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Atención 24/7</span>
              </div>
              <Button className="w-full mt-6" variant="outline" onClick={() => window.location.href = '/'}>
                Consultar Caso
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Pricing Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Opciones de Honorarios Alternativos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Honorarios por Proyecto</CardTitle>
                <CardDescription>Tarifa fija para proyectos específicos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Para ciertos proyectos como estudios de precios de transferencia, restructuraciones 
                  corporativas o planificación fiscal específica, ofrecemos honorarios fijos acordados previamente.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Estudio de precios de transferencia:</span>
                    <span className="text-sm font-semibold">€3,500 - €8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cambio de residencia fiscal:</span>
                    <span className="text-sm font-semibold">€2,500 - €5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Restructuración corporativa:</span>
                    <span className="text-sm font-semibold">€5,000 - €15,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Honorarios por Resultado</CardTitle>
                <CardDescription>Pagos basados en el éxito obtenido</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  En ciertos casos de disputas tributarias o recuperación de impuestos, podemos acordar 
                  honorarios por resultado, donde parte del pago depende del éxito obtenido.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Honorario base mínimo:</span>
                    <span className="text-sm font-semibold">50% tarifa estándar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Honorario por éxito:</span>
                    <span className="text-sm font-semibold">10-20% del beneficio</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Disponible para:</span>
                    <span className="text-sm font-semibold">Casos seleccionados</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Información Adicional</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Facturación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Facturación mensual por horas trabajadas. Informes detallados de tiempo y actividades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Depósito Inicial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Se requiere un depósito inicial equivalente a 10-20 horas de trabajo según el tipo de caso.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Gastos Adicionales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Traducciones, tasas administrativas y otros gastos se facturan por separado al costo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Descuentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Descuentos disponibles para clientes corporativos y casos de volumen significativo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas un Presupuesto Personalizado?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada caso es único. Contáctame para obtener un presupuesto detallado y personalizado 
            según las características específicas de tu situación fiscal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/'}>
              Solicitar Presupuesto
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
              Consulta Gratuita de 15 min
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;