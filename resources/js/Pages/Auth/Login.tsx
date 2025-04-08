import { useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div>
                        {/* Főcím nagyobb betűkkel */}
                        <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-300 bg-clip-text text-transparent mb-6">
                            Bejelentkezés
                        </h2>
                        <InputLabel htmlFor="email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError
                            message={errors.email ? "Hibás email cím vagy jelszó" : ""}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" />

                        <div className="relative">
                            <TextInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="jelszó"
                                value={data.password}
                                className="mt-1 block w-full pr-10"
                                autoComplete="current-password"
                                onChange={(e) => setData("password", e.target.value)}
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
                            message={errors.password ? "Kérlek add meg a jelszavad" : ""}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Emlékezz rá
                            </span>
                        </label>
                    </div>

                    <div className="mt-6 flex items-center justify-end">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="rounded-md text-sm text-blue-600 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                            >
                                Elfelejtette a jelszót?
                            </Link>
                        )}
                        {/* Nagyobb Bejelentkezés gomb */}
                        <PrimaryButton className="ms-4 px-6 py-3 text-lg font-semibold" disabled={processing}>
                            Bejelentkezés
                        </PrimaryButton>
                    </div>
                </form>

                {/* Vissza gomb a regisztrációs form alatt */}
                <div className="mt-6 flex justify-end space-x-4">
                    <Link
                        href="/register"
                        className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform text-center font-semibold"
                    >
                        Új profil létrehozása
                    </Link>

                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300 ease-in-out text-center"
                    >
                        Vissza
                    </Link>
                </div>
            </div>
        </div>
    );
}
