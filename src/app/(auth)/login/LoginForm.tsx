import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {GiPadlock} from "react-icons/gi";
import {Input} from "@nextui-org/input";

export default function LoginForm() {
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
                <form action=''>
                    <div className='space-y-4'>
                        <Input
                            label='Email'
                            variant='bordered'
                        />
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
