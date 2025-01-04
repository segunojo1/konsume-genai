'use client'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { showConnect } from '@stacks/connect'
import { useUserSession } from '@/hooks/useUserSession'
import { useRouter } from 'next/navigation'
import { axiosKonsumeInstance } from '@/http/konsume'

const SocialLogin = () => {
  const { data: session } = useSession();
  const userSession = useUserSession();
  const route = useRouter()
  const loginWithStacks = () => {
    showConnect({
      appDetails: {
        name: 'Konsume',
        icon: window.location.origin + '/favicon.ico',
      },
      redirectTo: '/',
      onFinish: async () => {
        let userData = userSession.loadUserData();
        console.log(userData);
        // const {data} = await axiosKonsumeInstance.post('/api/auth/login', userData, {
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // })
        route.push('/dashboard')
      },
      userSession,
    });
  }
  return (
    <div className="flex flex-col justify-between gap-4 mt-4">
      <p className='text-desktop-highlight font-bold mx-auto'>Or</p>
      <div className='flex flex-col gap-3 items-center h-full'>
      <Button className="mx-auto p-[10px] h-full flex-[.7] border-2 md:w-[350px] w-full hover:bg-primary-bg-800 hover:text-white border-primary-bg-800 text-primarygtext rounded-[30px] flex items-center gap-[10px] text-desktop-highlight font-bold" onClick={() => signIn("google")}>
        <Image src="/assets/google.png" width={32} height={32} alt='google' />
        Sign in with Google
      </Button>
      <Button className="mx-auto p-[10px] h-full flex-[.7] border-2 md:w-[350px] w-full hover:bg-orange-400 hover:text-white border-orange-400 text-primarygtext rounded-[30px] flex items-center gap-[10px] text-desktop-highlight font-bold" onClick={() => loginWithStacks()}>
        <Image src="/stacks.svg" width={32} height={32} alt='stacks' />
        Sign in with Stacks Connect
      </Button>
      </div>
      {/* <button onClick={() => {
        signOut({ redirect: false })
      }
      }>Sign Out</button> */}
    </div>
  )
}

export default SocialLogin