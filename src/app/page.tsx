import { Button } from '@/components/ui/button';
import { Brain, BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from 'lucide-react'
import Link from 'next/link';

const features = [
  {
    title: "Complex Research, Made Simple",
    description: "AbuurAI is the AI-powered reference manager that helps researchers manage, annotate, cite papers and conduct literature reviews with AI reliably.",
    icon: GlobeIcon,
  },
  {
    title: "Seamless Collaboration",
    description: "Collaborate with your research team effortlessly. Share annotations, references, and insights in real-time, enhancing productivity and teamwork.",
    icon: MonitorSmartphoneIcon,
  },
  {
    title: "Smart Citation Generation",
    description: "Generate accurate citations in multiple formats with ease. Let AbuurAI handle the formatting while you focus on your research.",
    icon: ServerCogIcon,
  },
  {
    title: "Intelligent Literature Discovery",
    description: "Discover relevant literature with AI-powered recommendations. Stay ahead in your field with up-to-date research insights and trends.",
    icon: ZapIcon,
  },
];
export default function Home() {
  return (
    <main className="bg-gradient-to-bl flex-1  from-white to-indigo-600  overflow-scroll p-2 lg:p-5">
      <div className='bg-white  py-24 sm:py-32 drop-shadow-xl rounded-md'>
        <div className='flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center '>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>Complex Research, Made Simple</h2>

            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              AbuurAI  </p><br /> <span className='font-bold text-indigo-600 '>the AI-powered reference manager </span>
            <br /><br /> annotate, cite papers and conduct literature reviews with
            <span className='text-indigo-500'> AI reliably.</span>

          </div>
          <Button asChild className="mt-5"  >
            <Link href='/sign-up'>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </main >
  );
}
