import { Head } from '@inertiajs/react';
import ReactLogo from '@/Components/ReactLogo';
import DefaultStepper from '@/Components/DefaultStepper';
import DemoAnimation from '@/Components/DemoAnimation';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
    Bars3Icon,
    LinkIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
} from "@material-tailwind/react";

const navigation = [
    { name: 'Team', href: '#team' },
    { name: 'Pengertian Laravel', href: '#pengertianLaravel' },
    { name: 'Instalasi Laravel', href: '#instalasiLaravel' },
    { name: 'Pengertian Breeze', href: '#pengertianBreeze' },
    { name: 'Insatalasi Breeze', href: '#instalasiBreeze' },
    { name: 'Demo', href: '#demo' },
];




function TeamCard({ img, name, title }) {

    return (
        <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
            <CardBody className="text-center">
                <Avatar
                    src={img}
                    alt={name}
                    variant="circular"
                    size="xxl"
                    className="mx-auto mb-6 object-top w-20"
                />
                <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
                    {name}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-2 !text-base !font-semibold text-gray-600"
                >
                    {title}
                </Typography>
                <div className="flex items-center justify-center gap-1.5">
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-twitter text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-linkedin text-lg" />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <i className="fa-brands fa-dribbble text-lg" />
                    </IconButton>
                </div>
            </CardBody>
        </Card>
    );
}

