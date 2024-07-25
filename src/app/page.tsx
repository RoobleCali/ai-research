import { Button } from '@/components/ui/button';
import { Brain, BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image';
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
            <Link href='/dashboard'>
              Get Started
            </Link>
          </Button>
        </div>

        {/* image */}
        <div className='relative overflow-hidden  pt-16'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <Image src="https://afforai.com/img/landing_page/main-image-xxl.webp" alt='App Screenshot' width={2432} height={1442} className='mb-[-0%] rounded-xl shadow-2xl ring-l ring-gray-900/10' />
          </div>
          <div aria-hidden="true" className='relative'>
            <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/50 pt-[5%] ' />
          </div>
        </div>
        <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
          <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
            {
              features.map(feature => (
                <div key={feature.title} className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <feature.icon aria-hidden="true" className='absolute left-1 top-1 h-5 w-5 text-indigo-500' />
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              ))
            }
          </dl>
        </div>

      </div>
    </main >
  );
}
