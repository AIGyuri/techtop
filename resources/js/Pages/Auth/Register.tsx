import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

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
                <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-300 bg-clip-text text-transparent mb-4">
                    Regisztráció
                </h2>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name"  />

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

                    <div className="mt-4">
                        <InputLabel htmlFor="email"/>

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

                    <div className="mt-4">
                        <InputLabel htmlFor="password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Jelszó"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            placeholder="Jelszó megerésítése"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
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

                    <div className="mt-4 flex items-center justify-end">
                        <Link
                            href={route("login")}
                            className="rounded-md text-sm text-blue-600 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Regisztráltál már?
                        </Link>

                        <PrimaryButton
                            className="ms-4 bg-blue-500 hover:bg-blue-300"
                            disabled={processing}
                        >
                            Regisztráció
                        </PrimaryButton>
                    </div>
                </form>

                  {/* Vissza gomb a regisztrációs form alatt */}
                <div className="mt-4 flex justify-right">
                    <Link
                        href="/" // Vissza a főoldalra
                        className="inline-block bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                        Vissza
                    </Link>
                </div>
            </div>
        </div>
    );
}
