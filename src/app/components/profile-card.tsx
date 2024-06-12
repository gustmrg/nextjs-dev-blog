import { Github, Laptop, PanelsTopLeft } from 'lucide-react'

export function ProfileCard() {
    const username = 'gustmrg'

    return (
        <div className='bg-base-profile rounded-lg self-center mx-60 mt-10'>
            <div className='flex items-center mx-10 my-8 gap-8'>
                <div className='h-[148px] w-[148px] overflow-hidden'>
                    <img src={`https://avatars.githubusercontent.com/${username}`} className='w-full h-full object-cover rounded-lg' alt='profile picture' />
                </div>
                <div className='grid flex-1 gap-4'>
                    <div>
                        <h1 className='text-2xl font-bold text-base-title'>Gustavo Miranda</h1>
                    </div>
                    <div className='text-base-text text-base'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae, at esse suscipit quaerat neque nulla atque? Voluptatibus tempora, eligendi voluptate laborum consequatur est at illum in soluta, sapiente omnis!</p>
                    </div>
                    <div className='flex items-start gap-6'>
                        <div className='flex items-start gap-2'>
                            <Github className='h-6 w-6 text-base-label' />
                            <span className='text-base-subtitle text-base'>gustmrg</span>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Laptop className='h-6 w-6 text-base-label' />
                            <span className='text-base-subtitle text-base'>Full-stack Web Developer</span>
                        </div>
                        <div className='flex items-start gap-2'>
                            <PanelsTopLeft className='h-6 w-6 text-base-label' />
                            <span className='text-base-subtitle text-base'>13 projetos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}