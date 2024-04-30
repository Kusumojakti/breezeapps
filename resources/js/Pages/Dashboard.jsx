import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-3xl text-gray-900 dark:text-gray-100">Kesimpulan</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-justify text-xl text-gray-900 dark:text-gray-100">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Laravel Breeze adalah paket autentikasi sederhana dan ringan untuk Laravel yang menyediakan implementasi dasar untuk fitur-fitur penting seperti login, registrasi, reset password, dan verifikasi email. Breeze menggunakan Blade dan Tailwind CSS untuk templating dan styling, menjadikannya pilihan ideal untuk pengembang yang menginginkan solusi autentikasi yang mudah diintegrasikan dan tidak membebani sistem. Proses instalasinya yang cepat dan sederhana memungkinkan pengembang untuk segera memulai dengan aplikasi Laravel yang dilengkapi sistem autentikasi, membuat Breeze menjadi pilihan yang praktis dan efisien bagi proyek-proyek baru.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
