import {Button} from "@nextui-org/button";
import {FaRegSmile} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    return (
        <div className='ml-2'>
            <h1 className='text-3xl font-semibold text-red-500'>
                Hello world!
            </h1>
            <Button
                as={Link}
                href='/members'
                color='primary'
                variant='bordered'
                startContent={<FaRegSmile size='20px' />}
            >
                Click Me!
            </Button>
        </div>
    );
}
