export default function Home() {
  return (
    <div style={{ fontFamily: 'Cairo, sans-serif', padding: '2rem', lineHeight: '1.6' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>مرحباً بك في AI-Uncode</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          منصتك لبناء روبوتات ذكية وخدمات أتمتة متكاملة.
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>
          خدماتنا
        </h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#333' }}>
          <li>بناء روبوتات ذكية لخدمة العملاء ومندوب مبيعات وتسويق</li>
          <li>تصميم وبناء مواقع ومتاجر وصفحات سوشيال ميديا</li>
          <li>استشارات ودورات تدريبية في الأمن السيبراني والذكاء الاصطناعي</li>
          <li>إدارة حملات إعلانية على جوجل آدز ووسائل التواصل الاجتماعي</li>
          <li>بناء بوتات أتمتة ذكية متقدمة</li>
        </ul>
      </section>
    </div>
  );
}
