import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const International = () => {
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
            <a href="/international" className="text-sm font-medium text-primary">Internacional</a>
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
            Tributación <span className="text-primary">Internacional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Asesoramiento especializado en fiscalidad transfronteriza, tratados internacionales 
            y cumplimiento fiscal para operaciones globales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Key Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios de Tributación Internacional</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Precios de Transferencia</CardTitle>
                <CardDescription>Cumplimiento y documentación de precios de transferencia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desarrollo de políticas de precios de transferencia, preparación de estudios económicos 
                  y documentación local file, master file y country-by-country reporting.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Estudios económicos especializados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Documentación OCDE (Local File, Master File)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Country-by-Country Reporting (CbCR)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Tratados Fiscales</CardTitle>
                <CardDescription>Aplicación y optimización de convenios internacionales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Análisis y aplicación de tratados para evitar la doble imposición, obtención de 
                  certificados de residencia fiscal y procedimientos de acuerdo mutuo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Aplicación de convenios de doble imposición</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Certificados de residencia fiscal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Procedimientos de acuerdo mutuo (MAP)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Restructuraciones</CardTitle>
                <CardDescription>Reestructuraciones fiscalmente eficientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Planificación y ejecución de reestructuraciones corporativas internacionales 
                  con optimización fiscal y cumplimiento regulatorio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Reorganizaciones</Badge>
                  <Badge variant="secondary">Fusiones y adquisiciones</Badge>
                  <Badge variant="secondary">Spin-offs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Residencia Fiscal</CardTitle>
                <CardDescription>Asesoramiento en cambios de residencia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Planificación de cambios de residencia fiscal para personas físicas y jurídicas, 
                  análisis de implicaciones fiscales en múltiples jurisdicciones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cambio de residencia</Badge>
                  <Badge variant="secondary">Planificación patrimonial</Badge>
                  <Badge variant="secondary">Exit tax</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Cumplimiento FATCA/CRS</CardTitle>
                <CardDescription>Intercambio automático de información</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Asesoramiento en obligaciones de reporte FATCA, CRS y otros regímenes de 
                  intercambio automático de información fiscal.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FATCA</Badge>
                  <Badge variant="secondary">CRS</Badge>
                  <Badge variant="secondary">Reporte automático</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Countries We Serve */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Jurisdicciones de Especialidad</h3>
          <div className="bg-card rounded-2xl p-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl">🇺🇸</div>
                <h4 className="font-semibold">Estados Unidos</h4>
                <p className="text-sm text-muted-foreground">FATCA, tax treaties, US tax compliance</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇪🇸</div>
                <h4 className="font-semibold">España</h4>
                <p className="text-sm text-muted-foreground">Beckham Law, residencia fiscal, patrimonio</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇬🇧</div>
                <h4 className="font-semibold">Reino Unido</h4>
                <p className="text-sm text-muted-foreground">UK tax, non-dom status, trust structures</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇩🇪</div>
                <h4 className="font-semibold">Alemania</h4>
                <p className="text-sm text-muted-foreground">German tax law, Wegzugsbesteuerung</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇨🇭</div>
                <h4 className="font-semibold">Suiza</h4>
                <p className="text-sm text-muted-foreground">Swiss tax planning, lump sum taxation</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇱🇺</div>
                <h4 className="font-semibold">Luxemburgo</h4>
                <p className="text-sm text-muted-foreground">Holding structures, EU directives</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🇳🇱</div>
                <h4 className="font-semibold">Países Bajos</h4>
                <p className="text-sm text-muted-foreground">Dutch tax treaties, participation exemption</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🌍</div>
                <h4 className="font-semibold">Otras Jurisdicciones</h4>
                <p className="text-sm text-muted-foreground">Consulta para casos específicos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Proceso de Asesoramiento Internacional</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Análisis Jurisdiccional</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificación de todas las jurisdicciones relevantes y sus implicaciones fiscales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Evaluación de Tratados</h4>
                    <p className="text-sm text-muted-foreground">
                      Análisis de convenios fiscales aplicables y oportunidades de optimización.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Estructura Óptima</h4>
                    <p className="text-sm text-muted-foreground">
                      Diseño de la estructura más eficiente fiscal y operativamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Documentación</h4>
                    <p className="text-sm text-muted-foreground">
                      Preparación de toda la documentación necesaria para el cumplimiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Implementación</h4>
                    <p className="text-sm text-muted-foreground">
                      Ejecución de la estrategia con seguimiento continuo del cumplimiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monitoreo</h4>
                    <p className="text-sm text-muted-foreground">
                      Seguimiento de cambios normativos y adaptación de estrategias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Operaciones Fiscales Internacionales?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            La tributación internacional es compleja y requiere expertise especializado. 
            Te ayudo a navegar las regulaciones de múltiples jurisdicciones eficientemente.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/'}>
            Consulta Internacional
          </Button>
        </div>
      </div>
    </div>
  );
};

export default International;