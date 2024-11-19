import React from 'react'
import { Input, Textarea } from '@nextui-org/react';

export const ContactForm = () => {
  return (
    <div className='py-20'>
      <div className="container mx-auto flex items-center justify-center flex-col ">
        <h4 className="text-3xl pb-2 text-center font-bold border-b-2 border-primary mb-10">
          How to reach me.
        </h4>
        <form action="" className="w-1/2 rounded-lg bg-foreground shadow-2xl px-6">
          <Input type="email" label="Email" className="bg-background rounded my-2" />
          <Textarea
            isInvalid={true}
            variant="bordered"
            label="Additional Information"
            errorMessage="The description should be at least 255 characters long."
            className="bg-background rounded my-2 w-full"
          />
        </form>
      </div>
    </div>
  )
}
