export default function ReusabilityShowcase() {
  const items = [
    { title: 'PathPradarshak → CiviSync', desc: 'Modular architecture reused for civic platform (SIH)' },
    { title: 'DBMS Modules', desc: 'Reusable schemas and CRUD patterns across Bank/Hotel/E-commerce' },
  ];
  return (
    <div className="mt-8 border border-gray-100 rounded p-4 bg-white">
      <h3 className="font-medium">Reusability & Scalability</h3>
      <ul className="mt-2 text-sm text-gray-700 space-y-1">
        {items.map((i) => (<li key={i.title}><span className="font-medium">{i.title}:</span> {i.desc}</li>))}
      </ul>
    </div>
  );
}
