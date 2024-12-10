'use client';

import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {GiPadlock} from "react-icons/gi";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useForm} from "react-hook-form";

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();

    const onSubmit = (data)=> {
        console.log(data);
    }

    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-secondary'>
                    <div className='flex flex-row gap-3 items-center'>
                        <GiPadlock size={30} />
                        <h1 className='text-3xl font-semibold'>Login</h1>
                    </div>
                    <p className='text-neutral-500'>
                        Welcome back to NextMatch
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Input
                            defaultValue=''
                            label='Email'
                            variant='bordered'
                            {...register('email', {required: 'Email is required'})}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        <Input
                            defaultValue=''
                            label='Password'
                            variant='bordered'
                            type='password'
                            {...register('password', {required: 'Password is required'})}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button isDisabled={!isValid} fullWidth color='secondary' type='submit'>
                            Login
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
