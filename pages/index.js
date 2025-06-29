import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                تواصل معنا
              </Link>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                من نحن
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
                الخدمات
              </Link>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                الصفحة الرئيسية
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-blue-600">AI-Uncode</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Services Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">خدماتنا المتميزة</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            اكتشف مجموعة شاملة من الحلول الذكية لأتمتة عملك وتطوير حضورك الرقمي
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "روبوتات دردشة لخدمة العملاء",
                description:
                  "روبوتات ذكية تجيب على استفسارات عملائك على مدار الساعة بكفاءة عالية وتوفر تجربة عملاء استثنائية",
                features: ["دعم متعدد اللغات", "تعلم آلي متقدم", "تكامل مع منصات متعددة"],
              },
              {
                title: "مساعد مبيعات ذكي",
                description: "أتمتة عملية المبيعات وتحويل الزوار إلى عملاء بطريقة احترافية مع تتبع شامل للأداء",
                features: ["تحليل سلوك العملاء", "عروض مخصصة", "تقارير مفصلة"],
              },
              {
                title: "تصميم مواقع ومتاجر",
                description: "حلول تصميم شاملة لحضورك الرقمي مع تصاميم عصرية وتجربة مستخدم متميزة",
                features: ["تصميم متجاوب", "تحسين محركات البحث", "لوحة تحكم سهلة"],
              },
              {
                title: "إدارة حملات إعلانية",
                description: "تحسين وإدارة حملاتك الإعلانية لتحقيق أفضل عائد على الاستثمار مع تحليلات متقدمة",
                features: ["استهداف دقيق", "تحليل الأداء", "تحسين تلقائي"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">اطلب الخدمة</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">جاهز لبدء مشروعك؟</h2>
          <p className="text-xl text-blue-100 mb-8">تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
            تواصل معنا الآن
          </Button>
        </div>
      </section>
    </div>
  )
}
