import Image from 'next/image';

interface PreviewMockupProps {
    alt: string;
    url: string;
}

export function PreviewMockup({alt, url }: PreviewMockupProps) {
    return (
      <div className="px-2">
        <div className="z-10 relative transition-all duration-200 h-[40dvh] lg:h-[auto] -translate-y-[10rem]">
          <div className="w-full h-full mx-auto rounded-[45px] max-w-6xl border border-opacity-20 border-white bg-white/20 p-[8px] z-1 overflow-hidden">
            <Image alt={alt} loading="lazy" src={url} width={1920} height={1080} className="w-full h-full object-cover rounded-[36px]"/>
          </div>
        </div>
      </div>
    );
}