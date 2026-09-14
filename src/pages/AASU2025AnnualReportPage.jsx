import React from 'react';
import PublicationCaseStudyLayout from '../components/PublicationCaseStudyLayout';
import { aasuAnnualReport2025Data } from '../data/publicationCaseStudies';

export default function AASU2025AnnualReportPage() {
  return <PublicationCaseStudyLayout data={aasuAnnualReport2025Data} />;
}
