import { useState } from "react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import { Eye, EyeOff } from "lucide-react";

export default function UpdatePasswordForm({
    className = '',
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Jelszó Frissítés
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Győződjön meg róla, hogy fiókja megfelelő hosszúságú,
                    véletlenszerű jelszót használ a biztonság megőrzése érdekében.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Jelenlegi jelszó"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password ? "A jelenlegi jelszó mező kitöltése kötelező." : ''}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Új jelszó" />

                    <div className="relative">
                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type={showPassword ? "text" : "password"}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />
                   <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-1 flex items-center pr-3"
                            >
                                {showPassword ? (
                                    <Eye className="w-4 h-4" />
                                ) : (
                                    <EyeOff className="w-4 h-4" />
                                )}
                            </button>
                    </div>



                    <InputError message={errors.password ? "A jelszó mező kitöltése kötelező." : ''} className="mt-2" />
                    
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Jelszó megerősítése"
                    />

                    <div className="relative">
                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-1 flex items-center pr-3"
                            >
                                {showPassword ? (
                                    <Eye className="w-4 h-4" />
                                ) : (
                                    <EyeOff className="w-4 h-4" />
                                )}
                            </button>
                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>mentés</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-900">
                            Elmentve.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
