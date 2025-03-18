import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <Head title="Elfelejtett jelszó" />

                <div className="mb-4 text-sm text-gray-700 font">
                    <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-300 bg-clip-text text-transparent mb-1">
                        Elfelejtett jelszó
                    </h2>
                    <p className="text-md mb-1">
                    Kérjük, a jelszód visszaállításához add meg az e-mail-címedet!
                    </p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="email"
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="mt-4 flex items-center justify-center">
                        <PrimaryButton
                            className="ms-0 bg-red-500 hover:bg-red-300"
                            disabled={processing}
                        >
                            {/* Email Password Reset Link */}
                            Visszaállítás
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
