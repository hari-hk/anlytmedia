import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Anlyt Media',
  description: 'Terms of Service for Anlyt Media. Please read these terms carefully before using our services.',
};

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
          <p>
            By accessing our website at Anlyt Media, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Anlyt Media's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Anlyt Media's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
          <p>
            The materials on Anlyt Media's website are provided on an 'as is' basis. Anlyt Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
          <p>
            In no event shall Anlyt Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Anlyt Media's website, even if Anlyt Media or a Anlyt Media authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
        
        <p className="text-sm text-gray-500 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
