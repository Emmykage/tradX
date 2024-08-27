import { Form } from 'antd'
import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import { SubmitHandler, useForm } from 'react-hook-form';
import './settingsProfile.scss'
import DropDownOptions from '../components/dropDownOptions/DropDown';
interface formDataProps{
    first_name: string;
    last_name: string;
    email: string
}

const Settings = () => {
    const [formData, setFormData] = useState<formDataProps>({
        first_name: "",
        last_name: "",
        email: ""
    })
    const [form] = Form.useForm()

    const handleInputChange = () => {

    }
    const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm<formDataProps>();


    const onSubmit: SubmitHandler<formDataProps> = () => {

       
      };
  return (
    <div className='settingProfile h-full bg-[#1F324D66] p-8 rounded-lg overflow-y-auto'>
        <h3 className='text-xl text-white '>Personal Information</h3>

        <div className=''>

        <div className=' border bg-black'>
                <input type="text" className='py-2 w-full'/>
            </div>
        {/* <Form form={form} layout="vertical" onFinish={handleSubmit(onSubmit)}> */}

            


            {/* <input type="text" /> */}

        {/* <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
          <div className="flex-1 ">
            <Form.Item
              name="first_name"
            //   validateStatus={errors.first_name ? "error" : ""}
            //   help={errors.first_name?.message}
            >
              <FormInput
                label="First name"
                type="text"
                id="first_name"
                placeholder="Enter your First"
                inputValue={formData.first_name}
                inputName="first_name"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
          <div className="flex-1">
            <Form.Item
              name="first_name"
            //   validateStatus={errors.first_name ? "error" : ""}
            //   help={errors.first_name?.message}
            >
              <FormInput
                label="First name"
                type="text"
                id="first_name"
                placeholder="Enter your First"
                inputValue={formData.first_name}
                inputName="first_name"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
        </div> */}

        {/* <div className="flex flex-col md:flex-row gap-1 md:gap-4 justify-between">
          <div className="flex-1">
            <Form.Item
              name="first_name"
            //   validateStatus={errors.first_name ? "error" : ""}
            //   help={errors.first_name?.message}
            >
              <FormInput
                label="First name"
                type="text"
                id="first_name"
                placeholder="Enter your First"
                inputValue={formData.first_name}
                inputName="first_name"
                onChange={handleInputChange}
              />
            </Form.Item>
          </div>
        </div> */}
        {/* </Form> */}


        <DropDownOptions 
        options='options'>
            <div>
                Very factor auth
            </div>

            </DropDownOptions>

        
    </div>
    </div>
  )
}

export default Settings