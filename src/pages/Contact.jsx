import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SectionHeader from "@/components/shared/SectionHeader";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["237 Dhlamini Street", "Mavimbela Section", "Katlehong 1431", "South Africa"],
    link: "https://www.google.com/maps/search/237+Dhlamini+Street+Mavimbela+Section+Katlehong+1431",
    linkLabel: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["068 265 0680"],
    link: "tel:0682650680",
    linkLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["068 265 0680", "Quick responses guaranteed!"],
    link: "https://wa.me/27682650680?text=Hi%20Zintle!%20I%20have%20a%20question.",
    linkLabel: "Send Message",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 3:00 PM", "Sun: Closed"],
  },
];

export default function Contact() {
  const position = [-26.3496, 28.1524];

  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get in Touch"
            title="Contact Us"
            description="We'd love to hear from you! Reach out to us via WhatsApp, phone, or visit our shop in Katlehong."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-pink-100 bg-white p-6 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50">
                  <info.icon className="h-6 w-6 text-pink-700" />
                </div>
                <h3 className="mb-3 font-serif text-lg font-semibold text-pink-950">{info.title}</h3>
                <div className="mb-4 space-y-1">
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-gray-500">
                      {line}
                    </p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-pink-700 hover:text-pink-900"
                  >
                    {info.linkLabel}
                    <Navigation className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-pink-100 shadow-lg"
          >
            <div className="h-[400px] sm:h-[500px]">
              <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-center">
                      <strong>Zintle Hair Front Wigs</strong>
                      <br />
                      237 Dhlamini Street, Mavimbela Section
                      <br />
                      Katlehong 1431
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <MessageCircle className="mx-auto mb-4 h-12 w-12 text-white/80" />
          <h2 className="mb-4 font-serif text-3xl font-bold text-white">Fastest Response on WhatsApp</h2>
          <p className="mb-8 text-lg text-green-100">
            For the quickest reply, message us directly on WhatsApp. We typically respond within
            minutes.
          </p>
          <a
            href="https://wa.me/27682650680?text=Hi%20Zintle!%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-green-700 hover:bg-green-50 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}