const posts = [
    {
        id: 1,
        title: 'Sederhana dan Ringan',
        description:
            'Laravel Breeze menawarkan kerangka kerja autentikasi yang sederhana dan ringan, sangat cocok untuk proyek-proyek kecil hingga menengah atau sebagai titik awal pembelajaran.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    {
        id: 2,
        title: 'Mudah Dipahami dan Implementasi yang cepat',
        description:
            'Karena Breeze menggunakan Blade sebagai templating engine dan tidak menggunakan JavaScript yang kompleks, kode sumbernya mudah dipahami dan diikuti oleh pengembang baru atau yang memiliki pengalaman. dan memungkinkan pengembang untuk dengan cepat mengimplementasikan fitur autentikasi dasar seperti login, pendaftaran, lupa kata sandi, dan verifikasi email.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    {
        id: 3,
        title: 'Dokumentasi dan Dukungan Komunitas',
        description:
            'Memiliki dokumentasi yang lengkap dan dukungan dari komunitas Laravel yang besar, yang membantu pengembang mendapatkan bantuan dan tutorial dengan mudah.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    // More posts...
];

const posts2 = [
    {
        id: 1,
        title: 'Fitur Terbatas',
        description:
            'Dibandingkan dengan starter kit lain seperti Laravel Jetstream atau Laravel Fortify, Breeze memiliki fitur yang lebih terbatas, terutama jika proyek memerlukan fitur autentikasi yang lebih kompleks atau kustomisasi lanjutan.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    {
        id: 2,
        title: 'Kurang Fleksibel untuk Skala Besar',
        description:
            'Meskipun ideal untuk proyek-proyek kecil dan menengah, Breeze mungkin tidak sefleksibel opsi lain dalam menangani kebutuhan yang lebih kompleks dan skala aplikasi yang lebih besar.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    {
        id: 3,
        title: 'Kurangnya Fitur SPA (Single Page Application) atau SSR (Server Side Rendering)',
        description:
            'Breeze tidak secara otomatis mendukung aplikasi Single Page Application atau teknologi Server Side Rendering yang bisa lebih efisien untuk aplikasi modern.',
        date: 'Mar 16, 2024',
        datetime: '2024-04-30',
        category: { title: 'Breeze' },
        
    },
    // More posts...
];

const members = [
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?w=740&t=st=1714364716~exp=1714365316~hmac=c96268e4f92233bd079d143f3f7fa02b9d74aadb520f0a942cd13f72faf0c462",
        name: "Norfajriyah",
        title: "5210411024",
    },
    {
        img: "https://img.freepik.com/premium-photo/3d-man-cat-playful-happy-expression_435599-34220.jpg?w=740",
        name: "Dwi Rangga Okta Z",
        title: "5210411054",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1714364718~exp=1714365318~hmac=4fbd0d0673c40fb6d9b4e18989f4b2a6dd39cb48670c0b9ea3d0c7e227f722f0",
        name: "M. Aqsha Pasalewa ",
        title: "5210411080",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1714364718~exp=1714365318~hmac=4fbd0d0673c40fb6d9b4e18989f4b2a6dd39cb48670c0b9ea3d0c7e227f722f0",
        name: "Danu Dwiki Laksana ",
        title: "5210411165",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?w=740&t=st=1714364716~exp=1714365316~hmac=c96268e4f92233bd079d143f3f7fa02b9d74aadb520f0a942cd13f72faf0c462",
        name: "Hanggraini Dea Astuti ",
        title: "5210411330",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1714364718~exp=1714365318~hmac=4fbd0d0673c40fb6d9b4e18989f4b2a6dd39cb48670c0b9ea3d0c7e227f722f0",
        name: "M. Naufal Hadi J ",
        title: "5210411365",
    },
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const smoothScroll = (e, targetId) => {
        e.preventDefault();  // Prevent default anchor click behavior
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Head title="Welcome" />
            {/* Header Kustom */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white opacity-90 rounded-b-lg">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" onClick={(e) => smoothScroll(e, item.href.substring(1))} className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} onClick={(e) => smoothScroll(e, item.href.substring(1))} href={item.href} className="text-xl font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href={route('register')} className="text-xl font-semibold leading-6 text-gray-900">
                            Register <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a
                            href={route('login')} className="ml-10 text-xl font-semibold leading-6 text-gray-900">
                            Login <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href={route('register')}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Register
                                    </a>
                                    <a
                                        href={route('login')}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <main className=" bg-gray-900">
                {/* Background Biru Banner */}
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-72 sm:py-20 lg:py-60">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Tren Teknologi Mobile A
                            </h1>
                            <h1 className="text-3xl mt-5 font-bold tracking-tight text-white sm:text-4xl">
                                Kelompok G
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Laravel Starter Kit : Laravel Breeze
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Dosen Pengampu : Adam Sekti Aji, S.Kom., M.Kom.
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                {/* our team */}
                <section className="min-h-screen bg-slate-100 py-8 px-8 lg:py-28" id='team'>
                    <div className="container mx-auto bg-gray-light" >
                        <div className="mb-10 text-center lg:mb-10">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="text-lg"
                            >
                                Meet the Team
                            </Typography>
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="my-2 !text-2xl lg:!text-4xl"
                            >
                                Behind the Success: Our Dedicated Team
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {members.map((props, key) => (
                                <TeamCard key={key} {...props} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Banner Starter */}
                <div className="bg-slate-900 py-8 text-black/50 dark:bg-black dark:text-white/50">
                    <img
                        id="background"
                        className="absolute -left-20 top-0 max-w-[877px]"
                        src="https://laravel.com/assets/img/welcome/background.svg"
                    />
                    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                            {/* 3 Logo */}
                            <div id="pengertianLaravel" className="item-center justify-center">
                                <div className="mt-0 grid items-center lg:grid-cols-3">
                                    <div className="flex my-10 item-center justify-center lg:col-start-2">
                                        <svg
                                            className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                            viewBox="0 0 62 65"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                                                fill="currentColor"
                                            />
                                        </svg>

                                        <ReactLogo className="mx-10 h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" />

                                        <img
                                            className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pengertian Tools Laravel, React, dan Tailwind */}
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                                {/* Apa itu Laravel */}
                                <a
                                    href="https://laravel.com/docs"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="h-6 w-auto text-white lg:h-8 lg:text-[#FF2D20]"
                                            viewBox="0 0 62 65"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">Laravel</h2>
                                        <p className="mt-4 text-justify text-lg/relaxed">
                                            Laravel adalah framework atau kerangka kerja berbasis bahasa pemrograman PHP . Laravel menyediakan berbagai fitur yang dapat membantu membangun aplikasi web yang kompleks, seperti autentikasi, otorisasi, caching, routing, dan validasi.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                {/* Apa itu React.JS */}
                                <a
                                    href="https://legacy.reactjs.org/"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            viewBox="0 0 34 32"
                                            fill="#61dafb"
                                            height="50"
                                            width="50"
                                        >
                                            <path
                                                fill="#61dafb"
                                                d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
                                            />
                                            <path
                                                fill="#61dafb"
                                                d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
                                            />
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            React.JS
                                        </h2>

                                        <p className="mt-4 text-justify text-lg/relaxed">
                                            ReactJS atau React adalah library JavaScript populer buatan Facebook yang digunakan dalam proses pengembangan aplikasi mobile dan web. React berisi kumpulan snippet kode JavaScript (disebut ‘komponen’) yang bisa digunakan berulang kali untuk mendesain antarmuka pengguna.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                {/* Apa itu React.JS */}
                                <a
                                    href="https://tailwindui.com/"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">

                                        <img
                                            className="h-6 w-auto text-white lg:h-8 lg:text-[#FF2D20]"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"

                                        />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Tailwind CSS
                                        </h2>

                                        <p className="mt-4 text-justify text-lg/relaxed">
                                            Tailwind CSS adalah utility-first framework CSS yang didesain untuk mempermudah dan mempercepat pembuatan aplikasi menggunakan desain custom.
                                            Utility-first classes merupakan utilitas tingkat rendah (low-level) untuk membuat desain khusus di dalam file HTML.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

                {/* instalasi laravel */}
                <div className='min-h-screen flex justify-center items-center bg-white' id='instalasiLaravel'>
                    <div class="p-4 ">
                        <h1 class="text-4xl text-center font-semibold mb-6 text-grey-900">Instalasi Laravel</h1>
                        <div class="container">
                            <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

                                <div class="flex md:contents">
                                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div class="h-full w-6 flex items-center justify-center">
                                            <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                        </div>
                                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                            <i class="fas fa-check-circle text-white"></i>
                                        </div>
                                    </div>
                                    <div class="bg-slate-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                        <h3 class="text-xl font-semibold mb-1">Install Composer</h3>
                                        <p class="text-lg leading-tight text-justify w-full">
                                            Download composer sesuai dengan sistem operasi melalui <a href="https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos">getcomposer.org</a>
                                        </p>
                                    </div>
                                </div>

                                <div class="flex md:contents">
                                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div class="h-full w-6 flex items-center justify-center">
                                            <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                        </div>
                                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                            <i class="fas fa-check-circle text-white"></i>
                                        </div>
                                    </div>
                                    <div class="bg-slate-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                        <h3 class="font-semibold text-xl mb-1">Create Project Laravel</h3>
                                        <p class=" text-lg leading-tight text-justify">
                                            <li>
                                                Buka terminal atau command prompt
                                            </li>
                                            <li>
                                                Ketikan perintah: composer create-project laravel/laravel example-app
                                            </li>
                                        </p>
                                    </div>
                                </div>

                                <div class="flex md:contents">
                                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div class="h-full w-6 flex items-center justify-center">
                                            <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                        </div>
                                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                            <i class="fas fa-check-circle text-white"></i>
                                        </div>
                                    </div>
                                    <div class="bg-slate-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                        <h3 class="font-semibold text-xl mb-1">Setup Environtment</h3>
                                        <p class="text-lg leading-tight text-justify">
                                            Edit file .env untuk penyesuaian environtment
                                        </p>
                                    </div>
                                </div>

                                <div class="flex md:contents">
                                    <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div class="h-full w-6 flex items-center justify-center">
                                            <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                        </div>
                                        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                            <i class="fas fa-check-circle text-white"></i>
                                        </div>
                                    </div>
                                    <div class="bg-slate-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                        <h3 class="font-semibold text-xl mb-1">Running Project</h3>
                                        <p class="leading-tight text-lg text-justify">
                                            Run project dengan perintah: php artisan serve
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Pengertian Breeze */}
                <div className="min-h-screen flex justify-center items-center bg-slate-900" id='pengertianBreeze'>
                    <div className='container'>
                        <div>

                            <h1 class="text-4xl text-center mt-20 mb-16font-semibold text-white">Pengertian Breeze</h1>
                            <div className="px-4 sm:px-0">
                                <h3 className="text-2xl font-semibold leading-7 text-white">Informasi tentang Breeze</h3>
                                <p className="mt-1 max-w-2xl text-xl leading-6 text-gray-200">Sebuah framework scaffolding untuk Laravel.</p>
                            </div>

                            <div className="mt-6 divide-y border-t border-gray-100">

                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xl font-medium leading-6 text-white">Pengertian</dt>
                                    <dd className="mt-1  text-xl leading-6 text-white sm:col-span-2 sm:mt-0">
                                        Breeze adalah framework scaffolding untuk Laravel yang menyediakan komponen UI dan alur kerja pengembangan yang umum, yaitu proses register dan login.
                                    </dd>
                                </div>
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xl font-medium leading-6 text-white">Menyediakan</dt>
                                        <dd className="mt-1 text-xl leading-6 text-white sm:col-span-2 sm:mt-0">Komponen UI dan alur kerja pengembangan yang umum untuk MVC</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xl font-medium leading-6 text-white">Komponen UI yang disediakan</dt>
                                        <dd className="mt-1 text-xl leading-6 text-white sm:col-span-2 sm:mt-0">Komponen UI standar untuk Laravel, seperti:<br></br>Formulir<br></br>Tombol<br></br>Tabel<br></br>dll</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xl font-medium leading-6 text-white">Alur Kerja Pengembangan</dt>
                                        <dd className="mt-1 text-xl leading-6 text-white sm:col-span-2 sm:mt-0">Breeze menyediakan alur kerja pengembangan yang umum untuk Laravel, seperti scaffolding controller dan migrasi database.</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xl font-medium leading-6 text-white">Dokumentasi</dt>
                                        <dd className="mt-2 text-xl text-white sm:col-span-2 sm:mt-0">
                                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-xl leading-6">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <LinkIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                            <span className="truncate font-medium">https://laravel.com/docs/11.x/starter-kits</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href="https://laravel.com/docs/11.x/starter-kits" className="font-medium text-indigo-400 hover:text-indigo-400">
                                                            Go
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kelebihan Breeze */}
                <div className="min-h-screen flex justify-center items-center bg-white">
                    <div className='container'>
                        <div className="bg-white py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl lg:mx-0">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kelebihan Starter Kit Laravel : Breeze</h2>
                                    <p className="mt-2 text-xl leading-8 text-gray-600">
                                        Breeze memiliki beberapa kelebihan, diantaranya:
                                    </p>
                                </div>
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts.map((post) => (
                                        <article key={post.id} className="flex bg-slate-900 p-8 rounded-lg max-w-xl flex-col items-start justify-between">
                                            <div className="flex items-center gap-x-4 text-s">
                                                <time dateTime={post.datetime} className="text-white">
                                                    {post.date}
                                                </time>
                                                <a
                                                    href={post.category.href}
                                                    className="relative z-10 text-s rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-600"
                                                >
                                                    {post.category.title}
                                                </a>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-8 text-xl border-b border-white font-semibold leading-6 text-white group-hover:text-white">
                                                    <a href={post.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </a>
                                                </h3>
                                                <p className="mt-5 text-lg leading-6 text-white">{post.description}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Kekurangan Breeze */}
                <div className="min-h-screen flex justify-center items-center bg-slate-900">
                    <div className='container'>
                        <div className="bg-slate-900 py-24 sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className=" mx-auto max-w-2xl lg:mx-0">
                                    <h2 className=" text-3xl font-bold tracking-tight text-white sm:text-4xl">Kekurangan Starter Kit Laravel : Breeze</h2>
                                    <p className="mt-2 text-xl leading-8 text-gray-200">
                                        Breeze memiliki beberapa Kekurangan, diantaranya:
                                    </p>
                                </div>
                                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    {posts2.map((post) => (
                                        <article key={post.id} className="flex bg-white p-8 rounded-lg max-w-xl flex-col items-start justify-between">
                                            <div className="flex items-center gap-x-4 text-s">
                                                <time dateTime={post.datetime} className="text-slate-900">
                                                    {post.date}
                                                </time>
                                                <a
                                                    href={post.category.href}
                                                    className="relative z-10 text-s rounded-full bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-white"
                                                >
                                                    {post.category.title}
                                                </a>
                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-8 text-xl border-b border-slate-900 font-semibold leading-6 text-slate-900 group-hover:text-slate-900">
                                                    <a href={post.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </a>
                                                </h3>
                                                <p className="mt-5 text-lg leading-6 text-slate-900">{post.description}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Insatalasi Breeze */}
                <div className="min-h-screen flex justify-center items-center bg-white" id="instalasiBreeze">
                    <div className='container'>
                        <DefaultStepper onStepChange={(step) => console.log('Current step:', step)} />
                    </div>
                </div>

                {/* Demo */}
                <div className="min-h-screen flex justify-center items-center bg-slate-900" id='demo'>
                    <div className='container'>
                        <DemoAnimation />
                    </div>
                </div>
            </main >

            <footer className="py-16 text-center text-xl text-black dark:text-white/70">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>

        </>
    );
}
