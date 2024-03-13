'use client';

import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Modal from './Modal';

import useRentModal from "@/app/hooks/useRentModal";
import Heading from '../Heading';
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import CountrySelect from "../inputs/CountrySelect";
import Map from "../Map";


enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();
    
//controls for the enum steps
const [step, setStep] = useState(STEPS.CATEGORY);

//connect the select with the describe your place icons
const {
  register,
  handleSubmit,
  setValue,
  watch,
  formState: {
    errors,
  },
  reset
} = useForm<FieldValues>({
  defaultValues:{
    category: '',
    location: null,
    guestCount: 1,
    roomCount: 1,
    imageSrc: '',
    price: 1,
    title: '',
    description: '',
  }
});

const category = watch('category');
const location = watch('location');

const setCustomValue =  (id: string, value: any) => {
  setValue(id, value, {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true
  })
}

//functions which will go backward or forward
const onBack = () => {
  setStep((value) => value - 1);
};
const onNext = () => {
  setStep((value) => + 1);
}
//action labels
const actionLabel = useMemo(() => {
  //check if user is in the last step
  if (step === STEPS.PRICE) {
    return "Create";
  }//else
  return "Next";
}, [step]);

const secondaryActionLabel = useMemo(() => {
  //check if user is in the first step
  if (step === STEPS.CATEGORY) {
    return undefined;
  }//else
  return "Back";
}, [step]);

//our body content with let since its a changeable variable
  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
      title="Which of these best describes your place?"
      subtitle="Pick a category"
      />
      {/*Map the categories in a grid */}
      <div
      className='
      grid
      grid-cols-1
      md:grid-cols-2
      gap-3
      max-h-[50vh]
      overflow-y-auto'
      >
        {categories.map((item) => (
          <div key={item.label} className='col-span-1'>
            <CategoryInput
            onClick={(category) => setCustomValue('category', category)}
            selected={category === item.label}
            label={item.label}
            icon={item.icon}
            />
          </div>
        ))}
      </div>
      </div>
  )
  //create next step
  if (step === STEPS.LOCATION) {
  bodyContent = (
  <div className="flex flex-col gap-8">
  <Heading 
  title="Where is your place located?"
  subtitle="Help guests find you"
  />
  <CountrySelect
  value={location}
  onChange={(value) => setCustomValue('location', value)}
  />
  <Map />
  </div>
  )
  }

    return (
    <Modal
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={onNext}
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    title='Airbnb you home'
    body={bodyContent}
    />
  );
}

export default RentModal
