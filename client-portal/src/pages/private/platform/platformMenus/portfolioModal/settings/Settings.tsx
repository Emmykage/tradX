import { Form } from 'antd'
import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import './settingsProfile.scss'
import DropDownOptions from '../components/dropDownOptions/DropDown';
import ChangePassword from '../../changePassword/ChangePassword';
import { Editable } from 'assets/icons';
import Input from "components/input/Input";
import PrimaryButton from 'components/primaryButton/PrimaryButton';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { INotification } from '@interfaces';
import Toggle from 'components/toggle/Toggle';
import useNotificationToggle from 'api/notification/useToggleNotification';
import { updateNotificationList } from '@store/slices/notification';
import useUpdateUser from 'api/user/useUpdateUser';
import { setUser } from '@store/slices/user';
import { toast } from 'react-toastify';
import useChangePassowrd from 'api/user/useChangePassword';
import StrengthMeter from '../../changePassword/StrengthMeter';

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
    const [cookies] = useCookies(["access_token"]);
    const [form] = Form.useForm();
    const { user } = useAppSelector((state) => state.user);
    const { notificationList } = useAppSelector((state) => state.notification);
    const dispatch = useAppDispatch();

    // Notification
    const { mutate, isPending } = useNotificationToggle({
        onSuccess: (data) => {
          dispatch(updateNotificationList(data));
        },
        onError: (error) => { },
    });

    // User
    const {  mutate: userMutation, isPending: userLoading  } = useUpdateUser({
        onSuccess: (data) => {
            dispatch(setUser({
                ...data,
            }));
            toast.success('Profile updated successfully');
        },
        onError: (error) => { },
    });

    // User
    const {  mutate: passwordMutation, isPending: passwordLoading  } = useChangePassowrd({
        onSuccess: (data) => {
            // dispatch(setUser({
            //     ...data,
            // }));
            toast.success('Password changed successfully');
        },
        onError: (error) => { },
    });

    const onSubmit = (data: any) => {
        userMutation({
            data: {first_name: data?.first_name, last_name: data?.last_name },
            token: cookies.access_token,
        });
    };
    const onPasswordSubmit = (data: any) => {
        passwordMutation({ token: cookies.access_token, formData: data });
    };

    const { handleSubmit, watch, control, formState } =
    useForm({
        defaultValues: {
            first_name: user?.first_name,
            last_name: user?.last_name,
            email: user?.email
        },
    });

    const { 
        handleSubmit: handlePasswordSubmit, 
        watch: passwordWatch, 
        control: passwordControl, 
        formState: passwordState } =
    useForm({
        defaultValues: {
            old_password: "",
            new_password: "",
            new_password_confirm: ""
        },
    });
    const newPass = passwordWatch("new_password");

    const handleNotificationToggle = (data: INotification) => {
        mutate({
            data: {notification_id: data?.id},
            token: cookies.access_token,
        });
    };
    const { errors } = formState;
    const { errors: passwordErrors } = passwordState;
    return (
        <div className='settingProfile h-full bg-[#1F324D66] p-8 rounded-lg overflow-y-auto'>
            <h3 className='text-xl font-normal text-white '>Personal Information</h3>

            <div className="">
                <div className="form-container mb-10">
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                    <div className='flex flex-col  gap-2'>
                        <div>
                            <div className="mt-4 ">
                                <div className="relative">
                                    <Controller
                                        name="first_name"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="first_name"
                                            title="First name"
                                            type="text"
                                            placeholder="Enter first name"
                                        />
                                        )}
                                    />
                                    <div className="absolute right-4 bottom-6"> <Editable/></div>
                                </div>
                                <p className="error_msg font-normal">
                                    {errors.first_name?.type === "required" &&
                                    "First name is required."}
                                </p>
                            </div>
                            <div className="mt-4 ">
                                <div className='relative'>
                                    <Controller
                                        name="last_name"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="last_name"
                                            title="Last name"
                                            type="text"
                                            placeholder="Enter last name"
                                        />
                                        )}
                                    />
                                    <div className="absolute right-4 bottom-6"> <Editable/></div>
                                </div>
                                <p className="error_msg font-normal">
                                    {errors.last_name?.type === "required" &&
                                    "Last name is required."}
                                </p>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <div className="relative">
                                        <Controller
                                            name="email"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="email"
                                                title="Email"
                                                type="email"
                                                disabled
                                                placeholder="Enter email"
                                            />
                                            )}
                                        />
                                        <div className="absolute right-4 bottom-6"> <Editable/></div>
                                    </div>
                                    <p className="error_msg font-normal">
                                        {errors.email?.type === "required" &&
                                        "Email is required."}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <PrimaryButton
                                    className={`${userLoading? '': 'bg-[#0094FF]'} `}
                                    Title="Update profile details"
                                    htmlType="submit"
                                    loading={userLoading}
                                />
                            </div>
                        </div>
                        


                    </div>
                

                
                    </form>
                </div>
                <DropDownOptions 
                options='2 factor Authentication'>
                <div>
                    <p>Use one-time passwords generated by an external app to log in. This will help protect your account from hackers.</p>
                </div>

                </DropDownOptions>

                <DropDownOptions  options='Password'>
                    <div>
                        {/* <ChangePassword /> */}
                        <div className="form-container mb-10">
                            <form 
                                onSubmit={handlePasswordSubmit(onPasswordSubmit)}
                            >
                            <div className='flex flex-col  gap-2'>
                                <div>
                                    <div className="mt-4 ">
                                        <div className="relative">
                                            <Controller
                                                name="old_password"
                                                control={passwordControl}
                                                rules={{ required: true }}
                                                render={({ field }) => (
                                                  <Input
                                                    {...field}
                                                    id="old_password"
                                                    title="Old Password"
                                                    type="password"
                                                    placeholder="Enter old password"
                                                  />
                                                )}
                                            />
                                            <div className="absolute right-4 bottom-6"> <Editable/></div>
                                        </div>
                                        <p className="error_msg font-normal">
                                            {passwordErrors.old_password?.type === "required" &&
                                            "Old password is required."}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <div className='relative'>
                                            <Controller
                                                 name="new_password"
                                                 control={passwordControl}
                                                 rules={{ required: true }}
                                                 render={({ field }) => (
                                                   <Input
                                                     {...field}
                                                     title="New Password"
                                                     type="password"
                                                     placeholder="Enter new password"
                                                   />
                                                 )}
                                            />
                                            <div className="absolute right-4 bottom-6"> <Editable/></div>
                                        </div>
                                        <p className="error_msg font-normal">
                                            {passwordErrors.new_password?.type === "required" &&
                                            "New password is required."}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            <div className="relative">
                                                <Controller
                                                    name="new_password_confirm"
                                                    control={passwordControl}
                                                    rules={{ required: true }}
                                                    render={({ field }) => (
                                                      <Input
                                                        {...field}
                                                        title="Confirm New Password"
                                                        type="password"
                                                        placeholder="Confirm password"
                                                      />
                                                    )}
                                                />
                                                <div className="absolute right-4 bottom-6"> <Editable/></div>
                                            </div>
                                            <p className="error_msg font-normal">
                                            {passwordErrors.new_password_confirm?.type === "required" &&
                                            "Confirm password is required."}
                                            </p>
                                        </div>
                                    </div>
                                    <StrengthMeter password={newPass} />
                                    <div className="mt-5">
                                        <PrimaryButton
                                            className={`${passwordLoading? '': 'bg-[#0094FF]'} `}
                                            Title="Change password"
                                            htmlType="submit"
                                            loading={passwordLoading}
                                        />
                                    </div>
                                </div>
                                


                            </div>
                        

                        
                            </form>
                        </div>
                    </div>
                </DropDownOptions>

                <DropDownOptions 
                    options='Notification'
                >
                    <div>
                        <div className="notificationsMenuSection">
                            <p className="notificationsSectionTitle">
                                Select the notifications you want to receive
                            </p>
                            {notificationList.map((notificationData: INotification, _i: number) => (
                                <Toggle
                                    key={_i}
                                    label={notificationData?.name}
                                    onChange={()=> handleNotificationToggle(notificationData)}
                                    subtext={notificationData?.description}
                                    defaultChecked={notificationData?.is_enabled}
                                    infoText={notificationData?.name === "Push Notifications" ? "Why should I receive them?" :""}
                                />
                            ))}
                
                        </div>
                    </div> 
                </DropDownOptions>


            
        </div>
        </div>
    )
}

export default Settings