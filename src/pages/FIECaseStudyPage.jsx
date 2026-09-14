import { FIE_CASE_STUDY } from '../data/fieProject';
import ProjectCaseStudyLayout from '../components/ProjectCaseStudyLayout';

// /work/financial-innovation-and-enterprise — flagship event case study.
// All copy and asset paths live in src/data/fieProject.js.
export default function FIECaseStudyPage() {
  return <ProjectCaseStudyLayout data={FIE_CASE_STUDY} />;
}
