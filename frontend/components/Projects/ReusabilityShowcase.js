export default function ReusabilityShowcase() {
  const items = [
    { title: 'PathPradarshak → CiviSync', desc: 'Modular architecture reused for civic platform (SIH)' },
    { title: 'DBMS Modules', desc: 'Reusable schemas and CRUD patterns across Bank/Hotel/E-commerce' },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="font-medium text-xl">Reusability & Scalability</h3>
        <ul className="mt-3 text-sm text-gray-700 space-y-1">
          {items.map((i) => (
            <li key={i.title}><span className="font-medium">{i.title}:</span> {i.desc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
