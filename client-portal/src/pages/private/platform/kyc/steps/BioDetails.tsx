import { Form, Button, Checkbox, Select, DatePicker } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "react-toastify";
import { GlobalStates, setSignInTab } from "@store/slices/global";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@store/hooks";
import useRegister from "api/user/useRegister";
import { ExclaimIcon, See, UnSee } from "assets/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SignUpFormData {
  full_name: string;
  country: string;
  address: string;
  year: string;
  month: string;
  date: string;
}

interface bioDetailsProps {
   handleNext: () => void
}

const BioDetails: React.FC<bioDetailsProps> = ({handleNext}) => {
    const { MonthPicker } = DatePicker;
    const { Option } = Select;
  const { signInTab } = useAppSelector(
    (state: { global: GlobalStates }) => state.global
  );
  const { handleSubmit, register, reset,  formState: {errors} } = useForm<SignUpFormData>();
  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  const { mutate, isPending } = useRegister({
    onSuccess: () => {
      reset();
      toast.success(
        "Success! An email has been sent to your account. Please verify your email to complete the registration process."
      );
      handleNext()
    },
  });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="max-w-4xl w-full formContainer px-5 bioDetails">
      <h5 className="text-white text-2xl font-semibold my-4">Enter your details</h5>
    

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:gap-10 justify-between">
          <div className="flex-1">
            <Form.Item
                name="full_name"
                validateStatus={errors.full_name ? "error" : ""}
                help={errors.full_name?.message}

            >
              <label htmlFor="full_name" className="text-base text-white">Full name</label>
              <input
                className="w-full py-3 px-4 bg-transparent border bordergra"
                type="text"
                id="full_name"
                placeholder="Enter your name"
                {...register("full_name", { required: "Full name required" })}     
                         />
            </Form.Item>
          </div>          
        </div>


        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="flex-1">
          <Form.Item
            validateStatus={errors.country ? "error" : ""}
            help={errors.country?.message}
        >
            <label htmlFor="country" className="text-white">Country</label>
            <Select
            id="country"
            placeholder="Select your country"
            className="w-full"
            {...register("country", { required: "Country is required" })}
            >
            <Option value="us">United States</Option>
            <Option value="ca">Canada</Option>
            <Option value="uk">United Kingdom</Option>
            <Option value="au">Australia</Option>
            <Option value="ng">Nigeria</Option>
            <Option value="in">India</Option>
            <Option value="cn">China</Option>
            <Option value="jp">Japan</Option>
            <Option value="de">Germany</Option>
            <Option value="fr">France</Option>
            <Option value="br">Brazil</Option>
            <Option value="za">South Africa</Option>
            {/* Add more country options as needed */}
            </Select>
        </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="address"
              validateStatus={errors.address ? "error" :""}
              help={errors.address?.message}
            >
              <label htmlFor="address" className="text-white">Address</label>
              <div className="relative">
                <input
                  className="loginInput"
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  {...register("address", {required:  "Address is  required",
                    }
                  )}
                />
                
              </div>
            </Form.Item>
          </div>
        </div>

        <h4 className="text-2xl mb-6 font-semibold text-[#F7F7F7]">Enter your date of birth</h4>

        <div className="grid grid-cols-3 gap-4">
        <Form.Item
        name="date"
        validateStatus={errors.date ? "error" : ""}
        help={errors.date?.message}
      >
        <label htmlFor="date" className="text-white">Date</label>
        <DatePicker
          id="date"
          format="DD/MM/YYYY"
          placeholder="Select Date"
          style={{ width: '100%' }}
          {...register("date", { required: "Date is required" })}
        />
      </Form.Item>

      {/* Month Input */}
      <Form.Item
        name="month"
        validateStatus={errors.month ? "error" : ""}
        help={errors.month?.message}
      >
        <label htmlFor="month" className="text-white">Month</label>
        <MonthPicker
          id="month"
          placeholder="Select Month"
          style={{ width: '100%' }}
          {...register("month", { required: "Month is required" })}
        />
      </Form.Item>

      <Form.Item
        name="year"
        validateStatus={errors.year ? "error" : ""}
        help={errors.year?.message}
      >
        <label htmlFor="year" className="text-white">Year</label>
        <DatePicker
          id="year"
          picker="year"
          placeholder="Select Year"
          style={{ width: '100%' }}
          {...register("year", { required: "Year is required" })}
        />
      </Form.Item>

        </div>
        
       <div className="flex my-8 justify-between">
       <Button
          type="primary"
          htmlType="submit"
          className=" back"
          loading={isPending}
        >
          Back
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="next"
          loading={isPending}
        >
          Next
        </Button>

       </div>
   
      </Form>
    </div>
  );
};

export default BioDetails;
