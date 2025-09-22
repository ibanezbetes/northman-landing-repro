import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
            <a href="/rates" className="text-sm font-medium hover:text-primary transition-colors">Tarifas</a>
            <a href="/contact" className="text-sm font-medium text-primary">Contacto</a>
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
            Contacta <span className="text-primary">Conmigo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy aquí para ayudarte con tus desafíos fiscales. Programa una consulta 
            o contacta directamente para discutir tu situación.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envía un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo en un plazo de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellidos</Label>
                      <Input id="lastName" placeholder="Tus apellidos" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (Opcional)</Label>
                    <Input id="phone" type="tel" placeholder="+34 XXX XXX XXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tipo de Consulta</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Consulta General</SelectItem>
                        <SelectItem value="international">Tributación Internacional</SelectItem>
                        <SelectItem value="disputes">Disputas Tributarias</SelectItem>
                        <SelectItem value="planning">Planificación Fiscal</SelectItem>
                        <SelectItem value="compliance">Cumplimiento Tributario</SelectItem>
                        <SelectItem value="emergency">Consulta Urgente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe brevemente tu situación fiscal o la consulta que necesitas realizar..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Nivel de Urgencia</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="¿Qué urgencia tiene tu consulta?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baja - Tengo tiempo para planificar</SelectItem>
                        <SelectItem value="medium">Media - En las próximas semanas</SelectItem>
                        <SelectItem value="high">Alta - Necesito respuesta pronto</SelectItem>
                        <SelectItem value="urgent">Urgente - Situación crítica</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded" />
                    <Label htmlFor="privacy" className="text-sm">
                      Acepto la política de privacidad y el tratamiento de mis datos personales
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
                <CardDescription>Múltiples formas de ponerte en contacto conmigo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">+34 91 XXX XX XX</p>
                    <p className="text-sm text-muted-foreground">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">thomas@northmantax.com</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Oficina</h4>
                    <p className="text-muted-foreground">Calle Serrano 45, 3º</p>
                    <p className="text-muted-foreground">28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horario de Atención</h4>
                    <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Emergencias: 24/7 (previa cita)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Consultas Urgentes</CardTitle>
                <CardDescription>Para situaciones que requieren atención inmediata</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Si enfrentas una situación fiscal urgente como una auditoría inmediata, 
                  requerimiento de autoridades fiscales, o cualquier situación crítica, 
                  contáctame directamente:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">📱 Móvil de Emergencia: +34 6XX XXX XXX</p>
                  <p className="font-semibold">📧 Email Urgente: urgent@northmantax.com</p>
                </div>
                <Button className="w-full mt-4" onClick={() => window.location.href = '/'}>
                  Consulta de Emergencia
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Horarios y Disponibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="text-primary font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="text-muted-foreground">Previa cita</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="text-muted-foreground">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergencias</span>
                    <span className="text-primary font-medium">24/7</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> Las consultas fuera del horario comercial pueden estar sujetas 
                    a un recargo del 50% sobre la tarifa estándar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ubicación de la Oficina</CardTitle>
              <CardDescription>Céntrica ubicación en el corazón financiero de Madrid</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thomas Northman Tax Law</h3>
                <p className="text-muted-foreground mb-2">Calle Serrano 45, 3º Planta</p>
                <p className="text-muted-foreground mb-4">28001 Madrid, España</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <p className="text-sm text-muted-foreground">🚇 Metro: Serrano (L4)</p>
                  <p className="text-sm text-muted-foreground">🚌 Autobús: Líneas 1, 9, 19, 51, 74</p>
                  <p className="text-sm text-muted-foreground">🅿️ Parking: Disponible en la zona</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;