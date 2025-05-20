// app/ai-interviews/page.tsx
'use client'; // Pastikan komponen ini adalah Client Component karena menggunakan hooks

import { useEffect } from 'react';
import { usePageTitle } from '../../dashboard/layout'; // Sesuaikan path jika berbeda

const AiInterviewsPage = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("AI Interviews Page");
  }, [setPageTitle]);

  return (
    <div>
      <h1>Welcome to AI Interviews!</h1>
      {/* Konten spesifik untuk halaman AI Interviews */}
    </div>
  );
};

export default AiInterviewsPage;