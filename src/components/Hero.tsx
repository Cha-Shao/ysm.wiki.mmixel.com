import MainImage from '@/assets/main.webp'
import clsx from 'clsx'

const Hero = () => {
  return (
    <div className={clsx(
      "flex flex-col relative",
      "lg:flex-row lg:pt-32",
      "-mb-32"
    )}>
      <div className='shrink-0 space-y-4'>
        <h1 className='text-4xl lg:text-7xl'>
          Yes Steve Model
          <br />
          是，史蒂夫模型
        </h1>
        <p className='text-xl'>一个可以自定义修改玩家模型动画的模组</p>
        <div className="flex space-x-4">
          <a
            href='/intro'
            className='text-[white] no-underline px-4 py-2 rounded-full bg-accent flex items-center gap-2'
          >
            <span>开始教程</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
          </a>
          <a
            href="/download"
            className='text-white no-underline px-4 py-2 simple-border rounded-full flex items-center gap-2'
          >
            <span>下载模组</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"></path></svg>
          </a>
        </div>
      </div>
      <div className='-order-1 lg:order-1 mb-8 z-10'>
        <img
          src={MainImage.src}
          alt="fox"
          className='w-full lg:scale-150'
        />
      </div>
    </div>
  )
}

export default Hero
