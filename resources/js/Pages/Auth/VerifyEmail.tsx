import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email hitelesítés" />

            <div className="mb-4 text-sm text-gray-600 ">
                Köszönjük hogy regisztráltál! Mielőtt elkezdjük,
                erősítsd meg az e-mail címed az általunk küldött linken keresztül.
                Ha nem kaptad meg az e-mailt, szívesen elküldjük újra.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600 ">
                    Az új megerősítő linket elküldtük a regisztráció során megadott email címre.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        Email hítelesítés újraküldése
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Kijelentkezés
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
