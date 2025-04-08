import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff } from "lucide-react";
import { FormEventHandler, useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <Head title="Register" />
                {/* Főcím nagyobb betűkkel */}
                <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-300 bg-clip-text text-transparent mb-6">
                    Regisztráció
                </h2>

                <form onSubmit={submit}>
                    {/* Név mező */}
                    <div>
                        <InputLabel htmlFor="name" />

                        <TextInput
                            id="name"
                            name="name"
                            placeholder="Név"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* E-mail mező */}
                    <div className="mt-4">
                        <InputLabel htmlFor="email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Jelszó mező */}
                    <div className="mt-4">
                        <InputLabel htmlFor="password" />

                        <div className="relative">
                            <TextInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Jelszó"
                                value={data.password}
                                className="mt-1 block w-full pr-10"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
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

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* Jelszó megerősítése mező */}
                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" />

                        <TextInput
                            id="password_confirmation"
                            type={showPassword ? "text" : "password"}
                            name="password_confirmation"
                            placeholder="Jelszó megerősítése"
                            value={data.password_confirmation}
                            className="mt-1 block w-full pr-10"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex items-center justify-end">
                        {/* Link a bejelentkezéshez */}
                        <Link
                            href={route("login")}
                            className="rounded-md text-sm text-blue-600 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Már regisztráltál?
                        </Link>

                        {/* Regisztráció gomb nagyobb méretben */}
                        <PrimaryButton
                            className="ms-4 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 hover:bg-blue-300"
                            disabled={processing}
                        >
                            Regisztráció
                        </PrimaryButton>
                    </div>
                </form>

                {/* Vissza gomb a regisztrációs form alatt */}
                <div className="mt-6 flex justify-end space-x-4">
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform text-center font-semibold"
                    >
                        Vissza
                    </Link>
                </div>
            </div>
        </div>
    );
}
