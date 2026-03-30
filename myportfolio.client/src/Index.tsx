import { useEffect, useState } from 'react'

interface Project {
  id: number;
  title: string;
  tech: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>JM</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {projects.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{p.title}</h3>
            <p>Built with: <code>{p.tech}</code></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App