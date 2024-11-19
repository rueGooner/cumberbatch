'use client';

import React from 'react'
import { Input, Select, Textarea } from '@nextui-org/react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface ContactFormInputs {
  email: string;
  message: string;
  reason: string;
}

export const ContactForm = () => {
  const {
    handleSubmit,
    setValue,
    control,
    register
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      message: '',
      reason: '',
    }
  });

  const onFormSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  }


  return (
    <div className='py-20'>
      <div className="container mx-auto flex items-center justify-center flex-col ">
        <h4 className="text-3xl pb-2 text-center font-bold border-b-2 border-primary mb-10">
          How to reach me.
        </h4>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="w-1/2 rounded-lg bg-slate-300 shadow-2xl p-6 flex flex-col z-10">
          <input {...register("email")} />
          <button type='submit'>Click</button>
        </form>
      </div>
    </div>
  )
}
