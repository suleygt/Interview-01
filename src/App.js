import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#003153' }}>
      <div style={{ padding: '20px', width: '70%', maxWidth: '800px', backgroundColor: '#b86614' }}>
        <DisplayNested nestedObjected={nestedObjected} />
      </div>
    </div>
  );
};

const DisplayNested = ({ nestedObjected }) => {
  const renderNested = (obj, depth) => {
    return (
      <div style={{ marginLeft: `${depth * 20}px`, marginBottom: '5px', border: '1px solid gray', padding: '10px', backgroundColor: '#c68c52' }}>
        {Object.keys(obj).map(key => (
          <div key={key} style={{ marginBottom: '3px' }}>
            <strong style={{ color: '#512c10', padding: '10px'  }}>{key}:</strong> {typeof obj[key] === 'object' ? renderNested(obj[key], depth + 1) : obj[key]}
          </div>
        ))}
      </div>
    );
  };

  return renderNested(nestedObjected, 0);
};
""
export default App;